const buttons = document.querySelectorAll("button");
const out = document.querySelector("#out");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.innerHTML === "C") {
            out.value = '';
        } else if(button.innerHTML === "=") {
            out.value = eval(out.value);
        } else {
            out.value += button.innerHTML;
        }
    });
});