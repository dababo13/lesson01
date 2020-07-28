//console.log(process.argv[2]);
const currentTimeArray = process.argv[2].split(":");
//console.log(currentTimeArray);
const currentHour = Number(currentTimeArray[0]); //12
const currentMinute = Number(currentTimeArray[1]); //10
const requiredMinute = (currentMinute + 45) % 60;
const requiredHour = (Math.floor((currentMinute + 45) / 60) + currentHour) % 24;
console.log(requiredHour);
console.log(requiredMinute);
