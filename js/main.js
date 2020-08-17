/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

const search = document.querySelector('#search');
const exitIcon = document.querySelector('.exit-icon');
const alert = document.querySelector('.alert');

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

// Main Chart
let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Comfortaa';
Chart.defaults.global.defaultFontSize = 15;

let massPopChart = new Chart(myChart, {
    type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
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
            hoverBorderColor: '#000'
        }]
    },
    options: {
        // title: {
        //     display: true,
        //     text: 'Largest Cities In Massachusetts',
        //     fontSize: 25
        // },
        legend: {
            display: false,
            align: 'start',
            labels: {
                fontColor: '#000'
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
        }
    }
});