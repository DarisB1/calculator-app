const p = document.querySelector("p");
const btnSimple = document.querySelectorAll(".btn-simple");
const suppr = document.getElementById("delete");
const reset = document.getElementById("reset");
const egale = document.getElementById("egale");

btnSimple.forEach((btn) => {
    btn.addEventListener('click', () => {
        p.innerText += btn.innerText;
    });
});

suppr.addEventListener("click", () => {
    p.innerText = p.innerText.slice(0, -1);
});

egale.addEventListener("click", () => {
    
});
