const labels = document.querySelector(".form-control label");

labels.forEach((label) => {
  labels.innerHTML = label.innerText
    .split(" ")
    .map(
      (letter, idx) =>
        `<span style ="transition-delay:${idx * 30}ms">${letter}</span>`
    )
    .join(" ");
});
