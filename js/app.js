function loadElements() {
  const section = document.querySelector('.section');
  section.classList.add('calculator')

  const input = document.createElement('input');
  input.placeholder = '0';
  section.appendChild(input);

  const container = document.createElement('div');
  container.classList.add('element-box');
  section.appendChild(container);

  //numbers
 const numOperators = [7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '+', '=']

 for (key in numOperators) {
  const buttons = document.createElement('button');
  buttons.textContent = numOperators[key];
  buttons.classList.add(`sign${numOperators[key]}`);
  section.appendChild(buttons);
 }
  
}

loadElements();



