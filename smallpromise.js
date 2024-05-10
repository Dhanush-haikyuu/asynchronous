const result=new Promise((resolved,rejected)=>{
    let tickbuy=true;
    if(tickbuy){
        resolved()
    }
    else{
        rejected()
    }
    })
    
    result
    .then(()=>console.log("i got the ticket"))
    .catch(()=>console.log("sorry i didn't get the ticket "))