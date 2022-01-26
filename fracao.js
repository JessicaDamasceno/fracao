function fracao() {
  function desenhaNumerador(x, y, tamanho, cor) {
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho);
  }
  function desenhaDenominador(x, y, tamanho) {
    pincel.strokeStyle = "black";
    pincel.strokeRect(x, y, tamanho, tamanho);
  }
  function clearNum() {
    num1.focus();
    num1.value = " ";
    num2.value = " ";
  }
  function clearTela() {
    pincel.clearRect(0, 0, 600, 400);
  }
  function escreve(texto, x, y) {
    pincel.font = "20px Arial";
    pincel.fillText(texto, x, y);
  }

  let tela = document.querySelector("canvas");
  let pincel = tela.getContext("2d");
  let num1 = document.querySelector("input#x");
  let num2 = document.querySelector("input#y");
  let x2 = 0;
  clearTela();
  if (
    Number(num1.value) <= Number(num2.value) &&
    Number(num1.value) <= 12 &&
    Number(num2.value) <= 12
  ) {
    for (let i = 0; i < Number(num1.value) * 50; i += 50) {
      desenhaNumerador(0 + i, 50, 50, "green");
    }

    for (let j = 0; j < Number(num2.value) * 50; j += 50) {
      desenhaDenominador(0 + j, 50, 50, "green");
    }

    if (Number(num1.value) < 10) {
      //centralizar o num
      x = 5;
    } else {
      x = 0;
    }
    if (Number(num2.value) < 10) {
      x2 = 5;
    }
    escreve(Number(num1.value), x, 195);
    escreve("__", 0, 200);
    escreve(Number(num2.value), x2, 225);
    clearNum();
  } else {
    alert("Fração inválida!");
    clearNum();
  }
}
