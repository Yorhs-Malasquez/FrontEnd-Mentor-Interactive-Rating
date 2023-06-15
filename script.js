const submit = document.getElementById('submit');
const number = document.getElementById('var');
const valor = document.querySelectorAll('.btn-num');
const submit2 = document.getElementById('submit2');
submit.addEventListener("click",()=>{
    document.getElementById('thank-you').style.display = 'block';
    document.getElementById('principal').style.display = 'none';
})

valor.forEach(num => {
    num.addEventListener('click', (event) => {
        number.innerHTML = num.innerHTML;
        // console.log("valor", number.innerHTML);
    });
});
submit2.addEventListener("click",()=>{
    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('principal').style.display = 'block';
})

