


// This code function takes date from the users system 

function displayDateTime() {
    var now = new Date();
    var targetDate = new Date('2024-4-6');
    var timeDifference = targetDate.getTime() - now.getTime();
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Calculate the remaining days

    var remainingTime = timeDifference % (1000 * 60 * 60 * 24); // Remaining time in milliseconds

    var hours = Math.floor(remainingTime / (1000 * 60 * 60)); // Calculate the remaining hours
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); // Calculate the remaining minutes
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); // Calculate the remaining seconds
    
  
    // Update HTML elements with the obtained values
    document.querySelector('.days .number').textContent = days;
    document.querySelector('.hours .number').textContent = hours;
    document.querySelector('.minutes .number').textContent = minutes;
    document.querySelector('.seconds .number').textContent = seconds;
  }
  
  // Call the function initially to display the current date and time
  displayDateTime();
  
  // Update the date and time every second
  setInterval(displayDateTime, 1000);



let submitButton = document.querySelector('.input-submit')
submitButton.addEventListener('click', (e) => {
  // e.preventDefault()
  let inputVal = document.querySelector('.input-email').value;
 if(inputVal === ''){
  e.preventDefault();
  console.log('empty');
 }else{
  console.log('Sent');
 }
})
