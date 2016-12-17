const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    // get time
    const now = new Date();
    const seconds = now.getSeconds();
    // 360 degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);
    // check to see if the hand is the minutes hand, and if so, sets a data attribute with the current degree of the seconds hand. This fixes the tendency for the second hand to jump several seconds when crossing the 12 mark. It smooths the rotation of the second hand in relation to the rotation of the minute hand.
    if(minHand === 'minutes') {
        minHand.parentNode.setAttribute('data-second-deg', secondHand.secondsDegrees);
    }
}
setInterval(setDate, 1000);
