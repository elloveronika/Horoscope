
document.querySelector('button').addEventListener('click', clickHandler)


function clickHandler(){
    getSignData(getYourSign())
}




function getSignData(sign){
    const aztroUrl = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    const randomUrl = `https://api.unsplash.com/search/photos?page=1&query=${sign}+astrology+zodiac`;

    fetch(aztroUrl, { //fetch is a browser api, does not work in node(like the browser just diff functionality) /fetch is an http request api (creating an http and then wraps the request in a promise)
        method: 'POST' //
    })

    .then(response => response.json())//collects response from the fetch
    .then(data => {//recieving data thats been converted from json
        console.log(data);
        document.querySelector('#sign').innerText = `Your sign: ${sign}`;
        document.querySelector('#message').innerText = data.description;
        document.querySelector('#num').innerText = `Your lucky number: ${data.lucky_number}`;

    });
    fetch(randomUrl, {
        headers: {
            Authorization: 'Client-ID A5YO9WazDINxYtZ47kUGN9v2wWiGUxkSwo3VISOWhLI'
        }
    })

    .then(response => response.json())
    .then(data => {
        // console.log(data)
    let random =  Math.floor(Math.random() * data.results.length)
    document.querySelector('img').src = data.results[random]['urls'].full

   //   .forEach(x => console.log(x))
 //   ['urls'].full
// 



    })

}

// async function asyncGetSignData(sign){
//     const aztroUrl = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
//     const randomUrl = 'https://dog.ceo/api/breeds/image/random';
//     const resOne = await fetch(aztroUrl, { 
//         method: 'POST' //fetch is asynchronous bc its a Promise
//     })
//     const resTwo = await fetch(randomUrl)

//     const dataOne = await resOne.json()//collects response from the fetch
//     const dataTwo = await resTwo.json()

//     console.log(dataOne);
//     console.log(dataTwo)

//     document.querySelector('#sign').innerText = `Your sign: ${sign}`;
//     document.querySelector('#message').innerText = dataOne.description;
//     document.querySelector('#num').innerText = `Your lucky number: ${dataOne.lucky_number}`;

//     document.querySelector('img').src = dataTwo.message

// }


function getYourSign(){
    const userMonth = document.querySelector('input').value.toLowerCase()
    const userDay  =  Number(document.querySelector('select').value)

    
    let myArray = [
        {
            sign: 'Aries',
            startMonth: 'march',
            startDay: 21,
            endMonth: 'april',
            endDay: 19,
            animal: 'ram' ,      
        }, 
        {
            sign: 'Taurus',
            startMonth: 'april',
            startDay: 20,
            endMonth: 'may',
            endDay: 20,
            animal:  'bull' ,       
        }, 
        {
            sign: 'Gemini',
            startMonth: 'may',
            startDay: 21,
            endMonth: 'june',
            endDay: 19,
            animal: '' ,
        }, 
        {
            sign: 'Cancer',
            startMonth: 'june',
            startDay: '21',
            endMonth: 'july',
            endDay: 22,
            animal:  '' ,
        }, 
        {
            sign: 'Leo',
            startMonth: 'j uly',
            startDay: 23,
            endMonth: 'august',
            endDay: 22,
            animal: '',
        }, 
        {
            sign: 'Virgo',
            startMonth: 'august',
            startDay: 23,
            endMonth: 'september',
            endDay: 19,
            animal:'' ,
        }, 
        {
            sign: 'Libra',
            startMonth: 'september',
            startDay: 23,
            endMonth: 'october',
            endDay: 22,
            animal:    ''   ,
        }, 
        {
            sign: 'Scorpio',
            startMonth: 'october',
            startDay: 23,
            endMonth: 'november',
            endDay: 21,
            animal: '' ,
        }, 
        {
            sign: 'Sagittarius',
            startMonth: 'november',
            startDay: 22,
            endMonth: 'december',
            endDay: 21,
            animal:'' ,
        }, 
        {
            sign: 'Capricorn',
            startMonth: 'december',
            startDay: 22,
            endMonth: 'january',
            endDay: 19,
            animal: '',
        }, 
        {
            sign: 'Aquarius',
            startMonth: 'january',
            startDay: 20,
            endMonth: 'february',
            endDay: 18,
            animal: '',
        }, 
        {
            sign: 'Pisces',
            startMonth: 'february',
            startDay: 19,
            endMonth: 'march',
            endDay: 20,
            animal:   ''  ,
        }, 
    ]

    const mySign = myArray.find(element => (element.startMonth === userMonth && userDay >= element.startDay )|| (element.endMonth === userMonth && userDay <= element.endDay))

    // document.getElementById('sign').innerText = `${mySign.sign}`
    return mySign.sign

}
// getSignData(getYourSign())

// getYourSign();

// const mySign = myArray.find(element => 
//     element.startMonth === userMonth && element.startDay <= userDay  || 
//     element.endMonth === userMonth && element.endDay >= userDay
// )

// api key:A5YO9WazDINxYtZ47kUGN9v2wWiGUxkSwo3VISOWhLI