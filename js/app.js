function calculator() {
    //section
    const section = document.querySelector('.section');
    const calBox = document.createElement('div');
    calBox.classList.add('calculator')
    section.appendChild(calBox);

    //display window
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


    //elements box
    const container = document.createElement('div');
    container.classList.add('element-box');
    calBox.appendChild(container);

  
    const numOperators = [7, 8, 9, '÷', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '+', '='] //buttons elements
    let result = 0;
    let form = '';
    const arr = [];


    for (key in numOperators) { // loop to create buttons
      const buttons = document.createElement('button');
      buttons.textContent = numOperators[key];

      buttons.classList.add(`sign${numOperators[key]}`);
      container.appendChild(buttons);


      let btnValue = buttons.textContent // assign the value

    
      function operateValue (item){// began operation

        if (item === '-' || item === '+' || item === 'x' || item === '÷' || item === '=') {


          if (form !== '') { //check if the form is empty then dont add
            if (typeof(arr[arr.length -1]) !== 'number') {
              arr.push(+form); 
            }
                       
          }

          if (arr.length !== 0) {
            if (typeof(arr[arr.length - 1]) === 'number') {
              arr.push(item);
            } else {
              arr[1] = item;}
          }
          

         
          
          form = '';

          console.log(arr);
          console.log('length: ' + arr.length);
          
           
          


         
          if (arr.length === 4) {//check if arr is equal to 4

            switch (arr[1]) {
              case '+':
                result = +arr[0] + +arr[2];
                break;
              case '-':
                result = +arr[0] - +arr[2];
                break;
              case '÷':
                result = +arr[0] / +arr[2];
                break;
              case 'x':
                result = +arr[0] * +arr[2];
                break;
      
            }
                      
            console.log(result); //show total
            arr.splice(0, 3); // remove item 1-3
            arr.unshift(result); // add result to the array
            console.log(arr);
            displayBig.textContent = result;

          }

          if (item === '=') { //check when equls is click
            
            console.log(arr)
            
            if (arr[0] === '' ) { // if empty
              result = 0;
              arr.splice(0,arr.length)
            } else {
              result = arr[0]
            }

            displayBig.textContent = result;
            arr.splice(1,1)
            console.log(arr);
          
          }


        } else {
          form += item;
          console.log(form);
          displayBig.textContent = form; // display

          
        } 

      }

      buttons.addEventListener('click', () => operateValue(btnValue));
      
      
    }

    
      

}

calculator(); // call 






