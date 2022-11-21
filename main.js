document.getElementById('switcher').addEventListener('click', (param1) => {
    if(param1.target.value == "Off"){
        param1.target.value = "On";
        param1.target.textContent = "Dark";
        document.body.style.backgroundColor = "var(--darkbg-color)";
        document.body.style.color = "var(--darktxtcolor)";
        document.getElementById('switcher').style.backgroundColor = "var(--darkbg-color)";
        document.getElementById('switcher').style.color = "var(--darktxtcolor)";
        document.getElementById('switcher').style.setProperty("border", "1px solid #FFF");
    } else {
        param1.target.value = "Off";
        param1.target.textContent = "Light";
        document.body.style.backgroundColor = "var(--lightbg-color)";
        document.body.style.color = "var(--lighttxtcolor)";
        document.getElementById('switcher').style.backgroundColor = "var(--lightbg-color)";
        document.getElementById('switcher').style.color = "var(--lighttxtcolor)";
        document.getElementById('switcher').style.setProperty("border", "1px solid #000");
    }
})