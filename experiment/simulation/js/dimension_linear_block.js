// var dim, rate;

function initial() {
    const dimensionQuestion = document.getElementById("dimensionQuestion");
    const rateQuestion = document.getElementById("rateQuestion");
    const dimensionForm = document.getElementById("dimensionForm");
    const rateForm = document.getElementById("rateForm");

    const dimensionEntered = document.getElementById("dimensionEntered");
    const rateEntered = document.getElementById("rateEntered");

    dimensionEntered.innerHTML = "";
    rateEntered.innerHTML = "";

    dimensionQuestion.style.display = "block";
    rateQuestion.style.display = "none";

    dimensionForm.reset();
    rateForm.reset();
}


function checkDimension() {
    const dimensionEntered = document.getElementById("dimensionEntered");
    const rateEntered = document.getElementById("rateEntered");

    const dimensionInput = document.getElementById("dimensionInput").value;
    const rateInput = document.getElementById("rateInput").value;

    if (dimensionInput == 3) {
        dimensionEntered.innerHTML = "<b>Correct Answer!!!</b>";
        dimensionEntered.style.color = "green";
    }
    else {
        if (dimensionEntered.innerHTML == "<b>Incorrect. Please try again.</b>") {
            dimensionEntered.innerHTML = "<b>Incorrect. Please try again.</b>";
            dimensionEntered.style.color = "red";
            return;
        }
        else {
            dimensionEntered.innerHTML = "<b>Incorrect. Please try again.</b>";
            dimensionEntered.style.color = "red";
            return;
        }
    }

    dimensionQuestion.style.display = "none";
    rateQuestion.style.display = "block";
}

function checkRate() {
    const dimensionEntered = document.getElementById("dimensionEntered");
    const rateEntered = document.getElementById("rateEntered");

    const dimensionInput = document.getElementById("dimensionInput").value;
    const rateInput = parseFloat(document.getElementById("rateInput").value);

    if (rateInput.toFixed(2) == 0.50) {
        rateEntered.innerHTML = "<b>Correct Answer!!!</b>";
        rateEntered.style.color = "green";
    }
    else {
        if (rateEntered.innerHTML == "<b>Incorrect. Please try again.</b>") {
            rateEntered.innerHTML = "<b>Incorrect. Please try again.</b>";
            rateEntered.style.color = "red";
            return;
        }
        else {
            rateEntered.innerHTML = "<b>Incorrect. Please try again.</b>";
            rateEntered.style.color = "red";
            return;
        }
    }

}

