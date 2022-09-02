export default function hamburguerMenu(){
    const d=document
   

    d.addEventListener('click',e=>{
            if(e.target.matches('.menu-responsive')|| e.target.matches(`${'.menu-responsive'} *`)){
                d.querySelector('.nav-container').classList.toggle('is-active');
            }else{
                d.querySelector('.nav-container').classList.remove('is-active');
            }
    });
   }