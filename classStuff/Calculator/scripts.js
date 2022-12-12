const calcApp = () => {
    const currentValue = document.querySelector('.currentValue')
    const previousValue = document.querySelector('.previousValue')
    let itemArray = []
    equationArray = []
    let newNum = false
    const numButtons = document.querySelectorAll(".Number");


    numButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const newInput = e.target.textContent;
            if (newNum) {
                currentValue.value = newInput;
                newNum = false
            } else {
                currentValue.value =
                    currentValue.value == 0
                        ? newInput
                        : `${currentValue.value}${newInput}`;
            }
        })
    })
}

document.addEventListener("DOMContentLoaded",calcApp)