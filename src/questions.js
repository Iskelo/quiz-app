export const questions = [
	{
		'id': '1',
		'questionText': 'How do you fix the syntax error that results from running this code?',
		'questionImg': './logo.svg',
		'answerOptions': [
			{ 'ansverText': 'Wrap the object in parentheses.', inCorrect: true },
			{ 'ansverText': 'Call the function from another file.', inCorrect: false },
			{ 'ansverText': 'Add a return statement before the first curly brace.', inCorrect: false },
			{ 'ansverText': 'Replace the object with an array.', inCorrect: false }
		]
	},
	{
		'id': '2',
		'questionText': 'If you see the following import in a file, what is being used for state management in the component? import React, {useState} from "react";',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'React Hooks', inCorrect: true },
			{ 'ansverText': 'stateful components', inCorrect: false },
			{ 'ansverText': 'math', inCorrect: false },
			{ 'ansverText': 'class components.', inCorrect: false }

		]
	},
	{
		'id': '3',
		'questionText': 'Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?',
		'questionImg': './img/Q1.png',
		'answerOptions': [
			{ 'ansverText': '{{name: "Rachel", age: 31}}', inCorrect: false },
			{ 'ansverText': '{name: "Rachel", age: 31}', inCorrect: true },
			{ 'ansverText': '{person: "Rachel", person: 31}}', inCorrect: false },
			{ 'ansverText': '{person: {name: "Rachel", age: 31}}', inCorrect: false }
		]
	}
]