let button = document.querySelector('.subscribe-button');
let mailInput = document.querySelector('.mail-input');
let pforerror = document.querySelector('.pforerror');
let desktopSuccess = document.querySelector('.success-desktop');
let mainSection = document.querySelector('.main-section');
button.style.backgroundColor = ' hsl(234, 29%, 20%)';
button.style.color = 'white';
button.style.fontSize = 'medium';

button.addEventListener('click' , () => {

    if (mailInput.value.length < 10 && !mailInput.value.includes('@') && !mailInput.value.includes('.com'))  {
        pforerror.innerHTML = 'Valid email required';
        pforerror.style.display = 'block';
        pforerror.style.color = 'red';
        pforerror.style.marginTop = '17px';
        mailInput.style.border = '1px solid red';
        mailInput.classList.add('red-placeholder');
    } else {
        mainSection.style.display = 'none';
        desktopSuccess.style.display = 'flex';

    }
})