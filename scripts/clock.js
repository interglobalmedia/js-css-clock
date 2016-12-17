const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    // get time
    const now = new Date();
    /* Had to compensate for difference of one hour. It was originally one hour behind. Why I have no clue. */
    now.setTime(now.getTime() - new Date().getTimezoneOffset() / 60 / 1000);
    const seconds = now.getSeconds();
    // 360 degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // because this does not work properly in Safari or FireFox
    secondHand.style.mozTransform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.webkitTransform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    // because this does not work properly in Safari or FireFox
    minHand.style.mozTransform = `rotate(${minutesDegrees}deg)`;
    minHand.style.webkitTransform = `rotate(${minutesDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    // because this does not work properly in Safari or FireFox
    hourHand.style.mozTransform = `rotate(${hoursDegrees}deg)`;
    hourHand.style.webkitTransform = `rotate(${hoursDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);
    /* Removed if statement fix because only added it for the sake of the 'transition: all 0.03s'. Since removed it, don't need this anymore. */
}
setInterval(setDate, 1000);
