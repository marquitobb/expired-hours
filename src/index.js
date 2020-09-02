const moment = require('moment')

const time = (hours) =>{
    //add date and hour expired
    let h = parseInt(hours)
    let hV = moment().add(h, 'hours').format('LT')
    let dV = moment().add(h, 'hours').format('L')
    const tokenData = {hV, dV}

    return tokenData;
}

console.log(time(3));

const timeExpired = (hours) =>{
    //add date and hour expired
    let h = parseInt(hours)
    let hV = moment().add(h, 'hours').format('LT')
    let dV = moment().add(h, 'hours').format('L')
    const tokenData = {hV, dV}
    const expired = JSON.stringify(tokenData)
    return expired;
}

console.log(timeExpired(3));

const expired = (hours) =>{
    let obj = hours;

    let hVls = JSON.parse(obj).hV;
    let fVls = JSON.parse(obj).fV;
    //hora y fecha de hoy
    let h = moment().format("LT");
    let f = moment().format("L");
    //hora y fecha a vencer el token
    let hV = moment(hVls, ["h:mm A"]).format("LT");
    let fV = moment(fVls).format("L");

    if (fV < f) {
        console.log("expired");
        //clear all session
        //localStorage.clear();
    } else if (fV === f) {
        if (hV < h) {
        console.log("expired");
        //clear all session
        //localStorage.clear();
        }
    }
    console.log("expire hours");
}

expired(timeExpired(3));