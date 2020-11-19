let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let inputSpeed = document.getElementById('inputSpeed');
let Liver = document.getElementById('Liver');
let Stop = document.getElementById('Stop');
let output = document.getElementById('output');
let values = ['🤡','🐻','🦉']

function getRandom(){
    return values[Math.floor(Math.random() * 3)];
}


inputSpeed.onchange = (ev)=>{
    console.log('value changed ',ev.target.value)
    document.documentElement.style.setProperty('--speed', ev.target.value)
}


Liver.onclick = () =>{
    output.innerText = "Result";
    value1.innerText = "🎌";
    value2.innerText = "🎌";
    value3.innerText = "🎌";
    document.documentElement.style.setProperty('--animationSelector', 'slotspin');
    document.documentElement.style.setProperty('--speed', 9)
    var inconVar = setInterval(()=>{
        value1.innerText = getRandom();
        value2.innerText = getRandom();
        value3.innerText = getRandom();
    },300);  
    setTimeout(()=>{
        document.documentElement.style.setProperty('--speed', 1)
        document.documentElement.style.setProperty('--animationSelector', 'slotstop')

        clearInterval(inconVar);
        if(value1.innerText == value2.innerText && 
            value2.innerText ==value3.innerText){
            output.innerText = "YOU WON"
        }else{
            output.innerText = "Sorry Try Again"
        }
    },5000);
    

}

