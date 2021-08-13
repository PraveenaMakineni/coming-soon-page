function main(){
    var countDownDate = new Date("August 31, 2021, 12:00:00").getTime(); //set the countdowntime

    var x = setInterval(   () => {
        var now = new Date().getTime();  //set the current time

        var distance = countDownDate - now;         // set the difference (currentime - countdowntime) in milliseconds

        var days = Math.floor(distance /(1000 * 60 * 60 *24));   //set the days  // converting milliseconds to days 
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);	

       // document.getElementById('time').innerHTML = days + "days " + hours + "h " + minutes + "mins " + seconds + "s ";
       document.getElementById('days').innerHTML = days + "d "
       document.getElementById('hours').innerHTML = hours + "h "
       document.getElementById('minutes').innerHTML = minutes + "m "
       document.getElementById('seconds').innerHTML = seconds + "s "


    if(distance<0)
       {
           clearInterval(x);
           document.getElementById('time').innerHTML = "Offer Expired" 
       }
    }, 1000);
}