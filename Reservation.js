var priceT=document.querySelector("#type");
var priceTR=document.querySelector("#transmission");
var priceF=document.querySelector("#fuel")
var Total=document.querySelector("#test");

document.querySelector("#btn").addEventListener("click", prices);
priceT.addEventListener("change",change1);

function change1()
{
    let valueT=priceT.options[priceT.selectedIndex].text;
    
    if(valueT=='Moto')
    {
        // Transmission non-existent, "Empty" Preselected.
        priceTR.disabled=true;
        document.getElementById("emptyTR").selected="selected";
        
        // Only "Electric"; Preselected.
        document.getElementById("electric").selected="selected";

        

        document.getElementById("emptyF").style.display="none";
        document.getElementById("electric").style.display="inline-block";
        document.getElementById("hybride").style.display="none";
        document.getElementById("essence").style.display="none";
        document.getElementById("diesel").style.display="none";
    }

    if(valueT=='Citadine')
    {
        // Transmission existent; Only "Manual"; Preselected.
        priceTR.disabled=false;
        document.getElementById("manual").selected="selected";

        document.getElementById("emptyTR").style.display="none";
        document.getElementById("manual").style.display="inline-block";
        document.getElementById("auto").style.display="none";


        // All Fuels exist.
        document.getElementById("electric").selected="selected";

        document.getElementById("emptyF").style.display="none";
        document.getElementById("electric").style.display="inline-block";
        document.getElementById("hybride").style.display="inline-block";
        document.getElementById("essence").style.display="inline-block";
        document.getElementById("diesel").style.display="inline-block";
    }

    if(valueT=='Compact')
    {
        // Transmission existent; Only "Manual"; Preselected.
        priceTR.disabled=false;
        document.getElementById("manual").selected="selected";

        document.getElementById("emptyTR").style.display="none";
        document.getElementById("manual").style.display="inline-block";
        document.getElementById("auto").style.display="none";


        // Only "Electric" is not available.
        document.getElementById("hybride").selected="selected";

        document.getElementById("emptyF").style.display="none";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybride").style.display="inline-block";
        document.getElementById("essence").style.display="inline-block";
        document.getElementById("diesel").style.display="inline-block";
    }

    if(valueT=='Berline')
    {
        // Transmission existent; Only "Auto"; Preselected.
        priceTR.disabled=false;
        document.getElementById("auto").selected="selected";

        document.getElementById("emptyTR").style.display="none";
        document.getElementById("manual").style.display="none";
        document.getElementById("auto").style.display="inline-block";


        // Only "Electric" is not available.
        document.getElementById("hybride").selected="selected";

        document.getElementById("emptyF").style.display="none";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybride").style.display="inline-block";
        document.getElementById("essence").style.display="inline-block";
        document.getElementById("diesel").style.display="inline-block";
    }

    if(valueT=='Utilitaire')
    {
        // Transmission existent; Only "Manual"; Preselected.
        priceTR.disabled=false;
        document.getElementById("manual").selected="selected";

        document.getElementById("emptyTR").style.display="none";
        document.getElementById("manual").style.display="inline-block";
        document.getElementById("auto").style.display="none";


        // Only "Diesel" is available.
        document.getElementById("diesel").selected="selected";

        document.getElementById("emptyF").style.display="none";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybride").style.display="none";
        document.getElementById("essence").style.display="none";
        document.getElementById("diesel").style.display="inline-block";
    }

    if(valueT=='Engine de chantier')
    {
        // Transmission existent; Only "Manual"; Preselected.
        priceTR.disabled=false;
        document.getElementById("manual").selected="selected";

        document.getElementById("emptyTR").style.display="none";
        document.getElementById("manual").style.display="inline-block";
        document.getElementById("auto").style.display="none";


        // Only "Diesel & Essence" is available.
        document.getElementById("essence").selected="selected";

        document.getElementById("emptyF").style.display="none";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybride").style.display="none";
        document.getElementById("essence").style.display="inline-block";
        document.getElementById("diesel").style.display="inline-block";
    }

    if(valueT=='Camion')
    {
        // Transmission existent; Only "Auto"; Preselected.
        priceTR.disabled=false;
        document.getElementById("auto").selected="selected";

        document.getElementById("emptyTR").style.display="none";
        document.getElementById("manual").style.display="none";
        document.getElementById("auto").style.display="inline-block";


        // Only "Diesel" is available.
        document.getElementById("essence").selected="selected";

        document.getElementById("emptyF").style.display="none";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybride").style.display="none";
        document.getElementById("essence").style.display="none";
        document.getElementById("diesel").style.display="inline-block";
    }

}



function prices()
{
 
var nbDay=document.getElementById('date').value;

var valueT=priceT.options[priceT.selectedIndex].value;
console.log(valueT);

var valueTR=priceTR.options[priceTR.selectedIndex].value;
console.log(valueTR);

var valueF=priceF.options[priceF.selectedIndex].value;
console.log(valueF);

console.log(nbDay);

var total = 0;

total+=nbDay*(parseFloat(valueT)*parseFloat(valueTR)*parseFloat(valueF));


var Data=document.querySelector("#data");
var Element1=document.createElement("span");
Element1.innerHTML=priceT.options[priceT.selectedIndex].text;
Element1.classList.add('type');
Element1.classList.add('flex');
Data.append(Element1);

var Data=document.querySelector("#data");
var Element2=document.createElement("span");
Element2.innerHTML=valueTR;
Element2.classList.add('transmission');
Element2.classList.add('flex');
Data.append(Element2);

var Data=document.querySelector("#data");
var Element3=document.createElement("span");
Element3.innerHTML=valueF;
Element3.classList.add('fuel');
Element3.classList.add('flex');
Data.append(Element3);

var Data=document.querySelector("#data");
var Element4=document.createElement("span");
Element4.innerHTML=nbDay;
Element4.classList.add('days');
Element4.classList.add('flex');
Data.append(Element4);

var Data=document.querySelector("#data");
var Element5=document.createElement("span");
Element5.innerHTML=parseFloat(total).toFixed(2);
Element5.classList.add('total');
Element5.classList.add('flex');
Data.append(Element5);
    
}


































// switch(text) 
    // {
    // case "Moto":
    // document.getElementById("test").innerHTML = 10;
    // break;

    // case "Citadine":
    // document.getElementById("test").innerHTML = 20;
    // break;

    // case "Compact":
    // document.getElementById("test").innerHTML = 10;
    // break;

    // case "Berline":
    // document.getElementById("test").innerHTML = 10;
    // break;

    // case "Utilitaire":
    // document.getElementById("test").innerHTML = 10;
    // break;

    // case "Engine de chantier":
    // document.getElementById("test").innerHTML = 10;
    // break;

    // case "Camion":
    // document.getElementById("test").innerHTML = 10;
    // break;



    // }