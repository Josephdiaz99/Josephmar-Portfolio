export default function proyectHover(){

    const $divGrid1=document.querySelector('.grid1')
    const $divGrid2=document.querySelector('.grid2')
    const $divGrid3=document.querySelector('.grid3')
    const $divGrid4=document.querySelector('.grid4')

    const $informationDiv1=document.querySelector('.information1')
    const $informationDiv2=document.querySelector('.information2')
    const $informationDiv3=document.querySelector('.information3')
    const $informationDiv4=document.querySelector('.information4')


    document.addEventListener('mouseover',(e)=>{
        if(e.target===$informationDiv1){
            console.log('1')
            $informationDiv1.classList.add('information-active')
        }else{
            $informationDiv1.classList.remove('information-active')
        }

        if(e.target===$informationDiv2){
            console.log('tocaste2')
            $informationDiv2.classList.add('information-active')
        }else{
            $informationDiv2.classList.remove('information-active')
        }

        if(e.target===$informationDiv3){
            $informationDiv3.classList.add('information-active')
            console.log('tocaste3')
        }else{
            $informationDiv3.classList.remove('information-active')
        }

        if(e.target===$informationDiv4){
            $informationDiv4.classList.add('information-active')
            console.log('tocaste4')
        }else{
            $informationDiv3.classList.remove('information-active')
        }
    })


}