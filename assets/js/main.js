function calculadora (){
    const numbers = document.querySelectorAll('.numbers div')
    const clear = document.getElementById('clear')
    const screen = document.querySelector('.input')
    const digitalScreen = []
    
    
    numbers.forEach(number=> {
        number.addEventListener('click', (event)=>{
            const valueNumber = event.target.textContent
            screen.textContent=valueNumber
            
        })
    })

}

calculadora()