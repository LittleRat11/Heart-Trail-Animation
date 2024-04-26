const body = document.querySelector("body");


body.addEventListener("mousemove", (event) => {
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    // !mouse move tine span tag twe create lote ng ag
    const spanEl = document.createElement("span");
    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yPosition + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    body.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});