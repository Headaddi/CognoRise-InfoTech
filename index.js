const form = document.querySelector("form");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const weight = parseInt(weightInput.value);
    const height = parseInt(heightInput.value)/100;
    const bmi = (weight/Math.pow(height,2)).toFixed(2);
    if (bmi < 18.5) {
        resultDiv.innerHTML = "Your BMI is "+bmi+", so you are underweight.";
    } else if (bmi >= 18.5 && bmi<= 24.9){
        resultDiv.innerHTML = "Your BMI is "+bmi+", so you have a normal weight.";
    }else if(bmi > 24.9){
        resultDiv.innerHTML = "Your BMI is "+bmi+", so you are overweight.";
    }
    weightInput.value = '';
    heightInput.value = '';
    
})