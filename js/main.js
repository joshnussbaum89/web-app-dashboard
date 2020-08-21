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
const alertNotificationsClose = document.querySelectorAll('.alert-notifications-close');

alertNotificationsUl.addEventListener('click', () => {
    while (alertNotificationsLi.length > 0) {
        alertNotificationsLi[0].remove();
    }
});

alertBell.addEventListener('click', () => {
    alertNotifications.classList.toggle('displayBlock');
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

// Charts
const mainChart = document.getElementById('mainChart').getContext('2d');
const dailyChart = document.getElementById('dailyChart').getContext('2d');
const mobileChart = document.getElementById('mobileChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Comfortaa';
Chart.defaults.global.defaultFontSize = 15;

// Line Chart on page load
let trafficLi = document.getElementsByClassName('traffic-li')[0];
let trafficChart = new Chart(mainChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Traffic',
            data: [
                750,
                1250,
                1000,
                1500,
                2000,
                1500,
                1750,
                1250,
                1750,
                2250,
                1750,
                2250
            ],
            backgroundColor: [
                'rgba(0, 17, 143, 0.2)',
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: '3',
            hoverBorderColor: 'rgb(51, 51, 51)'
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        legend: {
            display: false,
            align: 'start',
            labels: {
                fontColor: 'rgb(51, 51, 51)'
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 10,
                top: 30
            },
        },
        tooltips: {
            enabled: true
        },
    },
});

// Line chart hourly, daily, weekly, monthly
trafficLi.addEventListener('click', (e) => {
    if (e.target.innerText === 'Hourly') {
        let trafficChart = new Chart(mainChart, {
            type: 'line',
            data: {
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
                datasets: [{
                    label: 'Traffic',
                    data: [
                        750,
                        1250,
                        1000,
                        1500,
                        2000,
                        1500,
                        1750,
                        1250,
                        1750,
                        2250,
                        1750,
                        2250
                    ],
                    backgroundColor: [
                        'rgba(0, 17, 143, 0.2)',
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: '3',
                    hoverBorderColor: 'rgb(51, 51, 51)'
                }]
            },
            options: {
                // animation: {
                //     duration: 1
                // },
                legend: {
                    display: false,
                    align: 'start',
                    labels: {
                        fontColor: 'rgb(51, 51, 51)'
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        bottom: 10,
                        top: 30
                    },
                },
                tooltips: {
                    enabled: true
                },
            },
        });
    } else if (e.target.innerText === 'Daily') {
        let trafficChart = new Chart(mainChart, {
            type: 'line',
            data: {
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
                datasets: [{
                    label: 'Traffic',
                    data: [
                        650,
                        1050,
                        1100,
                        1900,
                        1300,
                        1500,
                        950,
                        1250,
                        1750,
                        1250,
                        1750,
                        1450
                    ],
                    backgroundColor: [
                        'rgba(0, 17, 143, 0.2)',
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: '3',
                    hoverBorderColor: 'rgb(51, 51, 51)'
                }]
            },
            options: {
                // animation: {
                //     duration: 0
                // },
                legend: {
                    display: false,
                    align: 'start',
                    labels: {
                        fontColor: 'rgb(51, 51, 51)'
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        bottom: 10,
                        top: 30
                    },
                },
                tooltips: {
                    enabled: true
                },
            },
        });
    } else if (e.target.innerText === 'Weekly') {
        let trafficChart = new Chart(mainChart, {
            type: 'line',
            data: {
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
                datasets: [{
                    label: 'Traffic',
                    data: [
                        850,
                        1050,
                        1100,
                        670,
                        900,
                        1200,
                        1300,
                        1750,
                        2050,
                        2250,
                        1750,
                        1950
                    ],
                    backgroundColor: [
                        'rgba(0, 17, 143, 0.2)',
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: '3',
                    hoverBorderColor: 'rgb(51, 51, 51)'
                }]
            },
            options: {
                // animation: {
                //     duration: 0
                // },
                legend: {
                    display: false,
                    align: 'start',
                    labels: {
                        fontColor: 'rgb(51, 51, 51)'
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        bottom: 10,
                        top: 30
                    },
                },
                tooltips: {
                    enabled: true
                },
            },
        });
    } else if (e.target.innerText === 'Monthly') {
        let trafficChart = new Chart(mainChart, {
            type: 'line',
            data: {
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
                datasets: [{
                    label: 'Traffic',
                    data: [
                        2000,
                        1550,
                        1700,
                        1110,
                        900,
                        1200,
                        1300,
                        1850,
                        2050,
                        2250,
                        1690,
                        1950
                    ],
                    backgroundColor: [
                        'rgba(0, 17, 143, 0.2)',
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: '3',
                    hoverBorderColor: 'rgb(51, 51, 51)'
                }]
            },
            options: {
                // animation: {
                //     duration: 0
                // },
                legend: {
                    display: false,
                    align: 'start',
                    labels: {
                        fontColor: 'rgb(51, 51, 51)'
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        bottom: 10,
                        top: 30
                    },
                },
                tooltips: {
                    enabled: true
                },
            },
        });
    }
});

// Daily Traffic Bar Chart
let dailyTrafficChart = new Chart(dailyChart, {
    type: 'bar',
    data: {
        labels: ['s', 'm', 't', 'w', 't', 'f', 's'],
        datasets: [{
            label: 'Traffic',
            data: [
                75,
                100,
                175,
                150,
                225,
                200,
                100,
            ],
            backgroundColor: [
                'rgba(52, 40, 122, 0.8)',
                'rgba(52, 40, 122, 0.8)',
                'rgba(52, 40, 122, 0.8)',
                'rgba(52, 40, 122, 0.8)',
                'rgba(52, 40, 122, 0.8)',
                'rgba(52, 40, 122, 0.8)',
                'rgba(52, 40, 122, 0.8)',
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: '3',
            hoverBorderColor: 'rgb(51, 51, 51)'
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        legend: {
            display: false
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            },
        },
        tooltips: {
            enabled: true
        },
    }
});

// Mobile Data Doughnut Chart
let mobileDataChart = new Chart(mobileChart, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Phones', 'Tablets',],
        datasets: [{
            label: 'Mobile Users',
            data: [
                65,
                20,
                15
            ],
            backgroundColor: [
                'rgba(52, 40, 122, 0.8)',
                '#63cc82',
                '#4da2bb',
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: '3',
            hoverBorderColor: 'rgb(51, 51, 51)'
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        legend: {
            display: true,
            position: 'right',
            align: 'center',
            labels: {
                fontColor: 'rgb(51, 51, 51)',
                boxWidth: 20,
                padding: 30
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            },
        },
        tooltips: {
            enabled: true
        },
    }
});