const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(a =>{
    a.addEventListener('click',() =>{
         a.parentNode.classList.toggle('active')
    })
})