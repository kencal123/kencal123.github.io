/* eslint-env es6 */
/* eslint-disable no-console */

const form = document.getElementById('comments');
// adding data to db
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.name.value = '';
	form.email.value = '';
    form.comment.value = '';
    //sendEmail();
});
form.addEventListener('submit', sendEmail);
// reading from db
/*
const div = document.querySelector('.cont');

renderList = (doc) => {
    var main_div = document.createElement('div');
    var card_body = document.createElement('div');
    var name = document.createElement('h5');
    var comment = document.createElement('p');
    main_div.setAttribute('class','card mt-3');
    card_body.setAttribute('class','card-body'); name.setAttribute('class','card-title');
    comment.setAttribute('class','card-text');
    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;
    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);
    div.appendChild(main_div);
}
*/
db.collection('comments').onSnapshot(snap => {
    //added line */
    db.collection('comments').orderBy("date", Query.Direction.ASCENDING);
    let changes = snap.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            renderList(change.doc);
            console.log(change.doc.data());
        }
    });
});
function sendEmail() {
	Email.send({
        SecureToken : "<86e67c81-19eb-4b48-8267-5d885d9c0754>",
    //Host: "smtp.gmail.com",
	//Username : "<emmaghealy.portfolio@gmail.com>",
	//Password : "<Defender801!>",
	To : '<healye801@gmail.com>',
	From : "<emmaghealy.portfolio@gmail.com>",
	Subject : "<Form Submission>",
	Body : "<Someone has submitted a form on RedbirdCoveStrategies.com.  Please check their response at https://console.firebase.google.com/u/0/project/redbird-cove-comments-draft/firestore/data/~2Fcomments~2FucuHXWeX1KyWHFaELiZx>",
	}).then(
		message => alert("Message sent successfully. Thanks!")
	);
}