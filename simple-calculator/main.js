let formAdd = document["addition"]
formAdd.addEventListener("submit", function(event){    
    event.preventDefault()
    const firstNum = Number(formAdd.firstNum.value)
    const secondNum = Number(formAdd.secondNum.value)
    formAdd.firstNum.value = ""
    formAdd.secondNum.value = ""
    let sum = (firstNum + secondNum)    
    const h1 = document.createElement('h1')
    h1.textContent = sum
    document.body.append(h1)
    console.log(sum)
})

let formSub = document["subtraction"]
formSub.addEventListener("submit", function(event){    
    event.preventDefault()
    const firstNum = Number(formSub.firstNum.value)
    const secondNum = Number(formSub.secondNum.value)
    formSub.firstNum.value = ""
    formSub.secondNum.value = ""
    let difference = (firstNum - secondNum)
    const h1 = document.createElement('h1')
    h1.textContent = difference
    document.body.append(h1)
    console.log(difference)
    })

let formPro = document["multiplication"]
formPro.addEventListener("submit", function(event){    
    event.preventDefault()
    const firstNum = Number(formPro.firstNum.value)
    const secondNum = Number(formPro.secondNum.value)
    formPro.firstNum.value = ""
    formPro.secondNum.value = ""
    let product = (firstNum * secondNum)
    const h1 = document.createElement('h1')
    h1.textContent = product
    document.body.append(h1)
    console.log(product)
    })
