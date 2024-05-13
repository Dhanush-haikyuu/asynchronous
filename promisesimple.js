// const data=new Promise((resolve,rejected)=>{
//     const name=""
//     if(name){
//         resolve(name)

//     }
//     else{
//         rejected(new Error("there is an error"));
//     }

// })

// data
// .then((nme)=>console.log(nme))
// .catch((err)=>console.log(err))

const data=new Promise((resolve,rejected)=>{
    const name="dhanush"
    if(name){
        resolve(name)

    }
    else{
        rejected(new Error("there is an error"));
    }

})
function getuserdetails(){
const another=new Promise((res,rej)=>{
    const name="dhanush"
    if(name){
        resolve(name)

    }
    else{
        rejected(new Error("there is an error"));
    }
    
})
}

// data
// .then((nme)=>{
//     const user=[{naming:"dhanush",age:20}]
//     console.log(user.find(nam=>nam.naming===nme).age)



// })
// .catch((err)=>console.log(err))

data