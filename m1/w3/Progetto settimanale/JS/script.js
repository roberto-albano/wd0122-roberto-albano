let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', risultato);
});

function risultato(event) {
  let clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') {
  
    if (display.value !== '') 
    {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') 
  {
    display.value = '';
  } else {
    display.value += clickedButtonValue;
  }
}
  