let contBox = document.querySelector(".container");
        
const input = document.getElementById("numOfWords");


const generateWord = (n)=>{

    let text = "";

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0  ; i< n ; i++){

        text+=letters[(Math.random()*(letters.length-1)).toFixed(0)];

    }
    return text;
}

let numOfWords;

const genratePara = ()=>{

    numOfWords = Number(input.value);

    const para = document.createElement("p");

    let paragraph = "" ;

    for(let i = 0 ; i< numOfWords  ; i++){

        const wordLen = 10;
        
        paragraph+=generateWord((Math.random()*wordLen).toFixed(0)).toLocaleLowerCase()+" ";
    }
      
    para.innerText = paragraph;


    para.setAttribute("class","paras");

    contBox.appendChild(para);

}