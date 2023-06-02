
function radomNumber(){

    const max = Math.ceil(document.querySelector("#takeNumber").value)
    const min = Math.floor(document.querySelector('#showNumber').value)
    const Result = document.querySelector('#result')

    
    const newResult=  Math.floor(Math.random() * (max - min + 1)) + min;

    

    Result.innerHTML = `O número sorteado é: ${newResult}`
}


