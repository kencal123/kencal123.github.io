//index.js
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<emmaghealy.portfolio@gmail.com>",
	Password : "<Defender801!>",
	To : '<emmaghealy.portfolio@gmail.com>',
	From : "<emmaghealy.portfolio@gmail.com>",
	Subject : "<Form Submission>",
	Body : "<Someone has submitted a form on RedbirdCoveStrategies.com.  Please check their response at https://console.firebase.google.com/u/0/project/redbird-cove-comments-draft/firestore/data/~2Fcomments~2FucuHXWeX1KyWHFaELiZx>",
	}).then(
		message => alert("Message sent successfully. Thanks!")
	);
}