addEventListener("scroll",()=>{
    let productos__tituloCatalogo=document.getElementById("productos__tituloCatalogo")
    let altura=window.innerHeight/1.2
    let distancia=productos__tituloCatalogo.getBoundingClientRect().top
    const rootStyles=document.documentElement.style
    if(distancia <= altura){
       
        rootStyles.setProperty("--stop","running")
    
    }
    
    
    })





            /*maquina__laminadora*/
    
let m_laminadora=document.getElementById("maquina__laminadora"
    )

let laminadora=document.getElementById("laminadora")

let icono=document.getElementById("icono"
    )
    ////

m_laminadora.addEventListener("click",()=>{

laminadora.classList.add("display")

})



icono.addEventListener("click",()=>{


    
     laminadora.classList.remove("display")}



        )    
  




















            /*maquina selladora */



let m_selladora=document.getElementById("maquina__selladora")


let selladora=document.getElementById("selladora")


let icono2=document.getElementById("icono2"
    )



    m_selladora.addEventListener("click",()=>{

selladora.classList.add("display")


    })    

    icono2.addEventListener("click",()=>{
    
      
   selladora.classList.remove("display")
   
           })    
   







            /*maquina de embalaje */



let m_embalaje=document.getElementById("maquina__embalaje")


let embalaje=document.getElementById("embalaje")


let icono3=document.getElementById("icono3"
    )



    m_embalaje.addEventListener("click",()=>{

embalaje.classList.add("display")


    })    

    icono3.addEventListener("click",()=>{
    
      
   embalaje.classList.remove("display")
   
           })    
   



    





           
                /*sellador de vasos*/



let sellador__vasos=document.getElementById("sellador__vasos")
let SelladorVasos=document.getElementById("SelladorVasos")
let icono4=document.getElementById("icono4"
    )



    sellador__vasos.addEventListener("click",()=>{

        SelladorVasos.classList.add("display")


    })    




    icono4.addEventListener("click",()=>{
    
      
   SelladorVasos.classList.remove("display")
   
           })    
   


           




           /*Máquina de Ozono*/



let maquina__ozono=document.getElementById("maquina__ozono")
let ozono=document.getElementById("ozono")
let icono5=document.getElementById("icono5"
    )



    maquina__ozono.addEventListener("click",()=>{

        ozono.classList.add("display")


    })    




    icono5.addEventListener("click",()=>{
    
      
        ozono.classList.remove("display")
   
           })    
   







                /*Esterilizador UV*/



 let esterilizador__uv=document.getElementById("esterilizador__uv")
 let uv=document.getElementById("uv")
 let icono6=document.getElementById("icono6"
     )
 
 
 
     esterilizador__uv.addEventListener("click",()=>{
 
         uv.classList.add("display")
 
 
     })    
 
 
 
 
     icono6.addEventListener("click",()=>{
     
       
         uv.classList.remove("display")
    
            })    
    
 



















            
                /*Esterilizador UV+Ozono*/



 let esterilizador__uvozono=document.getElementById("esterilizador__uvozono")
 let uvOzono            =document.getElementById("uvOzono")
 let icono7=document.getElementById("icono7"
     )
 
 
 
     esterilizador__uvozono.addEventListener("click",()=>{
 
        uvOzono.classList.add("display")
 
 
     })    
 
 
 
 
     icono7.addEventListener("click",()=>{
     
       
        uvOzono.classList.remove("display")
    
            })    
    