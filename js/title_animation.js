document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector(".name");
    let text = title.textContent;
    title.innerHTML = "";

    for (let i = 0; i < text.length; i++) {
        let span = document.createElement("span");
        span.textContent = text[i];
        title.appendChild(span);
    }
});
