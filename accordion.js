const accordionButtons = document.querySelectorAll(".my-accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    button.classList.toggle("my-accordion-button-active");
    if (button.classList.contains("my-accordion-button-active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
    accordionButtons.forEach((item) => {
      if (
        button.firstElementChild.innerText !== item.firstElementChild.innerText
      ) {
        item.classList.remove("my-accordion-button-active");
        item.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});

window.addEventListener("resize", handleResize);

function handleResize() {
  accordionButtons.forEach((button) => {
    if (button.classList.contains("my-accordion-button-active")) {
      button.nextElementSibling.style.maxHeight =
        button.nextElementSibling.scrollHeight + "px";
    }
  });
}
