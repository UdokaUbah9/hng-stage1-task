const currentTime = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');
const img = document.querySelector(".image-container img");

//checking to see the image Natural and diplayed sizes
console.log(img.naturalWidth); //
console.log(img.width);
//prettier-ignore

// The days of the weeks in an array
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//Function to update the Time and Day
const updateTime = function () {
  const date = new Date();
  const day = date.getUTCDay();
  const hour = date.getUTCHours().toString().padStart(2, 0);
  const minute = date.getUTCMinutes().toString().padStart(2, 0);
  const seconds = date.getUTCSeconds().toString().padStart(2, 0);

  console.log(date.getUTCHours());
  currentTime.textContent = `${hour}:${minute}:${seconds}`;
  currentDay.textContent = days[day];
};

//Function to update the Time and Day every 1seconds
setInterval(updateTime, 1000);
