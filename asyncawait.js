const checkLogin=()=>{return new Promise(
    (resolve,reject)=>{
        let loggedIn=false;
        if(loggedIn){
            resolve("welcome you are logged in")
        }
        else{
            reject("sorry you are not logged in")
        }
    }   
)
}
async function handleLogin(){
    try{
        const result=await checkLogin();
        console.log(result);
    } catch(error){
    console.log(error);
}
}
handleLogin();