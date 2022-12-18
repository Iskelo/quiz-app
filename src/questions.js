export const questions = [
	{
		'questionText': ' If you want to import just the Component from the React library, what syntax do you use?',
		'questionImg': require('./img/carbon.png'),
		'answerOptions': [
			{ 'ansverText': 'import React.Component from "react"', inCorrect: false },
			{ 'ansverText': 'import [ Component ] from "react"', inCorrect: false },
			{ 'ansverText': 'import Component from "react"', inCorrect: false },
			{ 'ansverText': 'import { Component } from "react"', inCorrect: true }
		]
	},
	{
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