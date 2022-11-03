const pages =[
    ['(問題1) "Hello World!" と表示させてください',"Hello World!"],
    ['(問題2) "Yeeehah!!" と表示させてください',"Yeeehah!!"],
    ['(問題3) "Hey,Hey,Hey!!" と表示させてください',"Hey,Hey,Hey!!"],
    ['Congraturations!!!',"Hey,Hey,Hey!!"]
]
let i = 0;
const nextBtn = document.querySelector('.next')
nextBtn.addEventListener('click', () => {
    if (reply === "OK!"){
        document.getElementById("reply").innerText = "Let's challenge!"
        i = i+1;
        document.getElementById("question").innerText = pages[i][0];
        reply = "Let's Try!"
    }
    else{
        document.getElementById("reply").innerText = "Try again!"
    }
});

executeCodeBtn.addEventListener('click', () => {
    let answer = localStorage.outputArgMessage   
    console.log("answer" + answer);
    let test = JSON.stringify(pages[i][1]);
    if (answer === test){
        reply = "OK!";
    }else{
        reply = "Wrong!!";
    }
    console.log(reply);
    document.getElementById("reply").innerText = reply;
});

module.exports = sub;