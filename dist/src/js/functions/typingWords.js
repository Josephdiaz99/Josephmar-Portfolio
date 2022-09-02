export default function typingWord(phrase){
   
    const $spanPhrase=document.querySelector('.hero-phrase');

    let phraseArr=phrase.split('');
    let i=0;

    let printStr=setInterval(() => {

        if(phraseArr[i]===' '){
            $spanPhrase.innerHTML+=phraseArr[i];
            $spanPhrase.innerHTML+=phraseArr[i + 1];
            i += 2;
        }else{
            $spanPhrase.innerHTML+=phraseArr[i];
            i++
        }

        if(i===phraseArr.length){
            clearInterval(printStr);
        }
    }, 200);

    

}
