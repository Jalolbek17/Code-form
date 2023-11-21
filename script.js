const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".input");
var [i, j] = [0, 0];

function getResult() {
    let result = "";
    inputs.forEach(element => {
        result = result + element.value;
    });
    if (result.length < 6) {
        alert("Enter a valid code");
    } else {
        alert("The code is " + result);
    };
};

inputs.forEach(element => {
    // Detect focus
    element.addEventListener("focus", () => {
        i = [].indexOf.call(inputs, element)
        inputs[j].focus();
    });

    // Detect input changes
    element.addEventListener("input", () => {
        if (inputs[i].value !== "" && i < (inputs.length - 1)) {
            j = (i+1);
            inputs[i+1].focus();
        };
    });

    // Detect delete
    element.addEventListener("keydown", () => {
        if ((event.key === "Backspace" || event.key === "Delete") && i > 0) {
            j = (i-1);
            if (i === 5) {
                if (inputs[i].value === "") {
                    inputs[i-1].focus();
                };
            } else {
                inputs[i-1].focus();
            };
        };
    });

    // Detect enter
    element.addEventListener("keydown", () => {
        if ((event.key) === "Enter") {
            getResult();
        };
    });
});

btn.addEventListener("click", getResult);


