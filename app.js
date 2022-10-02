const hour = document.querySelector(".hour");

const minutes = document.querySelector(".minutes");

const second = document.querySelector("sub");

const down = document.querySelector(".down");

const sup = document.querySelector(".pm sup");


const myFunction = (()=>{
    const myDate = new Date()
const myHour = myDate.getHours();
const mySecond = myDate.getSeconds();
const myMinutes = myDate.getMinutes();


hour.innerHTML = myHour < 10 ? "0" + myHour : myHour
minutes.innerHTML = myMinutes < 10 ? "0" + myMinutes : myMinutes;
second.innerHTML = mySecond < 10 ? "0" + mySecond : mySecond;
down.innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
sup.innerText = myHour < 12 ? "AM" : "PM" ;


})


setInterval(myFunction,1000);

// let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
// console.log(now)