const textInput= document.querySelector('#name-input');
const textOutput= document.querySelector('#name-output');

textInput.addEventListener('input',(event) => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue === '') {
        textOutput.textContent = 'Anonymous';
    }
     else{
        const capitalizedName = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        textOutput.textContent = capitalizedName;
     }
});