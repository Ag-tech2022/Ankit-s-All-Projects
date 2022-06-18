/*target the all input code*/

const codes = document.querySelectorAll('.code')

code[0].focus()

/*using the forEach loop*/

codes.forEach((code,idex)=>{
    code.addEventListener('keydown',(e)=>{
        
/*condition use*/

        if(e.key >= 0 && e.key <=9){
            codes[idx].value = ''
            setTimeout(()=>codes[idx + 1].focus(), 10)
        }else if(e.key === 'Backspace'){
            settimeout(()=>codes[idx - 1].focus(), 10)
        }
    })
})