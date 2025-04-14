const btn = document.querySelector("#button");


const h1 = document.querySelector("#myH1");
const h2 = document.querySelector("#myH2");

//click event executed
btn.addEventListener('click', function () {
    h1.textContent = "Onlclick Event is executed";
});

//ondblclick event executed
btn.addEventListener('dblclick', () => {
    h1.textContent = "dbclick event executed";
})

//mouseup

btn.addEventListener("mouseup", () => {
    h2.textContent = "mouse-up event executed";
});

//moussedown
btn.addEventListener("mousedown", () => {
    h2.textContent = "mouse-down event executed";
});


//mouseover
btn.addEventListener("mouseover", () => {
    h1.textContent = "hover";
})

//mouseout
btn.addEventListener("mouseout", () => {
    h1.textContent = "mouse out";
})

