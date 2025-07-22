let color = document.querySelector(".color");
let arr = [0,1,2,3,4,5,6,7,8,9,"a", "b", "c", "d", "e", "f"];
let newColor;
const click = document.querySelector(".click");
click.addEventListener("click", function colourChange(){
    newColor = "#";
    for (let i=0; i <6; i++ ) {
        newColor += arr[getRandomNumber()];

        
    }
    color.textContent = newColor; 
    document.body.style.backgroundColor = newColor;
        

})



function getRandomNumber(){
    return Math.floor(Math.random()* arr.length)
}