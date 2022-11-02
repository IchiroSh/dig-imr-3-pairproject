
executeCodeBtn.addEventListener('click', () => {
let answer = localStorage.outputArgMessage   
console.log("answer" + answer);
let test = JSON.stringify("Hello World!");
if (answer === test){
    console.log("OK!");
}else{
    console.log("Wrong!!");
}
});
