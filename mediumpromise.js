function task(){
    return new Promise((resolved,rejected)=>{
        let rand=Math.floor(Math.random()*2);
        if(rand==0){
            resolved();
        }
        else{
            rejected();
        }

    })
}

task()
.then(()=>console.log("U won the toss"))
.catch(()=>console.log("U loss the toss"))
