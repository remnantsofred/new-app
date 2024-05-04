const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const userDetails = document.getElementById('userDetails');

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});

const createMilestone = document.getElementById('createMilestone');
const milestonesList = document.getElementById('milestonesList');

const db = firebase.firestore();
let milestonesRef;
let unsubscribe;

auth.onAuthStateChanged(user => {

    if (user) {

        // Database Reference
        milestonesRef = db.collection('milestones')

        createMilestone.onclick = () => {

            const { serverTimestamp } = firebase.firestore.FieldValue;

            milestonesRef.add({
                // user: '/users/P1rx5MbLMY6fPGWbD9g5',
                uid: user.uid,
                name: faker.commerce.productName(),
                createdAt: serverTimestamp(),
                date: "1707936000000"
            });
        }
        // unsubscribe = milestonesRef.where('uid', '==', user.uid)
        unsubscribe = milestonesRef
            .onSnapshot(querySnapshot => {
                
                // Map results to an array of li elements

                const items = querySnapshot.docs.map(doc => {

                    return `<li>${doc.data().name}</li>`

                });

                milestonesList.innerHTML = items.join('');

            });
    } else {
      // Unsubscribe when the user signs out
      unsubscribe && unsubscribe();
  }
});