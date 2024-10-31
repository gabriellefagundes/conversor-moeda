document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();
 
    //Obter valores de entrada informados pelo usuário
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('from-currency').value;
    const paraMoeda = document.getElementById('to-currency').value;
 
    //Definir taxas de câmbio fixas
    const exchangeRates = {
        USD: { BRL: 5.76, EUR: 0.92 },
        BRL: { USD: 0.17, EUR: 0.16 },
        EUR: { USD: 1.09, BRL: 6.18 }
    };
 
    //Conversão simples de moedas
    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
    }
 
    const conversao = document.getElementById('result');
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda} `;
   
});