let btn = document.getElementById('btn');
let display1 = document.getElementById('display1');

var chat= ['hello','Zuhan ekta horny pola','tawssef vhai is best','tonmoy vhai zulumkari','sharif vhai osthir','tareq vhai extra terrstrial','foysal vhai boy'];

btn.addEventListener('click',function(){
     var randomchat = chat[Math.floor(Math.random()*chat.length)]
    display1.innerHTML = randomchat;

let display = document.getElementById('userbox').value;
let display2 = document.getElementById('display2').innerHTML=display;
document.getElementById('userbox').value='';

 })




