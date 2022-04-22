const vaderFace = document.querySelector('.fire');
const elsa = document.querySelector('.frozen');

vaderFace.addEventListener('click', () => {
    if(elsa.classList.contains('frozen')) {
        elsa.classList.add('active');
        vaderFace.classList.remove('active');
    }
})

elsa.addEventListener('click', () => {
    if(vaderFace.classList.contains('fire')) {
        vaderFace.classList.add('active');
        elsa.classList.remove('active');
    }
})