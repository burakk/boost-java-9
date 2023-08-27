//api -> https://638a06e04eccb986e8a1804b.mockapi.io/
const baseUrl =  "https://638a06e04eccb986e8a1804b.mockapi.io/"

 async function getWorks(){
    const response = await fetch( `${baseUrl}/works` );
    if(!response.ok){
        throw new Error("smt went wrong...")
    }
   const data = await response.json();

    return data;

}


getWorks().then( (data)=>{
    console.log( data)
} )
.catch( (err)=> console.log(message ));


