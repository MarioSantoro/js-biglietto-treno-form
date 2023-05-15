let element = document.getElementById("sumbit");
let TicketCost;
element.addEventListener("click" , 
    function(){
        const AgeTraverel = parseInt(document.getElementById("Age").value);
        const Km = parseInt(document.getElementById("Km").value);
        TicketCost = Km * 0.233;
        if(AgeTraverel < 18){
            //applica sconto del 19.4% se è minorenne
            TicketCost= TicketCost - ((19.4 / 100) * TicketCost)
        } else if(AgeTraverel >= 65){
            //applica sconto del 37.7% se è anziano
            TicketCost= TicketCost - ((37.7 / 100) * TicketCost)
        }
        console.log(TicketCost.toFixed(2))
    }
)

