function calculator() {

function loadElements() {
  //section
  const section = document.querySelector('.section');
  const calBox = document.createElement('div');
  calBox.classList.add('calculator')
  section.appendChild(calBox);

  //display
  const displayBox = document.createElement('div');
  displayBox.classList.add('display-box');
  const displaySmall = document.createElement('p');
  displaySmall.classList.add('small');
  displaySmall.textContent = ' ';
  const displayBig = document.createElement('h3');
  displayBig.classList.add('big');
  displayBig.textContent = '0';
  displayBox.appendChild(displaySmall);
  displayBox.appendChild(displayBig);

  calBox.appendChild(displayBox);


  //elements
  const container = document.createElement('div');
  container.classList.add('element-box');
  calBox.appendChild(container);

  //buttons
  const numOperators = [7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '+', '=']

  for (key in numOperators) {
  const buttons = document.createElement('button');
  buttons.textContent = numOperators[key];
  buttons.classList.add(`sign${numOperators[key]}`);
  container.appendChild(buttons);

  //EVENT
  const operate = () => {
    displayBig.textContent += buttons.textContent;
    

    if (buttons.textContent === '=') {
      const formula = displayBig.textContent.includes('-');
      const arr = ['3', '-' , '5'];
      const result =  +arr[0] + - + +arr[2];
      console.log(result);
      console.log(formula);
    }

    
  }

  buttons.addEventListener('click', operate);


 }
  
}

loadElements();


}


calculator();






