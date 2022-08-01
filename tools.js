let toolsCont = document.querySelector(".tools-cont");
let optionsCont = document.querySelector(".options-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");



let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");
let sticky = document.querySelector(".sticky");

let optionsFlag=true // means visible
let pencilFlag = false;
let eraserFlag = false;



//options
optionsCont.addEventListener("click", (e)=>{



    optionsFlag =!optionsFlag;
    if(optionsFlag===true) openTools();
    
    else closeTools();

})

function openTools(){ // we have to show

    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
    toolsCont.style.display="flex";
   
}

function closeTools(){ // we have to hide
    
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display="none";
    eraserToolCont.style.display="none";
    pencilToolCont.style.display="none";
    pencilFlag=false;
    eraserFlag=false;
}

//pencil editor tool
pencil.addEventListener("click", (e)=>{
    pencilFlag=!pencilFlag // true -> show , false -> hide

    if(pencilFlag) pencilToolCont.style.display="block";

    else pencilToolCont.style.display="none";
})


eraser.addEventListener("click", (e)=>{
    eraserFlag=!eraserFlag // true -> show , false -> hide

    if(eraserFlag) eraserToolCont.style.display="flex";

    else eraserToolCont.style.display="none";
})

//sticky tools

sticky.addEventListener("click", (e)=>{
    let stickyCont= document.createElement("div");
    stickyCont.setAttribute("class" , "sticky-cont");

    stickyCont.innerHTML=`
    <div class="header-cont">
            <div class="minimize">

            </div>
            <div class="remove">

            </div>
        </div>
        <div class="notes-cont">
            <textarea></textarea>
        </div>
    `;

    document.body.appendChild(stickyCont);

})