
const btnYes = document.getElementById('so');
const btnNo = document.getElementById('no');
const message = document.getElementById('message');
const birthdayContainer = document.getElementById('birthday-container');

let scaleYes = 1;


btnYes.addEventListener('click', function() {
  message.textContent = "Chevere";
  message.style.display = "block";
  message.style.color = "#FF5733"; 
  
  birthdayContainer.style.display = "flex"; 

  scaleYes = 1;
  btnYes.style.transform = `scale(${scaleYes})`;

  btnNo.style.marginLeft = "0px";
});

btnNo.addEventListener('click', function() {
  message.textContent = "Aea apreta no más el sí :v";
  message.style.display = "block";
  message.style.color = "#3A7CA5"; 
  
  scaleYes += 0.5;
  btnYes.style.transform = `scale(${scaleYes})`;

  btnNo.style.marginLeft = `${(scaleYes - 1) * 40}px`; 
});

