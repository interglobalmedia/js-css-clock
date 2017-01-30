const dialLines = document.getElementsByClassName('diallines');
const clockEl = document.getElementsByClassName('clock-face')[0];
/* this for loop makes sure that the hour hand moves 6 degrees every minute. the actual diallines that are being added here have a property of visibility: hidden because they are not decessary to the design. */
for (let i = 1; i < 60; i++) {
    clockEl.innerHTML += `<div class=diallines></div>`;
    dialLines[i].style.transform = `rotate(${6 * i}${deg})`;
}
export function setDate() {
    // get time
    const now = new Date();
    const seconds = now.getSeconds();
    const secondHand = document.querySelector('.second-hand');
    // 360 degrees subtly + 90 to account for default div behavior
    const secondsDegrees = (seconds * 6) + 90;
    // because this does not work properly in Safari or FireFox
    secondHand.style.mozTransform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.webkitTransform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (secondsDegrees === 90) {
        secondHand.style.transition = 'all 0.0s';
    } else {
        secondHand.style.transition = 'all 0.05s';
    }

    const minutes = now.getMinutes();
    const minHand = document.querySelector('.min-hand');
    // 360 degrees subtly + 90 to account for default div behavior
    const minutesDegrees = (minutes * 6 + seconds * (360 / 3600)) + 90;
    // because this does not work properly in Safari or FireFox
    minHand.style.mozTransform = `rotate(${minutesDegrees}deg)`;
    minHand.style.webkitTransform = `rotate(${minutesDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hourHand = document.querySelector('.hour-hand');
    // 360 degrees subtly + 90 to account for default div behavior
    const hoursDegrees = (hours * 30 + minutes * (360 / 720)) + 90;
    // because this does not work properly in Safari or FireFox
    hourHand.style.mozTransform = `rotate(${hoursDegrees}deg)`;
    hourHand.style.webkitTransform = `rotate(${hoursDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 100);
