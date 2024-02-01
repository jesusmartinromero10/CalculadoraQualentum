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
        let elementos = digitalScreen.split(/(\D)/).filter(digi => digi.trim() !== '');  //divide la cadena de valore en un array separados por +-*/
        console.log('eeeee',elementos)
        let a = ''
        let b = ''
        const pppp = [2 , '+', 5, '*', 6, '*', 6, '/', 2]


       for(let i = 0; i<elementos.length; i++){
           if (elementos[i] === '×'){
                let res = elementos[i-1] * elementos[i+1]
                console.log('ressss', res)
                elementos.splice(i-1,3, res)
                console.log('ppppp',pppp)
                console.log(i)
                i--
                a=res

           }

           if (elementos[i] === '÷'){
               if (elementos[i+1]==='0'){
                screen.textContent="error dividir por 0"
                return 
               }
            let res = elementos[i-1] / elementos[i+1]
            a= parseFloat(res)
            elementos.splice(i-1,3, res)
            i--

            }
       }

        
        
        for(let i=0; i<elementos.length; i++){
            if (!isNaN(parseInt(elementos[i]))) {
                console.log('asdc',elementos[i])
                a = parseFloat(elementos[i])
                console.log('a',a)
                
            } else {
                if(elementos[i]=== '+'){
                    
                    i++
                    b = parseFloat(elementos[i])
                    //const suma = a + b
                    const suma = sumar(a, b)
                    console.log('suma',suma)
                    if(i<elementos.length){
                        a=suma
                    }
                }
                if(elementos[i]=== '-'){
                    
                    i++
                    b = parseFloat(elementos[i])
                    const resta = restar(a, b)
                    console.log('resta',resta)
                    if(i<elementos.length){
                        a=resta
                    }
                }
                // if(elementos[i]=== '×'){
                    
                //     i++
                //     b = parseInt(elementos[i])
                //     const resta = multiplicar(a, b)
                //     console.log('resta',resta)
                //     if(i<elementos.length){
                //         a=resta
                //     }
                // }
                // if(elementos[i]=== '÷'){
                    
                //     i++
                //     b = parseInt(elementos[i])
                //     if(b===0){
                //         screen.textContent="error dividir por 0"
                //         return
                //     }
                //     const resta = dividir(a, b)
                //     console.log('resta',resta)
                //     if(i<elementos.length){
                //         a=resta
                //     }
                // }
                console.log('aaaa',elementos[i])

            }

        }


        screen.textContent=a
    })
    
    

}

calculadora()