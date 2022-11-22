// var divbutton = document.getElementById('paragraph')
// var count =0;
// paragraph.addEventListener('click', ()=> {
//     count++;
//     console.log(`button clicked ${count} `)
    
//     var div = document.createElement('div')
//     div.innerHTML=`<h2>hello div created ${count}<h2>`
//     document.body.append(div)

// });

// var para = document.getElementById('love')
// para.addEventListener('click', ()=> {
//     para.style.backgroundColor="yellow"
//     console.log("love = hate")
//     var div = document.createElement('div')
//         div.innerHTML="love to the core"
//         document.body.append(div)
    
   

// }); 

// var great =document.getElementById('great')
// great.addEventListener('click', () =>{
//    var name = prompt("the value of add")
//     console.log(name)
//     var para = document.createElement('p')
//     para.style.backgroundColor="yellow"
//     para.setAttribute('class','para')
//     para.innerHTML=`Name is ${name}`
//     document.body.append(para)


// })

var para1=document.querySelector('.para')
// console.log(para1)
for(i=0; i<para1.length;i++){
    console.log(para1[i])
    
    para1[i].addEventListener('click',()=>{
        console.log(`Button clicked`)

        var div = document.createElement('div')
    div.innerHTML=`<h2>Hello hi</h2>`
    document.body.append(div)
     })
    
}
