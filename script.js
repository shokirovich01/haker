const terminal =
document.getElementById("terminal");

const skull =
document.getElementById("skull");

const commands = [

"> Connecting...",
"> Bypassing firewall...",
"> Accessing database...",
"> Reading files...",
"> Injecting payload...",
"> Access complete"

];

let index = 0;

setInterval(()=>{

terminal.innerText =
commands[index];

index++;

if(index>=commands.length){
index=0;
}

},2000);

/* ENTER */

document.addEventListener(
"keydown",
e=>{

if(e.key==="Enter"){

skull.style.opacity=1;

document.body.classList.add(
"glitch"
);

setTimeout(()=>{

document.body.classList.remove(
"glitch"
);

},1000);

setTimeout(()=>{

skull.style.opacity=0;

},3000);

}

});v
