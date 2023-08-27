//default export bir dosyada tek olabilir
export default function deneme(){

    console.log("deneme...");
}

/* sadece export keyword'ü ile ihraç edilen fonksiyonlar named export adıyla anılır */
export function customRandomGenerator(){
    console.log("Random num generated...");
}



const Pi = 3.1415;




export {Pi};


