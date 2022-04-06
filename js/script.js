//Animação plugin
new SimpleAnime();

//tooltip skills
function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip] img");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("alt");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}

initTooltip();

//Scroll reveal no botao gotop
function initMostrarGotop() {
  function mostrarGotop() {
    const btntop = document.querySelector(".gotop");
    const distanciaScroll = window.innerHeight * 0.6;

    if (window.scrollY > distanciaScroll) {
      btntop.classList.add("ativo");
    } else {
      btntop.classList.remove("ativo");
    }
  }

  window.addEventListener("scroll", mostrarGotop);
}
initMostrarGotop();
