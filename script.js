
document.querySelector('button').addEventListener('click', getYourSign)

let months = ['january','february', 'march', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
let days = [1,2,3,4,5,6,7,8,9,20,21,22,23,24,25,26,27,28,29,30,31]

function getYourSign(){
    let month = document.querySelector('input').value.toLowerCase()
    let date =  Number(document.querySelector('select').value)
    let find = months.indexOf(month)
    if(find === 0){
        console.log('you are a capricorn ')
    }
    // if(find){
    //     console.log(month)
    // }
    // if((month === 'march' && date >= 21) || (month === 'april' && date <= 19)){
    //     console.log('Hey youre a Aries, you are gonna have an awesome day month and life ')
    // }else if((month === 'april' && date >= 20) || (month === 'may' && date <= 20)){
    //     console.log('Hey youre a Taurus, you are gonna have an awesome day month and life ')
    // }else if((month === 'may' && date >= 21) || (month === 'june' && date <= 19)){
    //     console.log('Hey youre a Gemini, you are gonna have an awesome day month and life ')
    // }else if((month === 'june' && date >= 21) || (month === 'july' && date <= 22)){
    //     console.log('Hey youre a Cancer, you are gonna have an awesome day month and life ')
    // }else if((month === 'july' && date >= 23) || (month === 'august' && date <= 22)){
    //     console.log('Hey youre a Leo, you are gonna have an awesome day month and life ')
    // }else if((month === 'august' && date >= 23) || (month === 'september' && date <= 19)){
    //     console.log('Hey youre a Virgo, you are gonna have an awesome day month and life ')
    // }else if((month === 'september' && date >= 23) || (month === 'october' && date <= 22)){
    //     console.log('Hey youre a Libra, you are gonna have an awesome day month and life ')
    // }else if((month === 'october' && date >= 23) || (month === 'november' && date <= 21)){
    //     console.log('Hey youre a Scorpio, you are gonna have an awesome day month and life ')
    // }else if((month === 'november' && date >= 22) || (month === 'december' && date <= 21)){
    //     console.log('Hey youre a Sag, you are gonna have an awesome day month and life ')
    // }else if((month === 'december' && date >= 22) || (month === 'january' && date <= 19)){
    //     console.log('Hey youre a Capricorn, you are gonna have an awesome day month and life ')
    // }else if((month === 'january' && date >= 20) || (month === 'february' && date <= 18)){
    //     console.log('Hey youre a Aquarius, you are gonna have an awesome day month and life ')
    // }else if((month === 'february' && date >= 19) || (month === 'march' && date <= 30)){
    //     console.log('Hey youre a Pisces, you are gonna have an awesome day month and life ')
    // }
}


