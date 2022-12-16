const schedule = require('./index.js');

console.log(schedule);

let hey = schedule("2022/12/01 12:58:00",()=>{
    console.log("Runnig 2022/12/01 12:58:00");
});
schedule("2022/12/01 12:20:00",()=>{
    console.log("Runnig 2022/12/01 12:20:00");
});

schedule("2022/12/01 12:18:00",()=>{
    console.log("Runnig 2022/12/01 12:18:00");
});


hey.clear();