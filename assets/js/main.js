import {sumar, restar, multiplicar, dividir} from '../../node_modules/operacionesqualentum/main.js'


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
        console.log('eeeee',elementos)
        
        let a = ''
        let b = ''
        for(let i=0; i<elementos.length; i++){
            if (!isNaN(parseInt(elementos[i]))) {
                console.log(elementos[i])
                a = parseInt(elementos[i])
                console.log('a',a)
                
            } else {
                if(elementos[i]=== '+'){
                    
                    i++
                    b = parseInt(elementos[i])
                    //const suma = a + b
                    const suma = sumar(a, b)
                    console.log('suma',suma)
                    if(i<elementos.length){
                        a=suma
                    }
                }
                if(elementos[i]=== '-'){
                    
                    i++
                    b = parseInt(elementos[i])
                    const resta = restar(a, b)
                    console.log('resta',resta)
                    if(i<elementos.length){
                        a=resta
                    }
                }
                if(elementos[i]=== '×'){
                    
                    i++
                    b = parseInt(elementos[i])
                    const resta = multiplicar(a, b)
                    console.log('resta',resta)
                    if(i<elementos.length){
                        a=resta
                    }
                }
                if(elementos[i]=== '÷'){
                    
                    i++
                    b = parseInt(elementos[i])
                    if(b===0){
                        screen.textContent="error dividir por 0"
                        return
                    }
                    const resta = dividir(a, b)
                    console.log('resta',resta)
                    if(i<elementos.length){
                        a=resta
                    }
                }
                console.log(elementos[i])

            }

        }


        screen.textContent=a
    })
    
    

}

calculadora()