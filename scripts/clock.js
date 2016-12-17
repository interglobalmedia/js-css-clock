const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    // get time
    const now = new Date();
    const seconds = now.getSeconds();
    // 360 degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // because this does not work properly in Safari
    secondHand.style.webkitTransform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    // because this does not work properly in Safari
    minHand.style.webkitTransform = `rotate(${minutesDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    // because this does not work properly in Safari
    hourHand.style.webkitTransform = `rotate(${hoursDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);
    /*
    We need to make sure that the minute hand moves when the second hand hits the 12 o'clock position. Before we move the minute hand, we need to communicate how far into the current minute we are. This condition checks to see if the hand is the minutes hand, and if so, sets a data attribute with the current degree of the seconds hand. This fixes the tendency for the second hand to jump several seconds when crossing the 12 mark. It smooths the rotation of the second hand in relation to the rotation of the minute hand.
    Why the need for this fix in the first place? Because when the clock is first drawn on the screen, there is less than one minute before the minute hand needs to move. To allow for this, we can calculate how long until this first minute ends and manually nudge the hand along. SetInterval takes care of that. And, as mentioned earlier, before we move the minute hand, we need to communicate how far into the current minute we are. */
    if(minHand === 'minutes') {
        minHand.parentNode.setAttribute('data-second-deg', secondHand.secondsDegrees);
    }
}
setInterval(setDate, 1000);
