function details(userid,callback){
    setTimeout(function(){
        console.log(userid);
        const pack={
            1:{name:"dhanush",age:20},
            2:{name:"dhyanesh",age:19},
            3:{name:"kishore",age:23}
        }

        const save=pack[userid];
        if(save){
            callback(null,save)
        }
        else{
            callback("this is error",null)
        }

    },5000)

}

function changes(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log("user :",data)
    }
}

details(7,changes);