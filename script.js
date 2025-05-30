const buttons = document.querySelectorAll('.dot,.div,.seven,.eight,.nine,.mult,.four,.five,.six,.min,.one,.two,.three,.add,.dzero,.zero');
const display = document.querySelector('input');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const equal = document.querySelector('.eval');
const spans = document.querySelectorAll('.simple span');

spans.forEach(span =>{
    span.addEventListener('mousedown', () =>{
        span.classList.add('active')
    });
});
spans.forEach(span =>{
    span.addEventListener('mouseup', () =>{
        span.classList.remove('active')
    });
});
buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        display.value += button.textContent;
    });
});
clear.addEventListener('click', () =>{
    display.value = "";
});
del.addEventListener('click', () =>{
    display.value.toString
    display.value = display.value.slice(0, -1)
});
equal.addEventListener('click', (e) =>{
    try{
        display.value = eval(display.value);
        if(display.value == 'undefined'){
            display.value = 0;
        }
        else if(display.value == 'Infinity'){
            display.value = "Error";
        }
        else if(display.value == 'NaN'){
            display.value = "Error";
        }
    }
    catch(error){
        display.value = error
    }
});
