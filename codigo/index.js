  // Adicionar Variáveis dos botão.
  // Trasnformar em Array os botões para ser  chamado na função 
   const botoes = Array.from(document.querySelectorAll(".botao"));
   const valores = Array.from(document.querySelectorAll(".texto"));
   
   const limpeza = document.getElementById("limpar");
   const valorAvulso = document.getElementById("op6");
   const painelP = document.getElementById("valorPessoas");
   const painelT = document.getElementById("valorTotal");
   const comanda = document.getElementById('bill');
   const pessoas = document.getElementById('pessoas');
   let valorSelecionado = null; // porcentagem
   
    // Eventos Gerais
    // Eventos dos botões
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {    
        botoes.forEach(b => {
            b.classList.remove("selecionado")
        });
        valorAvulso.value = "";
        botao.classList.add("selecionado")
        // Pegar o Valor
        valorSelecionado = parseInt(botao.textContent);
        if(comanda.value != 0 && pessoas.value >= 1){
        calculo();
        }
        });
    });
    // Botao Outro
   valorAvulso.addEventListener('click', () => {
       botoes.forEach(b => {
           b.classList.remove('selecionado');
       })
   });
   valorAvulso.addEventListener("input", () => {
   valorSelecionado = valorAvulso.value;
   if(comanda.value != 0 && pessoas.value >= 1){
   calculo()
   return};
         });
    // Ativar botao Reset
    valores.forEach(input => {
    addEventListener("input", () => {
        if (comanda.value != "") {
            limpeza.disabled = false;
        } else if (pessoas.value != "") {
            limpeza.disabled = false;
        } else if (valorSelecionado != ""){
            limpeza.disabled = false;
        }
    });
    });
   
    // Evento de calculos
    comanda.addEventListener("input", () => {
       if(pessoas.value >= 1 && valorSelecionado != ""){
           calculo()
       }
   });
   pessoas.addEventListener("input", () => {
       if(comanda.value != 0 && valorSelecionado != ""){
           calculo()
       }
   });
      // Formatar Input numérico

      // Função de Verificar Campos "Bill" e "Pessoas".
  function verificarCampo1() {
        const aviso = Array.from(document.querySelectorAll(".aviso"));
        if(comanda.value <= 0){
            comanda.style.outline = "red solid 2px";
            aviso[0].classList.remove("esconder");
        return
        }else {
        comanda.style.outline = "";
        aviso[0].classList.add("esconder");
    }
    };
    function verificarCampo2() {
        const aviso = Array.from(document.querySelectorAll(".aviso"));
        if(pessoas.value <= 0){
            pessoas.style.outline = "red solid 2px";
            aviso[1].classList.remove("esconder");
        } else {
            pessoas.style.outline = "";
            aviso[1].classList.add("esconder");
        }
    };
    function calculo() {
        painelT.innerText = "$ " + parseFloat(comanda.value * valorSelecionado / 100).toFixed(2);
        painelP.innerText = "$ " + parseFloat(comanda.value * valorSelecionado / 100 / pessoas.value).toFixed(2)
    }
    function limparPainel() {
    painelT.innerText = "$ 0.00";
    painelP.innerText = "$ 0.00";
    botoes.forEach(b => {
        b.classList.remove("selecionado");
        });
    valores.forEach(val => {
        val.value = ""
    });
    limpeza.disabled = true
    };
          
