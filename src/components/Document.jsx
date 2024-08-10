import React from 'react'

const Document = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Questions and Answers</h1>
                <div className="max-w-4xl mx-auto">
                    <div className="mt-4 flex">
                        <h3 className="text-lg font-semibold text-blue-600 mr-2">Question:</h3>
                        <h2 className="text-xl font-bold">What is HTML?</h2>
                    </div>
                    <div className="my-1 flex">
                        <h3 className="text-lg font-semibold text-green-600 mr-2">Answer:</h3>
                        <p className="text-grey-700 text-base font-normal text-left">HTML (HyperText Markup Language) is the standard markup language used to create the structure of content on webpage</p>
                    </div>

                    <div className="mt-4 flex">
                        <h3 className="text-lg font-semibold text-blue-600 mr-2">Question:</h3>
                        <h2 className="text-xl font-bold">What is CSS?</h2>
                    </div>
                    <div className="my-1 flex">
                        <h3 className="text-lg font-semibold text-green-600 mr-2">Answer:</h3>
                        <p className="text-grey-700 text-base font-normal text-left">CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.</p>
                    </div>

                    <div className="mt-4 flex">
                        <h3 className="text-lg font-semibold text-blue-600 mr-2">Question:</h3>
                        <h2 className="text-xl font-bold">What is a Function?</h2>
                    </div>
                    <div className="my-1 flex">
                        <h3 className="text-lg font-semibold text-green-600 mr-2">Answer:</h3>
                        <p className="text-grey-700 text-base font-normal text-left">A function is a block of reusable code designed to perform a particular task, which is executed when it is called.</p>
                    </div>

                    <div className="mt-4 flex">
                        <h3 className="text-lg font-semibold text-blue-600 mr-2">Question:</h3>
                        <h2 className="text-xl font-bold">How many types of components?</h2>
                    </div>
                    <div className="my-1 flex">
                        <h3 className="text-lg font-semibold text-green-600 mr-2">Answer:</h3>
                        <p className="text-grey-700 text-base font-normal text-left">There are two main types of components in React: Class Components and Functional Components.</p>
                    </div>

                    <div className="mt-4 flex">
                        <h3 className="text-lg font-semibold text-blue-600 mr-2">Question:</h3>
                        <h2 className="text-xl font-bold">Difference between components?</h2>
                    </div>
                    <div className="my-1 flex">
                        <h3 className="text-lg font-semibold text-green-600 mr-2">Answer:</h3>
                        <p className="text-grey-700 text-base font-normal text-left">Class components are ES6 classes that extend from React.Component and can have state and lifecycle methods. Functional components are simpler and use React hooks to manage state and side effects.</p>
                    </div>

                    <div className="mt-4 flex">
                        <h3 className="text-lg font-semibold text-blue-600 mr-2">Question:</h3>
                        <h2 className="text-xl font-bold">React hooks, types</h2>
                    </div>
                    <div className="my-1 flex">
                        <h3 className="text-lg font-semibold text-green-600 mr-2">Answer:</h3>
                        <p className="text-grey-700 text-base font-normal text-left">React hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, useContext, useReducer, etc.</p>
                    </div>

                    <div className="mt-4 flex">
                        <h3 className="text-lg font-semibold text-blue-600 mr-2">Question:</h3>
                        <h2 className="text-xl font-bold">Lifecycle method</h2>
                    </div>
                    <div className="my-1 flex">
                        <h3 className="text-lg font-semibold text-green-600 mr-2">Answer:</h3>
                        <p className="text-grey-700 text-base font-normal text-left">Lifecycle methods are special methods in React class components that are invoked at different phases of the component’s life cycle, such as componentDidMount, componentDidUpdate, and componentWillUnmount.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Document
