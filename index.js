const express = require('express');
const cors = require('cors');
const auth = require('./src/middleware/index');

const app = express();
const port = 5000;

app.use(cors());

//app.use(middleware.decodeToken);

app.get('/', auth.protect, (req,res) => {
    res.send('Hello World');
})

app.get('/api/quizzes', (req, res) => {

	return res.json({
		quizzes: [
			{
				title: 'Quiz1',
				category: 'Cities',
				questions: {
					question1: 'How many people live in Berlin?',
					correctAnswer: '3,5 millions',
					answers: ['1 million', '2 millions', '4 millions', '8 millions']
				}
			},
			{
				title: 'Quiz2',
				category: 'Cities',
				questions: {
					question1: 'How many people live in London?',
					correctAnswer: '8 millions',
					answers: ['1 million', '2 millions', '4 millions', '8 millions']
				}
			},
		],
	});
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});