document.addEventListener("DOMContentLoaded", function () {
    const texto = "Middleware e Multer no Express.js";
    const destino = document.getElementById("typing-text");

    let index = 0;

    function digitar() {
      if (index < texto.length) {
        destino.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 70); // velocidade da digitação (ms)
      }
    }

    digitar();
  });