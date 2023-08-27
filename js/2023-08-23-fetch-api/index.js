//api ---> https://638a06e04eccb986e8a1804b.mockapi.io/

//api ---> https://638a06e04eccb986e8a1804b.mockapi.io/works

//api ---> https://638a06e04eccb986e8a1804b.mockapi.io/works/1

fetch("https://638a06e04eccb986e8a1804b.mockapi.io/works")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(typeof data);
  })
  .catch((err) => console.log(err.message));



//work/1
fetch("https://638a06e04eccb986e8a1804b.mockapi.io/works/178")
  .then((response) => {
    if(response.ok){
        return response.json();
    }
   throw new Error("Something went wrong!!!");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));




  fetch("https://638a06e04eccb986e8a1804b.mockapi.io/works")
  .then( (response )=>{
    if(response.ok){
        return response.json()
    }

    throw new Error("Something went terribly wrong!!!");
   
  }  )
  .then( (worksData)=>{  console.log(worksData)  } )
  .catch( (err)=>{ console.log(err.message)} )




  /* method Delete */
fetch( "https://638a06e04eccb986e8a1804b.mockapi.io/works/1", {method:"DELETE"})
.then( (response)=>{  
    if(response.ok){
        console.log(response)
    }

    throw new Error( "An error occured...")
})
.catch( (err)=>{ console.log(err.message) })

  /* method Post */
const newWork = { title:"My splendid work", description:"Java app", excerpt:"a summary text"  }

const addWorkFetchOpts = {  
    method:"POST",
    headers:{  "Content-Type":"application/json"},
    body:JSON.stringify(newWork),
}

fetch("https://638a06e04eccb986e8a1804b.mockapi.io/works",addWorkFetchOpts)
.then()



  /* method Put */