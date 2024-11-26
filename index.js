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



// ONCLICK ALL BTN SHOW IN RESULT.TEXTCONTENT

// Create array for all btn
let allBtns = new Array(zero, one, two, three, four, five, sexe, seven, eight, nine, point, add, supp, mult, divs)
// Loop for all btn in add event
allBtns.forEach(function (btn) {

    btn.addEventListener('click', function () {
        result.textContent += btn.textContent
    })
})



// FUNCTION TOTAL()

function total() {
  
    // Collecte all btn in result.Content to ==> array
    let arrayResult = result.textContent.split(/([+-/*])/)
    let total=arrayResult.join('')
    result.textContent=Math.round(eval(total))
   
    
}

function clearResult(){
    result.textContent=''
}


// CALL FUNCTION TOTAL()

equal.addEventListener('click',function(){
    total()
})


// CALL FUNCTION CLEAR()

clear.addEventListener('click',function(){
    clearResult()
})