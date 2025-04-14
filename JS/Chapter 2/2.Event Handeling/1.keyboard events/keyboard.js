
const p1 = document.querySelector("#para1");

const p2 = document.querySelector("#para2");
const inputbox = document.querySelector("#inputbox");

//KEYDOWN
inputbox.addEventListener("keydown", (e) => {
    p1.innerText += e.key;
});

//Keyup event
inputbox.addEventListener("keyup", (e) => {
    p2.innerText += e.key;
});
