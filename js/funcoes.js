function abrirCalculadora() {
    document.getElementById('cortina').style.backgroundColor = "rgba(0,0,0,0.7)";
    document.getElementById('modal').style.marginTop = "80px";
}

function fecharCalculadora() {
    document.getElementById('cortina').style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById('modal').style.marginTop = "-500px";
}

function calcular() {
    var valor1 = parseFloat(document.getElementById('v1').value);
    var valor2 = parseFloat(document.getElementById('v2').value);
    var operacao = document.getElementById('operacao').value;

    var calculo;

    switch(operacao) {
        case "+":
            calculo = valor1 + valor2;
            break;
    }

    document.getElementById('resultado').innerHTML = "Resultado da compra = R$ " + calculo + ",00" ;
    document.getElementById('resultado').style.color="white";
    document.getElementById('v1').style.border="solid 0.5px #000";
    document.getElementById('v2').style.border="solid 0.5px #000";
}

function validar() {
    if (document.getElementById('v1').value == '' || document.getElementById('v2').value == ''){
        document.getElementById('resultado').style.color="red";
        if (document.getElementById('v1').value == '' && document.getElementById('v2').value == ''){
            document.getElementById('v1').style.border="solid 0.5px red";
            document.getElementById('v2').style.border="solid 0.5px red";
            document.getElementById('resultado').innerHTML = "Preencha o Valor 1 e o Valor 2";
        } else if (document.getElementById('v1').value == ''){
            document.getElementById('v1').style.border="solid 0.5px red";
            document.getElementById('resultado').innerHTML = "Se você quiser só um bolo, digite 0 no outro campo.";
            document.getElementById('v2').style.border="solid 0.5px #000";
        }else {
            document.getElementById('v2').style.border="solid 0.5px red";
            document.getElementById('resultado').innerHTML = "Se você quiser só um bolo, digite 0 no outro campo.";
            document.getElementById('v1').style.border="solid 0.5px #000";
        }
    } else {
        calcular();
    }
}

function validar2() {
  if (document.getElementById('nome').value=="" || document.getElementById('email').value=="" || document.getElementById('mmensagem').value=="") {
    window.alert("Preencha os campos!");
    document.getElementById('nome').style.color="black";
    document.getElementById('email').style.color="black";
    document.getElementById('mensagem').style.color="black";
    if (document.getElementById('nome').value=="" && document.getElementById('email').value=="" && document.getElementById('mensagem').value=="") {
      document.getElementById('nome').style.border="solid 1px red";
      document.getElementById('email').style.border="solid 1px red";
      document.getElementById('mensagem').style.border="solid 1px red";
    } else if (document.getElementById('nome').value=="") {
      document.getElementById('nome').style.border="solid 1px red";
    } else if (document.getElementById('email').value=="") {
      document.getElementById('email').style.border="solid 1px red";
    } else {
      document.getElementById('mensagem').style.border="solid 1px red";
    }
  } else {
    enviar();
  }
}

function enviar() {
  var nome=document.getElementById('nome').value;
  var email=document.getElementById('email').value;
  var mensagem=document.getElementById('mensagem').value;

  window.alert("Mensagem enviada com sucesso!");
}

function apagar() {
  if (document.getElementById('nome').value!="" || document.getElementById('email').value!="" || document.getElementById('mensagem').value!="") {
    document.getElementById('nome').value="";
    document.getElementById('email').value="";
    document.getElementById('mensagem').value="";
  }
}
