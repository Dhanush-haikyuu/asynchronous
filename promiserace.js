const keshav= new Promise((resolved,rejected)=>{
    let catering=false;
    if(catering){
        setTimeout(resolved,3000,"keshav is  coming")
    }
    else{
        setTimeout(rejected,3000,"keshav is not coming")
    }
})

const sakthi= new Promise((resolved,rejected)=>{
    let catering=true;
    if(catering){
        setTimeout(resolved,5000,"sakthi is coming")
    }
    else{
        setTimeout(rejected,5000,"sakthi is not coming")
    }
})
const dhanush= new Promise((resolved,rejected)=>{
    let catering=false;
    if(catering){
        setTimeout(resolved,2000,"dhanush is coming")
    }
    else{
        setTimeout(rejected,2000,"dhanush is not coming")
    }
})

Promise.race([keshav,sakthi,dhanush])
.then((msg)=>console.log(msg))
.catch((msg)=>console.log(msg));

