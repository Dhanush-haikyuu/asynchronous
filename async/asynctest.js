const newing1=new Promise((resolve,rejected)=>{
    setTimeout(()=>resolve("you are right 1"),10000)
})

const newing2=new Promise((resolve,rejected)=>{
    setTimeout(()=>resolve("you are right 2"),5000)
})



// async function gettingdate(){
//     return newing;
// }

// const datapromise=gettingdate()

// datapromise
// .then(res=>console.log(res))


//it is using the async and awaint keyword for handling the promise
async function handlingpromise(){
    console.log("before");
    const val1=await newing1;
    console.log("first")
    console.log(val1);
    console.log("last");

    const val2=await newing2;
    console.log("first")
    console.log(val2);
    console.log("last");


}

handlingpromise()

