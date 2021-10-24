// this code will be executed when the extension's button is clicked
(function () {
  let content = document.querySelector(".contenidoZT");
  if (typeof content === "undefined") {
    alert("No fue posible encontrar el contenido para imprimir.");
    return;
  }
  html2canvas(document.querySelector(".contenidoZT")).then((canvas) => {
    const link = document.createElement("a");
    link.download =
      document.querySelector("#info-usuario").querySelector("h2").innerText +
      ".png";
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });
})();
