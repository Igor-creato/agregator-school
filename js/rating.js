let test = document.querySelector('.page-h1');
let test2 = document.querySelector('.page-font');
let buttonClose = document.querySelector('.button-close');
let nullString = document.createElement('div');
    // nullString.className = 'null-string';
let marginTopString = parseInt(getComputedStyle(test2, true) .marginTop);  
let marginBottomString = parseInt(getComputedStyle(test2, true) .marginBottom);
let heightString = test2.offsetHeight + marginTopString + marginBottomString;
test.addEventListener('click', () => console.log('Меня кликнули'));
test2.addEventListener('mouseover', () => console.log('мышь надомной'));
buttonClose.addEventListener('click', () => {
if (test2.style.display != 'none'){
    test2.style.display = 'none';
    test.after(nullString);
    nullString.style.height = heightString+'px';
}
else{
    test2.removeAttribute('style');
    // test2.style.display = '';
    nullString.remove('div');
}})
