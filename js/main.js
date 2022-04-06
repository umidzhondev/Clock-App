const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

setInterval(getDate,1000);

function getDate(){
    const date = new Date();
    hour.textContent = date.getHours(); 
    minute.textContent = date.getMinutes(); 
    second.textContent = date.getSeconds(); 
}
