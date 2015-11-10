window.onload = function(){
    resultado = document.getElementById("resultado");
    numero = document.getElementById("numero1");
    submit = document.getElementById("submit");

    submit.addEventListener("click", function(){
        resultado.innerHTML = decenas(numero.value);
    });
}

function unidades(n){
    if(n==1) return "uno";
    else if(n==2) return "dos";
    else if(n==3) return "tres";
    else if(n==4) return "cuatro";
    else if(n==5) return "cinco";
    else if(n==6) return "seis";
    else if(n==7) return "siete";
    else if(n==8) return "ocho";
    else if(n==9) return "nueve";
    else return "";
}
function decenas(n){
    var txt = "";
    if(n=="" || n<0 || n>99)
        return "Introduce un número entre 0 y 99";
    else{
        if(n<10){
            if(n==0)
                txt="cero";
            else
                txt=unidades(n);
        }else if(n>=10 && n<=15){
            if(n==10) txt = "diez";
            else if(n==11) txt = "once";
            else if(n==12) txt = "doce";
            else if(n==13) txt = "trece";
            else if(n==14) txt = "catorce";
            else if(n==15) txt = "quince";
        }else if(n>=16 && n<=19){
            txt = "dieci";
            txt+=unidades(n[1]);
        }else if (n>=20 && n<=29) {
            if(n==20) 
                txt = "veinte";
            else{
                txt = "veinti";
                txt+=unidades(n[1]);
            }
        }else if(n>=30 && n<=39){
            txt="treinta"
            if(n>30)
                txt+=" y "+unidades(n[1]);
        }else if(n>=40 && n<=49){
            txt="cuarenta"
            if(n>40)
                txt+=" y "+unidades(n[1]);
        }else if(n>=50 && n<=59){
            txt="cincuenta"
            if(n>50)
                txt+=" y "+unidades(n[1]);
        }else if(n>=60 && n<=69){
            txt="sesenta"
            if(n>60)
                txt+=" y "+unidades(n[1]);
        }else if(n>=70 && n<=79){
            txt="setenta"
            if(n>70)
                txt+=" y "+unidades(n[1]);
        }else if(n>=80 && n<=89){
            txt="ochenta"
            if(n>80)
                txt+=" y "+unidades(n[1]);
        }else if(n>=90 && n<=99){
            txt="noventa"
            if(n>90)
                txt+=" y "+unidades(n[1]);
        }

    txt=txt[0].toUpperCase()+txt.substr(1);
    return txt+".";
    }
    
}