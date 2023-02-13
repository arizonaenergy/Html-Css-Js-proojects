const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  labels.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => {
      return `<span style ="transition-delay:${idx * 30}ms">${letter}</span>`;
    })
    .join("");

  console.log(labels);
});
