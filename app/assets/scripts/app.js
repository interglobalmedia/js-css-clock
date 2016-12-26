import $ from 'jquery';

const dialLines = document.getElementsByClassName('diallines');
const clockEl = document.getElementsByClassName('clock-face')[0];
/* this for loop makes sure that the hour hand moves 6 degrees every minute. the actual diallines that are being added here have a property of visibility: hidden because they are not decessary to the design. */
for (let i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

import { setDate } from './modules/clock';

setInterval(setDate, 100);
