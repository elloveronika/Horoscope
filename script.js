
document.querySelector('button').addEventListener('click', clickHandler)


function clickHandler(){
    getSignData(getYourSign())
}

function getSignData(sign){
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    fetch(URL, { //fetch is a browser api, does not work in node(like the browser just diff functionality) /fetch is an http request api (creating an http and then wraps the request in a promise)
        method: 'POST' //
    })
    .then(response => response.json())//collects response from the fetch
    .then(data => {//recieving data thats been converted from json
        console.log(data);
        document.querySelector('#sign').innerText = `Your sign: ${sign}`;
        document.querySelector('#message').innerText = data.description;
        document.querySelector('#num').innerText = `Your lucky number: ${data.lucky_number}`;

    });

}

async function asyncGetSignData(sign){
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    const res = await fetch(URL, { //fetch is a browser api, does not work in node(like the browser just diff functionality) /fetch is an http request api (creating an http and then wraps the request in a promise)
        method: 'POST' //fetch is asynchronous bc its a Promise
    });
    const data = await res.json()//collects response from the fetch
    console.log(data);
    document.querySelector('#sign').innerText = `Your sign: ${sign}`;
    document.querySelector('#message').innerText = data.description;
    document.querySelector('#num').innerText = `Your lucky number: ${data.lucky_number}`;

}


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
            message: "this is a good day" 
        }, 
        {
            sign: 'Taurus',
            startMonth: 'april',
            startDay: 20,
            endMonth: 'may',
            endDay: 20,
       
        }, 
        {
            sign: 'Gemini',
            startMonth: 'may',
            startDay: 21,
            endMonth: 'june',
            endDay: 19,
  
        }, 
        {
            sign: 'Cancer',
            startMonth: 'june',
            startDay: '21',
            endMonth: 'july',
            endDay: 22,
  
        }, 
        {
            sign: 'Leo',
            startMonth: 'july',
            startDay: 23,
            endMonth: 'august',
            endDay: 22,
 
        }, 
        {
            sign: 'Virgo',
            startMonth: 'august',
            startDay: 23,
            endMonth: 'september',
            endDay: 19,

        }, 
        {
            sign: 'Libra',
            startMonth: 'september',
            startDay: 23,
            endMonth: 'october',
            endDay: 22,
      
        }, 
        {
            sign: 'Scorpio',
            startMonth: 'october',
            startDay: 23,
            endMonth: 'november',
            endDay: 21,
  
        }, 
        {
            sign: 'Sagittarius',
            startMonth: 'november',
            startDay: 22,
            endMonth: 'december',
            endDay: 21,

        }, 
        {
            sign: 'Capricorn',
            startMonth: 'december',
            startDay: 22,
            endMonth: 'january',
            endDay: 19,

        }, 
        {
            sign: 'Aquarius',
            startMonth: 'january',
            startDay: 20,
            endMonth: 'february',
            endDay: 18,

        }, 
        {
            sign: 'Pisces',
            startMonth: 'february',
            startDay: 19,
            endMonth: 'march',
            endDay: 20,
    
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