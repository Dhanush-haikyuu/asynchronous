const api_getch="https://api.github.com/users/Dhanush-haikyuu"

async function errors(){
    try{
    const data=await fetch(api_getch);
    const json=await data.json();
    console.log(json)
    }
    catch(err){
        console.log(err);
    }
}

errors();