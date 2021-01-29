const colors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",]
const btn = document.querySelector(".btn");
const code = document.querySelector(".code");

btn.addEventListener("click" ,function(){
    let hexColor = '#';
    for(let i = 0; i<6; i++){
        hexColor += colors[getRandomNumber()];
    }
    code.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
