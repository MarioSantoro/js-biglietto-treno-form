let element = document.getElementById("sumbit");
let TicketCost;
element.addEventListener("click" , 
    function(){
        const AgeTraverel = parseInt(document.getElementById("floatingAge").value);
        const Km = parseInt(document.getElementById("floatingKm").value);
        TicketCost = Km * 0.233;
        if(AgeTraverel < 18){
            //applica sconto del 19.4% se è minorenne
            TicketCost= TicketCost - ((19.4 / 100) * TicketCost);
            document.getElementById("Sale").innerHTML = "Lo sconto applicato è di 19.4%"
        } else if(AgeTraverel >= 65){
            //applica sconto del 37.7% se è anziano
            TicketCost= TicketCost - ((37.7 / 100) * TicketCost);
            document.getElementById("Sale").innerHTML = "Lo sconto applicato è di 37.7%"
        } else{
            document.getElementById("Sale").innerHTML = "Non hai diritto a nessun tipo di sconto"
        }

        document.getElementById("Age-ticket").innerHTML = AgeTraverel;
        document.getElementById("km-ticket").innerHTML = Km + "Km";
        document.getElementById("Price").innerHTML = TicketCost.toFixed(2) + "€";
        console.log(TicketCost.toFixed(2));
    }
)

