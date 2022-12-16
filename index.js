
module.exports = ( date, callback )=>{
    date = new Date( date );
    let milliseconds = date - Date.now();
    let twentyfiveDaysInMs = new Date().getTime() + (25 * 24 * 60 * 60 * 1000);

    if(!isNaN(date)){
        if( twentyfiveDaysInMs > date.getTime() ){
            //Date is not older than 25 days
            console.log("Scheduled to "+date.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
            let timer = setTimeout(callback,milliseconds);
            return {clear:()=>{
                console.log("Scheduled Deleted "+date.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
                clearTimeout(timer);
            }};
        } else {
            //Date is older than 25 days
            throw "Cannot Set Timeout for date older than 25 days";
        }
    } else {
        throw "Wrong Date";
    }
}
