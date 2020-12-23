
// const h1=window.innerHeight/1.3
// const h2=document.getElementById("productos")

// const rootStyles=document.documentElement.style

// addEventListener("scroll",()=>{

//     const scrollUnit=h2.getBoundingClientRect().top
// console.log(h1);
// console.log(scrollUnit);


// if(scrollUnit <= h1){
// h2.classList.add("edward")
// rootStyles.setProperty("--stop","running")}

// }

// )



addEventListener("scroll",()=>{
let productos=document.getElementById("productos")
let altura=window.innerHeight/1
let distancia=productos.getBoundingClientRect().top
const rootStyles=document.documentElement.style
if(distancia <= altura){
   
    rootStyles.setProperty("--stop","running")

}


})


