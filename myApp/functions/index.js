const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const LOBBIES = 'lobbies'
const PERSONS = 'persons'
const GROUPS = 'groups'

var admin = require("firebase-admin");
var firebase = require("firebase")
require("firebase/firestore");

var serviceAccount = require('./linkedout-df9d4-firebase-adminsdk-kh9b9-1000278367.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://linkedout-df9d4.firebaseio.com"
});

const db = admin.firestore()

// GET(name)
// 201 if lobby already exists, 200 if successful
exports.createLobby = functions.https.onRequest((request, response) => {
    const lobbyName = request.query.name
    return db.collection(LOBBIES).doc(lobbyName).get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                response.status(201).send("lobby already exists")
            } else {
                const lobby = {};
                return admin.firestore().collection(LOBBIES).doc(lobbyName).set(lobby).then(r => {
                    response.status(200).send("lobby created");
                })
            }
        });
})

// GET(name)
exports.getLobby = functions.https.onRequest(async (request, response) => {
    const lobbyName = request.query.name
    let personsResult = await db.collection(LOBBIES).doc(lobbyName).collection(PERSONS).get();
    let groupsResult = await db.collection(LOBBIES).doc(lobbyName).collection(GROUPS).get();
    let res = {}
    res[PERSONS] = {}
    res[GROUPS] = []
    personsResult.forEach(doc => {
        res[PERSONS][doc.id] = doc.data()
    })
    groupsResult.forEach(doc => {
        res[GROUPS].append(doc.data())
    })
    return response.status(200).send(res)
})

// POST(uid, name, bio, telegram, lobby)
// 201 if lobby doesn't exist, 200 if successful
exports.joinLobby = functions.https.onRequest(async (request, response) => {
    const uid = request.body.uid
    const name = request.body.name
    const bio = request.body.bio
    const lobbyName = request.body.lobby
    const telegram = request.body.telegram

    // create group for user
    group = {
        memberIds: [uid],
        likedGroupIds: []
    }

    lobbySnap = await db.collection(LOBBIES).doc(lobbyName).get()
    if (!lobbySnap.exists) {
        return response.status(201).send('lobby doesn\'t exist')
    }
    docRef = await db.collection(LOBBIES).doc(lobbyName).collection(GROUPS).add(group)

    const user = {
        name: name,
        bio: bio,
        groupId: docRef.id,
        photoUrl: '',
        telegram: telegram
    }
    // add user to persons in the lobby
    await db.collection(LOBBIES).doc(lobbyName).collection(PERSONS).doc(uid).set(user)
    return response.status(200).send('join ' + lobbyName + ' successful')
})

// GET(lobby, likedGroup, myGroup)
// 201 if group merged, 200 if like successful
exports.likeGroup = functions.https.onRequest(async (request, response) => {
    const lobby = request.query.lobby
    const likedGroupId = request.query.likedGroup
    const myGroupId = request.query.myGroup

    likedGroupRef = db.collection(LOBBIES).doc(lobby).collection(GROUPS).doc(likedGroupId)
    myGroupRef = db.collection(LOBBIES).doc(lobby).collection(GROUPS).doc(myGroupId)

    likedGroup = await likedGroupRef.get()
    if (likedGroup.get('likedGroupIds').includes(myGroupId)) {
        // need to merge group
        myGroup = await myGroupRef.get()
        newMembers = []
        likedGroup.get('memberIds').forEach(x => newMembers.push(x))
        myGroup.get('memberIds').forEach(x => newMembers.push(x))
        newGroup = {
            memberIds: newMembers,
            likedGroupIds: []
        }
        await myGroupRef.delete()
        await likedGroupRef.delete()
        newGroupRef = await db.collection(LOBBIES).doc(lobby).collection(GROUPS).add(newGroup)
        // update the group id of members
        newGroup.memberIds.forEach(async id => {
            await db.collection(LOBBIES).doc(lobby).collection(PERSONS).doc(id).update({groupId: newGroupRef.id})
        })
        return response.status(201).send('group merged')
    } else {
        updates = {
            likedGroupIds: admin.firestore.FieldValue.arrayUnion(likedGroupId)
        }
        await myGroupRef.update(updates)
        return response.status(200).send('like successful')
    }
})

// GET(lobby, group, kickedId)
exports.kick = functions.https.onRequest(async (request, response) => {
    const lobby = request.query.lobby
    const group = request.query.group
    const kickedId = request.query.kickedId

    oldGroup = await db.collection(LOBBIES).doc(lobby).collection(GROUPS).doc(group).get()
    newMembers = []
    oldGroup.get('memberIds').forEach(id => {
        if (id != kickedId) {
            newMembers.push(id)
        }
    })

    newGroup = {
        likedGroupIds: [],
        memberIds: newMembers
    }
    otherGroup = {
        likedGroupIds: [],
        memberIds: [kickedId]
    }

    newGroupRef = await db.collection(LOBBIES).doc(lobby).collection(GROUPS).add(newGroup)
    otherGroupRef = await db.collection(LOBBIES).doc(lobby).collection(GROUPS).add(otherGroup)

    // update group id in person
    newMembers.forEach(async id => {
        await db.collection(LOBBIES).doc(lobby).collection(PERSONS).doc(id).update({groupId: newGroupRef.id})
    })
    await db.collection(LOBBIES).doc(lobby).collection(PERSONS).doc(kickedId).update({groupId: otherGroupRef.id})
    await oldGroup.delete()

    return response.status(200).send('kick successful')
})

// POST(lobby, uid, photourl)
exports.updatePhotoUrl = functions.https.onRequest(async (request, response) => {
    const uid = request.body.uid
    const lobby = request.body.lobby
    const photourl = request.body.photourl

    await db.collection(LOBBIES).doc(lobby).collection(PERSONS).doc(uid).update({photoUrl: photourl})

    return response.status(200).send('update successful')
})

// POST(lobby, uid)
exports.getPhotoUrl = functions.https.onRequest(async (request, response) => {
    const uid = request.body.uid
    const lobby = request.body.lobby

    url = (await db.collection(LOBBIES).doc(lobby).collection(PERSONS).doc(uid).get()).get('photoUrl')

    return response.status(200).send(url)
})