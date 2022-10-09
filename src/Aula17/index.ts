/*recomendado*/

//conditional
const body  = document.querySelector('body');
if(body) body.style.backgroundColor = 'red';

//htmlelement
const input = document.querySelector('input') as HTMLInputElement;

//type assertion    
const body2  = document.querySelector('body') as HTMLBodyElement;
if(body2) body2.style.backgroundColor = 'red';

/* ate aqui */

//non-null assertion
const body1  = document.querySelector('body')!;
if(body1) body1.style.backgroundColor = 'red';

//type assertion
const body4 = (document.querySelector('body') as unknown) as number; 