/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

const search = document.querySelector('#search');
const exitIcon = document.querySelector('.exit-icon');
const alert = document.querySelector('.alert');

const smallCirc1 = document.querySelector('.small-circ1');
const bigCirc1 = document.querySelector('.big-circ1');
const smallCirc2 = document.querySelector('.small-circ2');
const bigCirc2 = document.querySelector('.big-circ2');


// Hide search icons when focused
search.addEventListener('focusin', () => {
    document.querySelector('.search-icon').classList.toggle('hide-content');
});

// Show search icons when not in focus
search.addEventListener('focusout', () => {
    document.querySelector('.search-icon').classList.toggle('hide-content');
});

exitIcon.addEventListener('click', () => {
    alert.style.display = 'none';
    alert.style.transition = '.4s';
})

// toggle settings switch on/off
bigCirc1.addEventListener('click', () => {
    smallCirc1.classList.toggle('margin-left');
})
bigCirc2.addEventListener('click', () => {
    smallCirc2.classList.toggle('margin-left');
})

// Charts
let mainChart = document.getElementById('mainChart').getContext('2d');
let dailyChart = document.getElementById('dailyChart').getContext('2d');
let mobileChart = document.getElementById('mobileChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Comfortaa';
Chart.defaults.global.defaultFontSize = 15;

// Hourly, Daily, Weekly, Monthly Line Chart 
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
        // animation: {
        //     duration: 0, // general animation time
        // },
        // hover: {
        //     animationDuration: 0, // duration of animations when hovering an item
        // },
        // responsiveAnimationDuration: 0,
    },
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
        // animation: {
        //     duration: 0, // general animation time
        // },
        // hover: {
        //     animationDuration: 0, // duration of animations when hovering an item
        // },
        // responsiveAnimationDuration: 0,
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
        // animation: {
        //     duration: 0, // general animation time
        // },
        // hover: {
        //     animationDuration: 0, // duration of animations when hovering an item
        // },
        // responsiveAnimationDuration: 0,
    }
});