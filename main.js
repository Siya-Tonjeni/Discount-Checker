function checkEligibility(){
    const age = document.getElementById('age').value;
    const member = document.getElementById('checkbox').checked;
    const result = document.getElementById('result');

    if(age >= 65){
        result.textContent = "Your are eligible for a senior discount!";
    }
    else if( age >= 18 && member === true){
        result.textContent = "Your are eligible for a member discount!";
    }
    else{
        result.textContent = "Not eligible for a discount!";
    }
}