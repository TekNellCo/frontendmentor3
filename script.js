let rating = document.querySelectorAll('.b');
const submit = document.querySelector('.submit');
let popup = document.querySelector('.popup');
let selection = document.querySelector('.selection');
let back = document.querySelector('.backbutton');
let value = 0;



back.addEventListener('click',()=>{
    popup.style.display = "none"
    back.style.display = "none";
})



rating.forEach(button =>{
    button.addEventListener('click',(e)=>{
    let value = e.target.dataset.num;
    selection.textContent = `You selected ${value} out of 5`;

    submit.addEventListener('click',()=>{
        popup.style.display = "flex";
        back.style.display = "block";
    })
    
})
})

