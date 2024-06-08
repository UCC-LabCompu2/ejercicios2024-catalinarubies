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
        unid_pulgada.value=(39.3701*valor);
        unid_pie.value=(3.28084*valor);
        unid_yarda.value=(1.09361*valor);
    }else if(id=="pulgada"){
        unid_metro.value = (0.0254*valor);
        unid_pie.value = (0.0833333*valor);
        unid_yarda.value = (0.0277778*valor);
    }else if(id=="pie"){
        unid_metro.value = (0,3048*valor);
        unid_pulgada.value = (12*valor);
        unid_yarda.value = (0.333333*valor);
    }else if(id=="yarda"){
        unid_metro.value = (0.9144*valor);
        unid_pulgada.value = (36*valor);
        unid_pie.value = (3*valor);
        
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