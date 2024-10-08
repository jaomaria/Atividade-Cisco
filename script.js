function calcular(){
    const K = 8.9875 * Math.pow(10, 9);
    const Q1 = parseFloat(document.getElementById('Q1').value);
    const Q2= parseFloat(document.getElementById('Q2').value);
    const D2 = parseFloat(document.getElementById('D2').value);


    const forca = K * Math.abs(Q1 * Q2) / Math.pow(D2, 2);
    document.getElementById('resultado').innerText = forca.toExponential(2);


}

function calcular2(){
    const Q = parseFloat(document.getElementById('Q').value);
    const v= parseFloat(document.getElementById('v').value);
    const B = parseFloat(document.getElementById('B').value);
    const Seno = parseFloat(document.getElementById('Seno').value);


    const magnetico = (Q * v * B * Seno);
    document.getElementById('resultado2').innerText = magnetico.toExponential(2);


}