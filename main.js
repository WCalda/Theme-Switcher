document.getElementById('switcher').addEventListener('click', (param1) => {
    if(param1.target.value == "Off"){
        param1.target.value = "On";
        document.body.style.backgroundColor = "var(--darkbg-color)";
        document.body.style.color = "var(--darktxtcolor)";
    } else {
        param1.target.value = "Off";
        document.body.style.backgroundColor = "var(--lightbg-color)";
        document.body.style.color = "var(--lighttxtcolor)";
    }
})