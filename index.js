function twoDigits(digit) {
    if(digit < 10) {
        return('0'+ digit)
    } else {
        return(digit)
    }
}
function displayTime() {
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    const session = document.getElementById('session');

    if (hr >= 12) {
        session.innerHTML = 'PM';
       } else {
        session.innerHTML = 'AM';
       }
    
       if (hr > 12) {
        hr = hr - 12;
       }


   document.getElementById('hour').innerHTML = twoDigits(hr);
   document.getElementById('mins').innerHTML = twoDigits(min);
   document.getElementById('secs').innerHTML = twoDigits(sec);
 
}

setInterval(displayTime, 1000);


/*smart watch config*/
let currentDate = new Date();

//using a arrow function instead of a regular one
let smartWatchData = () => {
    let now = new Date();
    let smartHr = now.getHours();
    let smartMin = now.getMinutes();
    let smartSec = now.getSeconds();

    document.getElementById('sHour').innerHTML = twoDigits(smartHr);
    document.getElementById('sMins').innerHTML = twoDigits(smartMin);
    document.getElementById('sSecs').innerHTML = twoDigits(smartSec);
}

setInterval(smartWatchData, 1000);

function displayDate() {
    let dayOfTheWeek = currentDate.getDay();
    let day = currentDate.getDate();
    let month = currentDate.getMonth()+1;
    let year = currentDate.getFullYear();

    switch(dayOfTheWeek) {
        case 0:
            dayOfTheWeek = 'DOM'
            break;
        case 1:
            dayOfTheWeek = 'SEG'
            break;
        case 2:
            dayOfTheWeek = 'TER'
            break;
        case 3:
            dayOfTheWeek = 'QUA'
            break;
        case 4:
            dayOfTheWeek = 'QUI'
            break;
        case 5:
            dayOfTheWeek = 'SEX'
            break;
        case 6:
            dayOfTheWeek = 'SAB'
            break;
    }

    document.getElementById('dayOfTheWeek').textContent = dayOfTheWeek;
    document.getElementById('day').innerHTML = twoDigits(day);
    document.getElementById('month').innerHTML = twoDigits(month);
    document.getElementById('year').innerHTML = twoDigits(year);

}
setInterval(displayDate, 1);

