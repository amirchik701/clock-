let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    elMin = document.querySelector('.minutes'),
    elHour = document.querySelector('.hours');

// let time = new Date(),
//     seconds = time.getSeconds() ,
//     minutes = time.getMinutes() ,
//     hours = time.getHours() ;

function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
    // seconds++;

    sec.style = `transform:rotate(${seconds}deg); transition: linear 1s;`
    min.style = `transform:rotate(${minutes}deg); transition: linear 1s;`
    hour.style = `transform:rotate(${hours}deg); transition: linear 1s;`

    elMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    elHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()

    sec.animate(
        [{
            transform: `rotate(${seconds}deg)`
        },
        {
            transform: `rotate(${seconds + 6}deg)`
        }
        ],
        {
            fill: 'forwards',
            duration: 1000,
        }
    )

    setTimeout(() => {
        clock()
    }, 1000);

}


clock()


let links = document.querySelectorAll('.tabsItem '),
    tabs = document.querySelectorAll('.tabsContentItem '),
    span = document.querySelector('.tabsLink__span');


for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', function () {

        for (let x = 0; x < tabs.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
            span.classList.remove('active')
            span.classList.toggle('active')
        }

        this.classList.add('active');
        tabs[i].classList.add('active')

    })

}


/* =============== Секундомер ======================= */

let stopSec = document.querySelector('.stopwatch__seconds'),
    stopMin = document.querySelector('.stopwatch__minutes'),
    stopHour = document.querySelector('.stopwatch__hours'),
    stopBtn = document.querySelector('.stopwatch__btn');


stopBtn.addEventListener('click', function () {

    if (stopBtn.innerHTML == 'start') {
        stopBtn.innerHTML = 'stop'
        span.classList.add('active_clear')
        let i = 0;
        setTimeout(() => {
            stopWatch(this, i)
        }, 0);
    } else if (stopBtn.innerHTML == 'stop') {
        stopBtn.innerHTML = 'clear'
        span.classList.remove('active_clear')
        span.classList.add('active')
    } else {
        stopBtn.innerHTML = 'start'
        stopSec.innerHTML = 0;
        stopMin.innerHTML = 0;
        stopHour.innerHTML = 0;
        span.classList.remove('active')
        span.classList.remove('active_clear')
    }
})

function stopWatch(btn, i) {
    if (stopBtn.innerHTML == 'stop') {
        if (i == 59) {
            i = 0;
            stopSec.innerHTML = i;
            if (stopMin.innerHTML == 59) {
                stopMin.innerHTML = 0;
                stopHour.innerHTML++;
            } else {
                stopMin.innerHTML++;
            }
        } else {
            i++;
            stopSec.innerHTML = i;
        }
        setTimeout(() => {
            stopWatch(btn, i)
        }, 1000);
    }
}


