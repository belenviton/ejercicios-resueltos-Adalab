'use strict'

const nameInput = document.querySelector ('js-name');
const result = document.querySelector ('js-result');

nameInput.addEventListener ( 'input' , (event)  =>{ 
   debugger;
   const username = nameInput.value;
   if (username === 'María') {
      result.innerHTML = 'Bienvenida, ${username}';
   }
else if (username === 'Marta') {
   result.innerHTML = 'Bienvenida, ${username}';
}
else {
   result.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';
}

});
