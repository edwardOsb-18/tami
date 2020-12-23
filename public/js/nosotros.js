// const h1=document.documentElement.scrollHeight
// const h2=document.documentElement.clientHeight
// const scrollUnit=(h1-h2)/100
// const rootStyles=document.documentElement.style
// addEventListener("scroll",()=>{
// if(Math.round(scrollY/scrollUnit)===40)

// rootStyles.setProperty("--stop","running")

// }

// )



// addEventListener("scroll",()=>{
//   if(Math.round(scrollY/scrollUnit)===60){

//     rootStyles.setProperty("--stop1","running")}

//   }

//   )






  addEventListener("scroll",()=>{
    let valores__iconos=document.getElementById("valores__iconos")
    let altura=window.innerHeight/1.1
    let distancia=valores__iconos.getBoundingClientRect().top
    const rootStyles=document.documentElement.style
    if(distancia <= altura){
       
        rootStyles.setProperty("--stop","running")
    
    }
    
    
    })
    

    addEventListener("scroll",()=>{
      let certificaciones=document.getElementById("certificaciones")
      let altura=window.innerHeight/1.1
      let distancia=certificaciones.getBoundingClientRect().top
      const rootStyles=document.documentElement.style
      if(distancia <= altura){
         
          rootStyles.setProperty("--stop1","running")
      
      }
      
      
      })
      