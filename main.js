// document.getElementById('switcher').addEventListener('click', (param1) => {
//     let dmbody = document.body.style;
//     let dmbutton = document.getElementById('switcher').style;
//     if(param1.target.value == "Off"){
//         param1.target.value = "On";
//         param1.target.textContent = "Dark";
//         dmbody.backgroundColor = "var(--darkbg-color)";
//         dmbody.color = "var(--darktxtcolor)";
//         dmbutton.backgroundColor = "var(--darkbg-color)";
//         dmbutton.color = "var(--darktxtcolor)";
//         dmbutton.setProperty("border", "1px solid #FFF");
//     } else {
//         param1.target.value = "Off";
//         param1.target.textContent = "Light";
//         dmbody.backgroundColor = "var(--lightbg-color)";
//         dmbody.color = "var(--lighttxtcolor)";
//         dmbutton.backgroundColor = "var(--lightbg-color)";
//         dmbutton.color = "var(--lighttxtcolor)";
//         dmbutton.setProperty("border", "1px solid #000");
//     }
// })

document.getElementById('switcher').addEventListener('click', (param1) => {
    let isDark = param1.target.value === "Off";
  
    document.body.classList.toggle('dark');
    param1.target.value = isDark ? "On" : "Off";
  })