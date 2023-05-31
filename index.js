const express = require('express');
const cors = require('cors');
const auth = require('./src/middleware/index');
const { getFirestore } = require('firebase-admin/firestore');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = getFirestore();

app.get('/', async (req, res, next) => {

	try {
		const quizzes = db.collection('quizzes');
		const response = await quizzes.get();
		let responseArr = [];
		response.forEach(doc => {
			responseArr.push(doc.data())
		})
		res.send(responseArr);
	}
	catch (error) {
		res.status(400).send(error.message);
	}
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});