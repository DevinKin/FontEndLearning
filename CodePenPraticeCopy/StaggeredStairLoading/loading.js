let loading = document.querySelector(".loading");
let letters = loading.textContent.split("");
loading.textContent = "";
letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i / 5}s`;
    console.log("i=" + i + ", (i /5)=" + (i /5));
    loading.append(span);
})