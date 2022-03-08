const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const rollDice = document.getElementById('btn');


rollDice.addEventListener('click', disableBtn);

function getRandomAdvice() {
  fetch('https://api.adviceslip.com/advice?timestamp=1646669540478')
    .then(response => response.json())
    .then(advice => {
      adviceId.innerText = advice.slip.id;
      adviceText.innerText = '“' + advice.slip.advice + '”';
    })
    rollDice.classList.add('disabled')
    setTimeout(enableBtn, 2000);
}
getRandomAdvice();

function disableBtn() {
  rollDice.classList.add('disabled')
  setTimeout(enableBtn, 2000);
  getRandomAdvice();
}

function enableBtn() {
  rollDice.classList.remove('disabled')
}

