import React from "react"
import  ReactDOM  from "react-dom/client"

const Parent = React.createElement('p', { id: 'parent' },  [
    React.createElement('div', {}, 'i am from parent'),

    React.createElement('p', { id: 'child' }, [
        React.createElement('div', {}, 'i am from children'),
    ])

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Parent);
