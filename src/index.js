const numbers = document.querySelectorAll("[data-number]");
        const currentScreen = document.querySelector("#currentScreen");
        const pastScreen = document.querySelector("#pastScreen");
        const clear = document.querySelector('#clear'); 
        const operators = document.querySelectorAll("[data-operator]");
        const deleter = document.querySelector('#delete')
        
        let screenCounter = 0;
        let operatorCounter = 0;
        let a;
        let b;
        let operatorTrack = '';
        let minus = document.querySelector('#minus');
        let add = document.querySelector('#add');
        let multiply = document.querySelector('#times');
        let divide = document.querySelector('#divide');
        let equals = document.querySelector('#equals');

        numbers.forEach(number => {
            number.addEventListener('click', () => {
                if((currentScreen.textContent === '0')){
                    currentScreen.textContent = '';
                }
                else if((pastScreen.textContent.length > 0) && (screenCounter == 0)){
                    currentScreen.textContent = '';
                    screenCounter += 1;
                }
                currentScreen.textContent += number.textContent.trim();
                console.log(number.textContent)
            })
        })

        clear.addEventListener('click', () => {
            currentScreen.textContent = 0
            pastScreen.textContent = ''
            a = 0;
            b = 0;
            operatorCounter = 0;
        })

        operators.forEach(operator => {
            operator.addEventListener('click', () => {
                pastScreen.textContent = (currentScreen.textContent + ' ' + operator.textContent);
                screenCounter = 0;
                if(operatorCounter == 0){
                    a = parseFloat(currentScreen.textContent);
                    operatorTrack = operator.textContent;
                    operatorCounter += 1;
                }
                else{
                    b = parseFloat(currentScreen.textContent);
                    if(operatorTrack == minus.textContent){
                        if(operator.textContent == equals.textContent){
                            pastScreen.textContent = (a + ' ' + operatorTrack + ' ' + b + ' ' + '=');
                        }
                        else {
                            pastScreen.textContent = (a + ' ' +  operator.textContent);
                        }
                        a = a - b;
                        currentScreen.textContent = a;
                    }
                    else if(operatorTrack == multiply.textContent){
                        if(operator.textContent == equals.textContent){
                            pastScreen.textContent = (a + ' ' + operatorTrack + ' ' + b + ' ' + '=');
                        }
                        else {
                            pastScreen.textContent = (a + ' ' +  operator.textContent);
                        }
                        a = Number((a * b).toFixed(5));
                        currentScreen.textContent = a;
                    }
                    else if(operatorTrack == add.textContent){
                        if(operator.textContent == equals.textContent){
                            pastScreen.textContent = (a + ' ' + operatorTrack + ' ' + b + ' ' + '=');
                        }
                        else {
                            pastScreen.textContent = (a + ' ' +  operator.textContent);
                        }
                        a = a + b;
                        currentScreen.textContent = a;
                    }
                    else if(operatorTrack == divide.textContent){
                        if(operator.textContent == equals.textContent){
                            pastScreen.textContent = (a + ' ' + operatorTrack + ' ' + b + ' ' + '=');
                        }
                        else {
                            pastScreen.textContent = (a + ' ' +  operator.textContent);
                        }
                        a = Number((a/b).toFixed(5));
                        currentScreen.textContent = a;
                    }
                    operatorTrack = operator.textContent;
                }
            })
        })

        deleter.addEventListener('click', () => {
            currentScreen.textContent = currentScreen.textContent.slice(0,currentScreen.textContent.length - 1);
        })
