/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
 * @return 
 */
const cambiarunidades = (id, valor) => {
    const {unid_metro, unid_pulgada, unid_pie, unid_yarda} = document.lasunidades;

    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        unid_metro.value="";
        unid_pulgada.value="";
        unid_pie.value="";
        unid_yarda.value="";
    }else if(id=="metro"){
        unid_pulgada.value=Math.round(39.3701*valor);
        unid_pie.value=Math.round(3.28084*valor);
        unid_yarda.value=Math.round(1.09361*valor);
    }else if(id=="pulgada"){
        unid_metro.value = Math.round(0.0254*valor);
        unid_pie.value = Math.round(0.0833333*valor);
        unid_yarda.value = Math.round(0.0277778*valor);
    }else if(id=="pie"){
        unid_metro.value = Math.round(0,3048*valor);
        unid_pulgada.value = Math.round(12*valor);
        unid_yarda.value = Math.round(0.333333*valor);
    }else if(id=="yarda"){
        unid_metro.value = Math.round(0.9144*valor);
        unid_pulgada.value = Math.round(36*valor);
        unid_pie.value = Math.round(3*valor);
        
    }


}

const convertirGR = id => {
    let grad, rad;
    const gradosInput = document.getElementById("grados");
    const radianesInput = document.getElementById("radianes");

    if(id=="grados"){
        grad = gradosInput.value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = radianesInput.value;
        grad = (rad*180)/Math.PI;
    }
    gradosInput= grad;
    radianesInput= rad;
}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularsuma(){
    var num1, num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);

    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;

}

function calcularresta(){
    var num1, num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);

    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;

}

function calcularmultiplicacion(){
    var num1, num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);

    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;

}

function calculardivision(){
    var num1, num2;
    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number(document.getElementsByName("div_num2")[0].value);

    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;

}

function cargarweb(){
    var cant, unidad, urlComp;
    cant = document.getElementById("distancia").value;
    unidad= document.getElementsByName("unidades")[0].value;
    urlComp="segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, can, un;
    urlComp = window.location.href.split("#");

    can = urlComp[1];
    un = urlComp[2];

    document.getElementById("dist").value = can + " " + un;
}

function guardarlocalstorage{
    let distancia, unidad;
    distancia = document.getElementById("distancia").value;
    unidad= document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open("2web.html");

}

function cargarRlocalstorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un= localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}