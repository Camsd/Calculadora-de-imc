const btnEl = document.getElementById('btn')
const mciInput = document.getElementById('mci-result')
const weightConditionEl = document.getElementById('weight-condition')

function calculateMCI(){
    const heightValue = document.getElementById('height').value / 100

    const weightValue = document.getElementById('weight').value

    const mciValue = (weightValue / (heightValue * heightValue)).toFixed(2)

    mciInput.value = mciValue;

    if(mciValue < 18.5 ){
        weightConditionEl.innerHTML = 'Peso bajo';
    }else if(mciValue >= 18.5 && mciValue <= 24.9 ){
        weightConditionEl.innerHTML = 'Peso normal';
    }else if(mciValue >= 25 && mciValue <= 29.9){
        weightConditionEl.innerHTML = 'Peso alto';
    }else if(mciValue >= 30){
        weightConditionEl.innerText = 'Obesidad';
    }
}


btnEl.addEventListener('click', calculateMCI)