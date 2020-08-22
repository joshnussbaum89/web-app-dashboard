/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

// Search
const search = document.querySelector('#search');
const exitIcon = document.querySelector('.exit-icon');
const alertBox = document.querySelector('.alert-box');

// Settings on/off switches
const smallCirc1 = document.querySelector('.small-circ1');
const bigCirc1 = document.querySelector('.big-circ1');
const smallCirc2 = document.querySelector('.small-circ2');
const bigCirc2 = document.querySelector('.big-circ2');

// On/off switch labels
const emailOn1 = document.querySelector('.email-on1');
const emailOff1 = document.querySelector('.email-off1');
const emailOn2 = document.querySelector('.email-on2');
const emailOff2 = document.querySelector('.email-off2');

// User form variables 
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

const alertBell = document.querySelector('.bell-svg');
const alertNotifications = document.querySelector('.alert-notifications');
const alertNotificationsUl = document.querySelector('.alert-notifications-list');
const alertNotificationsLi = document.querySelectorAll('.alert-notifications-li');
let nogo = 0;

// display notifications
alertBell.addEventListener('click', () => {
    alertNotifications.classList.toggle('displayBlock');
});

// Close individual notifications
alertNotificationsUl.addEventListener('click', (e) => {
    for (let i = 0; i < alertNotificationsLi.length; i++) {
        e.target.remove();
    }
    nogo++
    if (nogo >= 3) {
        alertNotificationsUl.style.display = "none";
    }
});

// Hide search icon when focused
search.addEventListener('focusin', () => {
    document.querySelector('.search-icon').classList.toggle('hide-content');
});

// Show search icon when not in focus
search.addEventListener('focusout', () => {
    document.querySelector('.search-icon').classList.toggle('hide-content');
});

// Exit alert box
exitIcon.addEventListener('click', () => {
    alertBox.style.display = 'none';
    alertBox.style.transition = '.4s';
})

// Search user event listener
send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

//JQuery for autocomplete 
$(function () {
    const newMembers = [
        "Victoria Chambers",
        "Dale Byrd",
        "Dawn Wood",
        "Josh Sullivan"
    ];
    $("#userField").autocomplete({
        source: newMembers
    });
});

// toggle settings switch on/off
bigCirc1.addEventListener('click', () => {
    smallCirc1.classList.toggle('margin-left');
    bigCirc1.classList.toggle('color-change');
    emailOn1.classList.toggle('displayBlock');
    emailOff1.classList.toggle('displayNone');
})

bigCirc2.addEventListener('click', () => {
    smallCirc2.classList.toggle('margin-left');
    bigCirc2.classList.toggle('color-change');
    emailOn2.classList.toggle('displayBlock');
    emailOff2.classList.toggle('displayNone');
})