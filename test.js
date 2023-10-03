
let result = document.querySelector('.calculator .result');
let equal = document.querySelector('.calculator .buttons .equal');
let clear = document.querySelector('.calculator .buttons .leftPanel :nth-child(4) :nth-child(3) ');
// get operator
let add = document.querySelector('.calculator .buttons .operators :nth-child(1)');
let supp = document.querySelector('.calculator .buttons .operators :nth-child(2)');
let mult = document.querySelector('.calculator .buttons .operators :nth-child(3)');
let divs = document.querySelector('.calculator .buttons .operators :nth-child(4)');
// get numbers
let seven = document.querySelector('.calculator .buttons .leftPanel :nth-child(1) :nth-child(1) ');
let eight = document.querySelector('.calculator .buttons .leftPanel :nth-child(1) :nth-child(2) ');
let nine = document.querySelector('.calculator .buttons .leftPanel :nth-child(1) :nth-child(3) ');
let four = document.querySelector('.calculator .buttons .leftPanel :nth-child(2) :nth-child(1) ');
let five = document.querySelector('.calculator .buttons .leftPanel :nth-child(2) :nth-child(2) ');
let sexe = document.querySelector('.calculator .buttons .leftPanel :nth-child(2) :nth-child(3) ');
let one = document.querySelector('.calculator .buttons .leftPanel :nth-child(3) :nth-child(1) ');
let two = document.querySelector('.calculator .buttons .leftPanel :nth-child(3) :nth-child(2) ');
let three = document.querySelector('.calculator .buttons .leftPanel :nth-child(3) :nth-child(3) ');
let zero = document.querySelector('.calculator .buttons .leftPanel :nth-child(4) :nth-child(1) ');
let point = document.querySelector('.calculator .buttons .leftPanel :nth-child(4) :nth-child(2) ');



// START SOLUTION


// array all btn
let numbersbtn = new Array(zero, one, two, three, four, five, sexe, seven, eight, nine, point)
let operatbtn = new Array(add, supp, mult, divs)

// event click for show btn in result
numbersbtn.forEach(function (num) {
    num.addEventListener('click', function () {

        result.textContent += num.textContent
    })
})

operatbtn.forEach(function (opera) {

    opera.addEventListener('click', function () {

        result.textContent += opera.textContent
    })
})

// function calc the all operation
function calacReslt() {

    let arrayResult = result.textContent.split(/([+-/*])/)

    // calcu divs
    if (arrayResult.includes('/')) {

        for (let i = 0; i < arrayResult.length; i++) {

            if (arrayResult[i] === '/') {

                let calcmult = parseInt(arrayResult[i - 1]) / parseInt(arrayResult[i + 1])
                arrayResult.splice(i - 1, 3, calcmult)
            }
        }
    }


    // calcu mult
    if (arrayResult.includes('*')) {

        for (let i = 0; i < arrayResult.length; i++) {

            if (arrayResult[i] === '*') {

                let calcmult = parseInt(arrayResult[i - 1]) * parseInt(arrayResult[i + 1])
                arrayResult.splice(i - 1, 3, calcmult)
            }
        }
    }


    // calcu add
    if (arrayResult.includes('+')) {

        for (let i = 0; i < arrayResult.length; i++) {

            if (arrayResult[i] === '+') {

               
                let calcmult = parseInt(arrayResult[i - 1]) + parseInt(arrayResult[i + 1])
                arrayResult.splice(i - 1, 3, calcmult)
            }
        }
    }


    // calcu supp
    if (arrayResult.includes('-')) {

        for (let i = 0; i < arrayResult.length; i++) {

            if (arrayResult[i] === '-') {

                if ( arrayResult[i - 1] === '') {

                    arrayResult[i + 1] =  - arrayResult[i + 1] 
                    arrayResult.splice(i - 1, 2)
                } else {

                    let calcmult = parseInt(arrayResult[i - 1]) - parseInt(arrayResult[i + 1])
                    arrayResult.splice(i - 1, 3, calcmult)
                }
            }
        }
    }

    result.textContent = arrayResult.join('')
    console.log(arrayResult)
}






// function clear result
function clearResult() {
    result.textContent = ''
}

// CALL ALL FUNCTION
equal.addEventListener('click', function () {
    calacReslt()
})

clear.addEventListener('click', function () {
    clearResult()
})


let testsupp= ['-',"4"]

if(testsupp[0].includes('-')&& typeof parseInt(testsupp[1])==='number'){
    console.log('hamza')
}


if(testsupp.includes())