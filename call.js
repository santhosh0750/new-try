// function convertodoller(ruppe) {
//     return new Promise ((resolve ,rejected) =>{
//     if(typeof(ruppe) === "number" && ruppe>=0) {
//         resolve (ruppe * 79.02)
//     }else{
//         rejected ("invalid number")
//     }
// })
// }

// const doller = convertodoller(-1)
// console.log(doller);



const value = 2;
const numbermatch = new Promise ((resolve,reject) =>{
    const random = Math.floor(match.random() * 3);
    if( random === value){
        resolve("number is matched")
    }else{
        reject("waste of time")
    }
})

async function fncall() {
    try {
        const data = await numbermatch;
        console.log(data)
    } catch(err) {
        console.log(err);
    }
}
fncall();