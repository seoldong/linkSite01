'use strict'

//section observer & undervar

const sectionIds = ['#main', '#web', '#painting', '#calculator', '#contact',]

const sections = sectionIds.map((id) => { return document.querySelector(id) })

const navUnderbars = sectionIds.map((id) => {
    return document.querySelector(`[data-under="${id}"]`);
})

const options = { root: null, rootMargin: '0px', threshold: 0.5 }

function navObserverCallback(entries, observer) {
    entries.forEach((entry) => {
        let index = sectionIds.indexOf(`#${entry.target.id}`);

        if (entry.isIntersecting == true) {
            navUnderbars[`${index}`].style.visibility = 'visible'
        } else {
            navUnderbars[`${index}`].style.visibility = 'hidden'
        }
    })
}

const navObserver = new IntersectionObserver(navObserverCallback, options)

sections.forEach((entry) => {
    navObserver.observe(entry);
})

// 

// section scroll view

const navLayer = document.querySelector('.navLayer')

function navScroll() {
    navLayer.addEventListener('click', (event) => {
        const index = sectionIds.indexOf(event.target.dataset.view);
        if (event.target.dataset.view) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    })
}

navScroll()
//

// nav lighting

const nav = document.querySelector('#nav');
const navBackgroundLighting = document.querySelector('.navBackgroundLighting');

function navlighting() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            navBackgroundLighting.style.opacity = 100;
        } else {
            navBackgroundLighting.style.opacity = 0;
        }
    })
}

navlighting()

//

// calculator text ani

const ccText = document.querySelector('.ccText')

const Text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo assumenda officiis rem deserunt fuga tenetur ducimus, quisquam numquam officia modi eaque quam qui totam. Beatae voluptatem eos sapiente a!"

const ccTextArr = [...Text]

function textAni() {
    let i = 0;
    let iteraitor = setInterval(() => {
        ccText.append(ccTextArr[i]);
        i++
        if (i == ccTextArr.length) { clearInterval(iteraitor) }
    }, 10);
}

const calculatorContents = document.querySelector('.calculatorContents');

function textEvent() {
    let count = 0;
    calculatorContents.addEventListener('mouseover', (event) => {
        if (count == 0) {
            count++
            textAni();
        }
    })
}

textEvent();

// weather api

// const my_apikey = config.apikey;

const cityName = document.querySelector('.cityName')
const weatherIcon = document.querySelector('.weatherIcon')
const iconList = ['01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n', 'unknown']
const cities = ['Seoul', 'Tokyo', 'Washington', 'Lisbon', 'Rabat', 'Madrid', 'Tunis', 'Tripoli', 'Athens', 'Cairo', 'Ankara', 'Nicosia', 'Amman', 'Damascus', 'Baghdad', 'Yerevan', 'Baku', 'Tehran', 'Ashgabat', 'Dushanbe', 'Tashkent', 'Kabul', 'Bishkek', 'Beijing',]


// -----replace wether
const citiesArr = cities.splice(19, 5)


// function getImage(value) {
//     const home = weatherIcon.style.backgroundImage = `url(./img/openweathermap-api-icons-master/icons/${iconList[value]}.png)`;
//     return new Promise((resolve, reject) => {
//         resolve(home)
//     })
// }

function setin() {
    let count = 0;
    cityName.innerHTML = `${cities[count]}`
    weatherIcon.style.backgroundImage = `url(./img/openweathermap-api-icons-master/icons/${iconList[count]}.png)`;
    count++

    setInterval(() => {
        if(count == cities.length){
            count = 0;
        }
        cityName.innerHTML = `${cities[count]}`
        weatherIcon.style.backgroundImage = `url(./img/openweathermap-api-icons-master/icons/${iconList[count]}.png)`;
        count++
    }, 3000);
}

setin()
// function getImage(value) {
//     const home = weatherIcon.style.backgroundImage = `url(./img/openweathermap-api-icons-master/icons/${iconList[value]}.png)`;
//     return new Promise((resolve, reject) => {
//         resolve(home)
//     })
// }




// function fetchWeather(cities, count) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cities[count]}&appid=${my_apikey}`
//     return fetch(url)
//         .then(Response => Response.json())
// }

// function setWeather() {
//     let count = 0;
//     fetchWeather(cities, count).then((value) => {
//         cityName.innerText = `${value.name}`
//         if (iconList.includes(value.weather[0].icon)) {
//             weatherIcon.style.backgroundImage = `url('./img/openweathermap-api-icons-master/icons/${value.weather[0].icon}.png')`;
//         }
//     })
//     count++

//     setInterval(() => {
//         if (count >= cities.length) {
//             count = 0;
//         }
//         fetchWeather(cities, count).then((value) => {
//             cityName.innerText = `${value.name}`
//             if (iconList.includes(value.weather[0].icon)) {
//                 weatherIcon.style.backgroundImage = `url('./img/openweathermap-api-icons-master/icons/${value.weather[0].icon}.png')`;
//             }
//         })
//         count++
//     }, 7000);
// }

// setWeather()

//

// media query nav toggle

const toggleOpen = document.querySelector('.toggleOpen');
const toggleclose = document.querySelector('.toggleclose');
const navBackgroundLayer = document.querySelector('.navBackgroundLayer');

function toggl() {
    toggleOpen.addEventListener('click', (event) => {
        toggleOpen.classList.toggle('close');
        navBackgroundLayer.classList.toggle('open');
        navLayer.classList.toggle('open');
    })

    toggleclose.addEventListener('click', () => {
        toggleOpen.classList.toggle('close');
        navBackgroundLayer.classList.toggle('open');
        navLayer.classList.toggle('open');
    })

}

toggl();
