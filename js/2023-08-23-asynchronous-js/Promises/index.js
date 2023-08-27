//pending, fullfilled, rejected

// promise executer functions for resolve and reject

const isRainy = false;

const iWllBeThereOnTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!isRainy) {
      resolve("Hep dakik olmuşumdur");
    }
       
    reject("Ah bu yağmurlar...");
  }, 2000);
});



iWllBeThereOnTime
.then( (msg)=>{ console.log(msg) })
.catch( (errMsg)=>{ console.log(errMsg)} )


function customFetch(){
    //statements
}


function loadData(url){

    return new Promise(  (resolve, reject)=>{


        const response = customFetch(url);

        if(response.ok){
            resolve(response.data)
        }
        
        reject("Server error")

    }   )


}


loadData("theurl")
.then( ( data )=>console.log(data)  )
.catch( (errMsg)=>console.log(errMsg))












