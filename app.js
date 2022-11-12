
function calc(){

    // abaixo as variáveis que vão associar ao valor inserido
    var base = parseInt(document.querySelector("#base").value);
    var prev = parseInt(document.querySelector("#prev").value);
    var pern = parseInt(document.querySelector("#pern").value);
    var sab = parseInt(document.querySelector("#sab").value);
    var alim = parseInt(document.querySelector("#alim").value);
    var prevfds = parseInt(document.querySelector("#prevfds").value);

    textoDescritivo = "Salário líquido final de: ";
    euros = " €";
    calculoDesc = (0.23 * alim);
    baseFinal = base + calculoDesc;

    // cálculos de "extras" no ordenado
    calculoSeg = (base / 100) * 11;
    calcularPrev = parseInt(prev * 25);
    calcularPern = parseInt(pern * 40);
    calcularSab = parseInt(sab * 50);
    calcularAlim = parseFloat(alim * 4.77);
    calcularPrevFds = parseInt(prevfds * 20);
    calcularPrev = 0;
    calcularPern = 0;
    calcularSab = 0;
    calcularAlim = 0;
    calcularPrevFds = 0;
    
    // cálculo do base com os descontos relativos ao imposto e IRS (tabela de trabalhador dependente sem descendentes)
   
    if (base < 822.1){
        calculoImp = parseInt((base / 100) * 7.9);
        baseFinal = parseFloat(base - calculoSeg - calculoImp).toFixed(2);
    } else if (base < 931.1){
        calculoImp = parseInt((base / 100) * 10.1);
        baseFinal = parseFloat(base - calculoSeg - calculoImp).toFixed(2);
    } else if (base < 1015.1){
        calculoImp = parseInt((base / 100) * 11.3);
        baseFinal = parseFloat(base - calculoSeg - calculoImp).toFixed(2);
    } else if (base < 1075.1){
        calculoImp = parseInt((base / 100) * 12.1);
        baseFinal = parseFloat(base - calculoSeg - calculoImp).toFixed(2);
    } else if (base < 1154.1){
        calculoImp = parseInt((base / 100) * 13.1);
        baseFinal = parseFloat(base - calculoSeg - calculoImp).toFixed(2);
    } else if (base < 1237.1){
        calculoImp = parseInt((base / 100) * 14.1);
        baseFinal = parseFloat(base - calculoSeg - calculoImp).toFixed(2);
    }

    // Mudança do ordenado base para inteiro
    baseFinal = parseFloat(baseFinal);

    resultado = baseFinal + calcularAlim + calcularPern + calcularPrev + calcularSab + calcularPrevFds;
    
    // Resultado aproximado por causa do inteiro no baseFinal (margem 1€)
    document.querySelector("#result").innerHTML = textoDescritivo + resultado + euros;
    }
