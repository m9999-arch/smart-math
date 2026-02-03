// =================== БӨЛІМ АУЫСТЫРУ ===================
function showSection(id){
    document.querySelectorAll("section").forEach(sec=>{
        sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

// =================== ҰПАЙ + ТАЙМЕР ===================
let score = 0;
let timeLeft = 60;
let timer = setInterval(updateTimer,1000);

function updateTimer(){
    timeLeft--;
    document.getElementById("timer").innerText=timeLeft;
    if(timeLeft<=0){
        clearInterval(timer);
        alert("Уақыт бітті!");
    }
}

function addScore(points){
    score+=points;
    document.getElementById("score").innerText=score;
}

// =================== ФОРМУЛА ЕСЕПТЕР ===================
function checkRectangle(){
    let ans=Number(rectAnswer.value);
    if(ans===40){
        rectResult.innerText="✅ Дұрыс!";
        addScore(10);
    }else{
        rectResult.innerText="❌ Қате! Жауап: 40";
    }
}

function checkTriangle(){
    let ans=Number(triangleAnswer.value);
    if(ans===12){
        triangleResult.innerText="✅ Дұрыс!";
        addScore(10);
    }else{
        triangleResult.innerText="❌ Қате! Жауап: 12";
    }
}

function checkPercent(){
    let ans=Number(percentAnswer.value);
    if(ans===100){
        percentResult.innerText="✅ Дұрыс!";
        addScore(10);
    }else{
        percentResult.innerText="❌ Қате! Жауап: 100";
    }
}

// =================== ОЙЫН ===================
let correct;

function newQuestion(){
    let a=Math.floor(Math.random()*20);
    let b=Math.floor(Math.random()*20);
    correct=a+b;
    question.innerText=a+" + "+b+" = ?";
}
newQuestion();

function checkGame(){
    let ans=Number(gameAnswer.value);
    if(ans===correct){
        gameResult.innerText="✅ Дұрыс!";
        addScore(5);
    }else{
        gameResult.innerText="❌ Қате!";
    }
    gameAnswer.value="";
    newQuestion();
}

// =================== КАЛЬКУЛЯТОР ===================
function calculate(op){
    let a=Number(n1.value);
    let b=Number(n2.value);
    let r;
    if(op==="+") r=a+b;
    if(op==="-") r=a-b;
    if(op==="*") r=a*b;
    if(op==="/") r=a/b;
    calcResult.innerText="Жауап: "+r;
}

// =================== LOCAL STORAGE (БАЗА) ===================
function saveScore(){
    let name=playerName.value;
    let data=JSON.parse(localStorage.getItem("scores"))||[];
    data.push({name:name,score:score});
    localStorage.setItem("scores",JSON.stringify(data));
    loadScores();
}

function loadScores(){
    let data=JSON.parse(localStorage.getItem("scores"))||[];
    scoresList.innerHTML="";
    data.sort((a,b)=>b.score-a.score);
    data.forEach(player=>{
        let li=document.createElement("li");
        li.textContent=player.name+" - "+player.score+" ұпай";
        scoresList.appendChild(li);
    });
}
loadScores();

// ================= TRIGONOMETRY =================

// 1-есеп: sin²x + cos²x = 1
function checkTrig1(){
    let ans = Number(document.getElementById("trig1").value);

    // sin x = 0.6
    // cos x = √(1 - 0.36) = √0.64 = 0.8

    if(Math.abs(ans - 0.8) < 0.01){
        trig1Result.innerText="✅ Дұрыс!";
        addScore(15);
    }else{
        trig1Result.innerText="❌ Қате! Жауап: 0.8";
    }
}

// 2-есеп: 1 + tan²x = 1/cos²x
function checkTrig2(){
    let ans = Number(document.getElementById("trig2").value);

    // cos x = 0.8
    // cos²x = 0.64
    // 1/cos²x = 1.5625
    // tan²x = 1.5625 - 1 = 0.5625

    if(Math.abs(ans - 0.56) < 0.02){
        trig2Result.innerText="✅ Дұрыс!";
        addScore(20);
    }else{
        trig2Result.innerText="❌ Қате! Жауап ≈ 0.56";
    }
}

// 3-күрделі өрнек
function checkTrig3(){
    let ans = Number(document.getElementById("trig3").value);

    // sin x = 0.5
    // sin²x = 0.25
    // cos²x = 1 - 0.25 = 0.75
    // (1 - cos²x) = 0.25
    // 0.25 / 0.25 = 1

    if(Math.abs(ans - 1) < 0.01){
        trig3Result.innerText="🔥 Дұрыс! Бұл толық тепе-теңдік!";
        addScore(25);
    }else{
        trig3Result.innerText="❌ Қате! Жауап: 1";
    }
}
