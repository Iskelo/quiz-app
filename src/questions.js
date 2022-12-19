export const questions = [
	{
		'id': 'q1',
		'questionText': ' If you want to import just the Component from the React library, what syntax do you use?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'import React.Component from "react"', inCorrect: false },
			{ 'ansverText': 'import [ Component ] from "react"', inCorrect: false },
			{ 'ansverText': 'import Component from "react"', inCorrect: false },
			{ 'ansverText': 'import { Component } from "react"', inCorrect: true }
		]
	},
	{
		'id': 'q2',
		'questionText': 'If a function component should always render the same way given the same props, what is a simple performance optimization available for it?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'Wrap it in the React.memo higher-order component.', inCorrect: true },
			{ 'ansverText': 'Implement the useReducer Hook.', inCorrect: false },
			{ 'ansverText': 'Implement the useMemo Hook.', inCorrect: false },
			{ 'ansverText': 'Implement the shouldComponentUpdate lifecycle method.', inCorrect: false }

		]
	},
	{
		'id': 'q3',
		'questionText': 'How do you fix the syntax error that results from running this code?',
		'questionImg': require('./img/q3.png'),
		'answerOptions': [
			{ 'ansverText': 'Wrap the object in parentheses.', inCorrect: true },
			{ 'ansverText': 'Call the function from another file.', inCorrect: false },
			{ 'ansverText': 'Add a return statement before the first curly brace.', inCorrect: false },
			{ 'ansverText': 'Replace the object with an array.', inCorrect: false }
		]
	},
	{
		'id': 'q4',
		'questionText': 'If you see the following import in a file, what is being used for state management in the component?',
		'questionImg': require('./img/q4.png'),
		'answerOptions': [
			{ 'ansverText': 'React Hooks', inCorrect: true },
			{ 'ansverText': 'stateful components', inCorrect: false },
			{ 'ansverText': 'math', inCorrect: false },
			{ 'ansverText': 'class components', inCorrect: false }
		]
	},
	{
		'id': 'q5',
		'questionText': 'Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?',
		'questionImg': require('./img/q5.png'),
		'answerOptions': [
			{ 'ansverText': '{{name: "Rachel", age: 31}}', inCorrect: false },
			{ 'ansverText': '{name: "Rachel", age: 31}', inCorrect: true },
			{ 'ansverText': '{person: "Rachel", person: 31}}', inCorrect: false },
			{ 'ansverText': '{person: {name: "Rachel", age: 31}}', inCorrect: false }

		]
	},
	{
		'id': 'q6',
		'questionText': 'What is the testing library most often associated with React?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'Mocha', inCorrect: false },
			{ 'ansverText': 'Chai', inCorrect: false },
			{ 'ansverText': 'Sinon', inCorrect: false },
			{ 'ansverText': 'Jest', inCorrect: true }
		]
	},
	{
		'id': 'q7',
		'questionText': 'To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?',
		'questionImg': require('./img/q7.png'),
		'answerOptions': [
			{ 'ansverText': 'const first = ["cooking", "art", "history"]', inCorrect: false },
			{ 'ansverText': 'const [] = ["cooking", "art", "history"]', inCorrect: false },
			{ 'ansverText': 'const [, first]["cooking", "art", "history"]', inCorrect: false },
			{ 'ansverText': 'const [first] = ["cooking", "art", "history"]', inCorrect: true }
		]
	},
	{
		'id': 'q8',
		'questionText': 'How do you handle passing through the component tree without having to pass props down manually at every level?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'React Send', inCorrect: true },
			{ 'ansverText': 'React Pinpoint', inCorrect: false },
			{ 'ansverText': 'React Router', inCorrect: false },
			{ 'ansverText': 'React Context', inCorrect: false }

		]
	},
	{
		'id': 'q9',
		'questionText': 'What should the console read when the following code is run?',
		'questionImg': require('./img/q9.png'),
		'answerOptions': [
			{ 'ansverText': 'Horse', inCorrect: false },
			{ 'ansverText': 'Cat', inCorrect: true },
			{ 'ansverText': 'Mouse', inCorrect: false },
			{ 'ansverText': 'undefined', inCorrect: false }
		]
	},
	{
		'id': 'q10',
		'questionText': 'What is the name of the tool used to take JSX and turn it into createElement calls?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'JSX Editor', inCorrect: false },
			{ 'ansverText': 'ReactDOM', inCorrect: false },
			{ 'ansverText': 'Browser Buddy', inCorrect: false },
			{ 'ansverText': 'Babel', inCorrect: true }
		]
	},
	{
		'id': 'q11',
		'questionText': 'Why might you use useReducer over useState in a React component?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'when you want to replace Redux', inCorrect: false },
			{ 'ansverText': 'when you need to manage more complex state in an app', inCorrect: true },
			{ 'ansverText': 'when you want to improve performance', inCorrect: false },
			{ 'ansverText': 'when you want to break your production app', inCorrect: false }

		]
	},
	{
		'id': 'q12',
		'questionText': 'Which props from the props object is available to the component with the following syntax?',
		'questionImg': require('./img/q12.png'),
		'answerOptions': [
			{ 'ansverText': 'any that have not changed', inCorrect: false },
			{ 'ansverText': 'all of them', inCorrect: true },
			{ 'ansverText': 'child props', inCorrect: false },
			{ 'ansverText': 'any that have changed', inCorrect: false }
		]
	},
	{
		'id': 'q13',
		'questionText': 'Consider the following code from React Router. What do you call :id in the path prop?',
		'questionImg': require('./img/q13.png'),
		'answerOptions': [
			{ 'ansverText': 'This is a route modal', inCorrect: false },
			{ 'ansverText': 'This is a route parameter', inCorrect: true },
			{ 'ansverText': 'This is a route splitter', inCorrect: false },
			{ 'ansverText': 'This is a route link', inCorrect: false }
		]
	},
	{
		'id': 'q14',
		'questionText': 'If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?',
		'questionImg': require('./img/q14.png'),
		'answerOptions': [
			{ 'ansverText': 'div', inCorrect: false },
			{ 'ansverText': 'section', inCorrect: false },
			{ 'ansverText': 'component', inCorrect: false },
			{ 'ansverText': 'h1', inCorrect: true }

		]
	},
	{
		'id': 'q15',
		'questionText': 'What does this React element look like given the following function? (Alternative: Given the following code, what does this React element look like?)',
		'questionImg': require('./img/q15.png'),
		'answerOptions': [
			{ 'ansverText': "<h1 props={null}>What's happening?</h1> ", inCorrect: false },
			{ 'ansverText': "<h1>What's happening?</h1>", inCorrect: true },
			{ 'ansverText': "<h1 id='component'>What's happening?</h1>", inCorrect: false },
			{ 'ansverText': "<h1 id='element'>What's happening?</h1>", inCorrect: false }
		]
	},
	{
		'id': 'q16',
		'questionText': 'What property do you need to add to the Suspense component in order to display a spinner or loading state?',
		'questionImg': require('./img/q16.png'),
		'answerOptions': [
			{ 'ansverText': 'lazy', inCorrect: false },
			{ 'ansverText': 'loading', inCorrect: false },
			{ 'ansverText': 'fallback', inCorrect: true },
			{ 'ansverText': 'spinner', inCorrect: false }
		]
	},
	{
		'id': 'q17',
		'questionText': 'What do you call the message wrapped in curly braces below?',
		'questionImg': require('./img/q17.png'),
		'answerOptions': [
			{ 'ansverText': 'a JS function', inCorrect: false },
			{ 'ansverText': 'a JS element', inCorrect: false },
			{ 'ansverText': 'a JS expression', inCorrect: true },
			{ 'ansverText': 'a JSX wrapper', inCorrect: false }

		]
	},
	{
		'id': 'q18',
		'questionText': 'What can you use to handle code splitting?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'React.memo', inCorrect: false },
			{ 'ansverText': 'React.split', inCorrect: false },
			{ 'ansverText': 'React.lazy', inCorrect: true },
			{ 'ansverText': 'React.fallback', inCorrect: false }
		]
	},
	{
		'id': 'q19',
		'questionText': 'When do you use useLayoutEffect?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'to optimize for all devices', inCorrect: false },
			{ 'ansverText': 'to complete the update', inCorrect: false },
			{ 'ansverText': 'to change the layout of the screen', inCorrect: false },
			{ 'ansverText': 'when you need the browser to paint before the effect runs', inCorrect: true }
		]
	},
	{
		'id': 'q20',
		'questionText': 'What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?',
		'questionImg': require('./img/q20.png'),
		'answerOptions': [
			{ 'ansverText': 'Button A will not have access to the event object on click of the button.', inCorrect: false },
			{ 'ansverText': 'Button B will not fire the handler this.handleClick successfully.', inCorrect: false },
			{ 'ansverText': 'Button A will not fire the handler this.handleClick successfully', inCorrect: false },
			{ 'ansverText': ' There is no difference.', inCorrect: true }

		]
	},
	{
		'id': 'q21',
		'questionText': 'How do you destructure the properties that are sent to the Dish component?',
		'questionImg': require('./img/q9.png'),
		'answerOptions': [
			{ 'ansverText': 'function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }', inCorrect: false },
			{ 'ansverText': 'function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }', inCorrect: true },
			{ 'ansverText': 'function Dish(props) { return <h1>{name} {cookingTime}</h1>; }', inCorrect: false },
			{ 'ansverText': 'function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }', inCorrect: false }
		]
	},
	{
		'id': 'q22',
		'questionText': 'When might you use React.PureComponent?',
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'when you do not want your component to have props', inCorrect: false },
			{ 'ansverText': 'when you have sibling components that need to be compared', inCorrect: false },
			{ 'ansverText': 'when you want a default implementation of shouldComponentUpdate()', inCorrect: true },
			{ 'ansverText': 'when you do not want your component to have state', inCorrect: false }
		]
	},
	{
		'id': 'q23',
		'questionText': "Why is it important to avoid copying the values of props into a component's state where possible?",
		'questionImg': '',
		'answerOptions': [
			{ 'ansverText': 'because you should never mutate state', inCorrect: false },
			{ 'ansverText': 'because getDerivedStateFromProps() is an unsafe method to use', inCorrect: false },
			{ 'ansverText': 'because you want to allow a component to update in response to changes in the props', inCorrect: true },
			{ 'ansverText': 'because you want to allow data to flow back up to the paren', inCorrect: false }

		]
	},
	{
		'id': 'q24',
		'questionText': 'What is the children prop?',
		'questionImg': require('./img/q12.png'),
		'answerOptions': [
			{ 'ansverText': 'a property that adds child components to state', inCorrect: false },
			{ 'ansverText': "a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it's contents.", inCorrect: true },
			{ 'ansverText': 'a property that lets you set an array as a property', inCorrect: false },
			{ 'ansverText': 'any that have changed', inCorrect: false }
		]
	}
]