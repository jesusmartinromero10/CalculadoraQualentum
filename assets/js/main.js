function calculadora (){
    const numbers = document.querySelectorAll('.numbers div')
    const clear = document.getElementById('clear')
    const screen = document.querySelector('.input')
    const operators = document.querySelectorAll('.operators')
    const result = document.querySelector('.equal')
    console.log(operators)
    let digitalScreen = ''
    
    
    numbers.forEach(number=> {
        number.addEventListener('click', (event)=>{
            const valueNumber = event.target.textContent
            digitalScreen += valueNumber
            screen.textContent=digitalScreen
            

            
            
        })
        clear.addEventListener('click', ()=>{
            screen.textContent=0
            digitalScreen=''
        })

    })

    operators.forEach(operator =>{
        operator.addEventListener('click', (event)=>{
            const valueOperator = event.target.textContent
            digitalScreen += valueOperator
            screen.textContent=digitalScreen

        })
    })

    result.addEventListener('click', (event)=>{
        const elementos = digitalScreen.split(/(\D)/).filter(digi => digi.trim() !== '');  //divide la cadena de valore en un array separados por +-*/

        
        elementos.map(digital => {
            if(typeof digital){
                console.log(typeof digital)

            }
        })
        digitalScreen=10
        screen.textContent=digitalScreen
    })

}

calculadora()