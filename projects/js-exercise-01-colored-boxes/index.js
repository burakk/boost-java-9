/*
1- 0 - 255 arası Rastgele sayı  üreten bir fonksiyon yaz 

colorsArr = ["red", "aqua", "orange"]




2- Kutu oluşturacak butonu seç

3- Olay dinleyicisi ekle

4- Yeni kutu üret

 -- ???? 

*/

const colors = ["red", "blue", "aqua", "limegreen", "pink"];

const btnCreateBoxEl = document.getElementById("btn-create-box");

const stageEl = document.getElementById("stage");

btnCreateBoxEl.addEventListener("click", handleCreateBox);

let prevRand = null;

function handleCreateBox(e) {
  //div elemanı oluştur
  let rand = Math.floor(Math.random() * colors.length);
  const divEl = document.createElement("div");
  //div elemanına box ekle
  divEl.classList.add("box");

  divEl.style.backgroundColor = colors[rand];
  // div elemanını son eleman olarak  stageElemanına ekle
  stageEl.append(divEl);

  console.log(rand);
}

/*

[11:05] Doruk Tokinan (BilgeAdam Boost)

let index = -1;

 

function handleCreateBox(e){

    //div elemanı oluştur.

    const divEl = document.createElement("div");

    //div elemanına box classı ekle.

    divEl.classList.add("box");

    divEl.style.backgroundColor = colors[skipSameColor()];

   

    //append (div elemanını son eleman olarak ekle.)

    stageEl.append(divEl);

 

 

}

 

function skipSameColor(){

    let tempIndex= Math.floor(Math.random() * colors.length);

    while(tempIndex==index){

        tempIndex=Math.floor(Math.random() * colors.length);

    }

    index=tempIndex;

    return tempIndex;

}


function skipSameRandom(limit){

    let tempIndex= Math.floor(Math.random() * limit);

    while(tempIndex==index){

        tempIndex=Math.floor(Math.random() * limit);

    }

    index=tempIndex;

    return tempIndex;

}

*/
