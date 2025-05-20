// 背景色を変更する機能
document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = ["#f4f4f4", "#e0e0e0", "#c0c0c0", "#b0b0b0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
