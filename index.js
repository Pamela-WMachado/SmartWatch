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

setInterval(displayTime, 1);

