let bd = document.getElementsByTagName('body');
const date = document.querySelector('.date')
 function setDate() {
    
    const myDate = new Date();
    const seconds = myDate.getSeconds();
    const secondsDegree = (seconds / 60) * 360;
    console.log(secondsDegree)
    document.querySelector('.seconds-hand').style.transform = `rotate(${secondsDegree}deg)`


    const minutes = myDate.getMinutes();
    const minutesDegree = (minutes / 60) * 360;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegree}deg)`

    const hour = myDate.getHours();
    const hourDegree = ((hour % 12 + minutes / 60) / 12 * 360);
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree}deg)`

    date.innerHTML = myDate.toLocaleDateString()
}


setInterval(function () {
    setDate();
}, 1000);


