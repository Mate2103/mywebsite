class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    addNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOpariaton(operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this. currentOperand =''
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this. operation = undefined
        this.previousOperand =''
    }
    getDisplayNumber(number) {
        const stringnumber = number.toString()
        const integerdigits = parseFloat(stringnumber.split('.')[0])
        const decimaldigits = stringnumber.split('.')[1]
        let integerdisplay
        if(isNaN(integerdigits)) {
            integerdisplay = ''
        } else {
            integerdisplay = integerdigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimaldigits != null) {
           return `${integerdisplay}.${decimaldigits}`
        } else {
            return integerdisplay
        }
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = 
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const cr = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        cr.addNumber(button.innerText)
        cr.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        cr.chooseOpariaton(button.innerText)
        cr.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    cr.compute()
    cr.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    cr.clear()
    cr.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    cr.delete()
    cr.updateDisplay()
})