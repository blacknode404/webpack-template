import _ from 'lodash';
import './style.css';
const css = require('./test.css').toString();
//
//console.log(css.toString()); // {String}

function component() {
    
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());