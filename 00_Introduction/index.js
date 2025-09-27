/* < ------------------ JS: -------------> */

/* Importing React and ReactDOM library. Always rendering one element at the time */

// import React from "https://esm.sh/react@18.2.0"
// import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
// const appDomElement = document.getElementById('app')
// const root = ReactDOM.createRoot (appDomElement)

// const button = React.createElement('button', { "data-id": 123 }, 'Me gusta')
// const button2 = React.createElement('button', { "data-id": 456 }, 'Me gusta')
// const button3 = React.createElement('button', { "data-id": 789 }, 'Me gusta')
/* Creating a fragment to render more than 1 elemetns, since we can render one at the time */
// const div = React.createElement('React.Fragment', null, [button, button2, button3])

// root.render(button)

/* < ------------------ CSS: -------------> */
/*
<style>
button {
background: #09f%;B
color: #fff;
border: 0;
padding: 4px 8px;
font-size: 18px;
cursor: pointer;
}
body {
background: #222;
color: #fff;
font-family: system-ui;
}
</style>
*/
/* < ------------------ HTML: -------------> */
/* <div id="app"></div> */

// ======================================================================

/* < ------------------ JSX: -------------> */
/*
JSX is an extension of JavaScript, with HTML syntaxis, describing interface to create. Here we're recreating above code but with JSX.
JSX is not HTML, it's JS wrote with JSX for a more declarative way. SWC Transpiles JSX to JS to use React.
- We can use expressions (things that returns a value, a variable or functions that returns vallues) using {}, for example:
let nombre = "Miguel";
<h1>Hola, {nombre]</h1>
- For attributes we'll use camel case attributes instead of '-'since it's JS, not HTML: <button tabIndex="123">Me gusta</button>
- JSX avoid code injection:
const responde = '<script>alert("hola")</script>'
const elemt <h1>{responde}</h1>
The above two lives will show the responde as a string instead of HTML or JS. This avoids code injection.
*/

{/* <React.Fragment>
    <button data-id="123">Me gusta</button>
    <button data-id="456">Me gusta</button>
    <button data-id="789">Me gusta</button>
</React.Fragment> */}

// ======================================================================
/* < ------------------ Vite: -------------> */
/* 
Vite is an Web Application wrapper.
Documentation: vite.dev/guide

 */