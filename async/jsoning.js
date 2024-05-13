const api_fetch="https://api.github.com/users/Dhanush-haikyuu"

async function jsoning(){
    const store=await fetch(api_fetch);
    const joining=await store.json();
    console.log(joining);

}
jsoning()