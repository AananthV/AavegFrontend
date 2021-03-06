import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Set background color
// const colorCodes = ['#2a34c4', '#2e4800', '#e31a1a', '#e9e9e9', '#ffe399']
// document.getElementsByTagName('body')[0].style.backgroundImage = `linear-gradient(315deg, #000000 0%, ${colorCodes[localStorage.getItem('key')]} 90%)`
document.getElementsByTagName('body')[0].style.backgroundImage = 'url(/images/bg_' + localStorage.getItem('hostel') + '.jpg)';

ReactDOM.render(<App />, document.getElementById('root'))


console.log(
  '%c' +
  '                `   -:-`                \n' +
  '             .:/+- -++++/.              \n' +
  '            -+++++/+++++:               \n' +
  '             .+++++++++-                \n' +
  '              `/++++++-                 \n' +
  '               :++++++:`                \n' +
  '              :++++++++/.               \n' +
  '             :+++++/+++++-              \n' +
  '            :+++++-`:+++++:`            \n' +
  '           :+++++.   -+++++/`           \n' +
  '          :+++++.     ./+++++.          \n' +
  '  .-.....:+++++:```````./+++++:`        \n' +
  '  :++++++++++++++++++++++++++++//////:  \n' +
  '  /++++++++++++++++++++++++++++++++++/  \n' +
  '  ```.++++++-...----------::/++++++::-  \n' +
  '     -/++++`                 -+++/:`    \n' +
  '       `.:`                   .-`       \n' +
  'Curious?\nStay tuned for our Induction briefing',
  'color: green'
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
