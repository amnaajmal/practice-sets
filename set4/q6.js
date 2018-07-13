function  checkTheNum(){
    let engNumb=parseInt (document.getElementById("english").value)
    let mathNumb=parseInt (document.getElementById("math").value)
    let compNumb=parseInt (document.getElementById("computer").value)

    if(engNumb >= 10 && mathNumb >= 20 && compNumb >= 50){
         console.log("passed")

    }
    else{
        console.log ("Fail")
    }
       }