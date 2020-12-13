(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // let birthday = "Jan 5, 2021 00:00:00 GMT",
  let birthdate = "Jan 5, 2021",
      birthtime = " 00:00:00 GMT"
      birthday = birthdate + birthtime,
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

            document.getElementById("days").innerText = "00",
            document.getElementById("hours").innerText = "00",
            document.getElementById("minutes").innerText = "00",
            document.getElementById("seconds").innerText = "00";
    
          // headline.innerText = "END";
          // countdown.style.display = "none";
          // content.style.display = "block";

          clearInterval(x);
        }
        //seconds
        document.getElementById("deadline-date").innerHTML = birthdate;
        document.getElementById("deadline-time").innerHTML = birthtime;
      }, 0);
  }());

// // Set the date we're counting down to
// var date_string = "January 5, 2021 00:00:00 GMT"
// var countDownDate = new Date(date_string).getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("countdown").innerHTML = days + " " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "ENDED";
//   }

//   document.getElementById("deadline").innerHTML = date_string;
// }, 1000);
