//normal async function
// async function doing(){

//     return "hello"
// }

// console.log(doing());

// doing()
// .then((msg)=>console.log(msg))

let stu1=new Promise((resolved,rejected)=>{
    let pass=true;
    if(pass){
        setTimeout(resolved,3000,"you are pass")
    }
    else{
        setTimeout(rejected,5000,"you are fail");
    }
})

async function marking(){
    try{
    console.log("first");
    let result=await stu1
    console.log(result);
    console.log("last");
    }
    catch(err){
        console.log(err);   
    }


}

marking()
