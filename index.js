function dpCalc(){
    netDisb=parseInt(document.getElementById("netDisbursal").value)
    vmc=0
    rsa=0
    exWarr=0
    vehiclePrice=0
    stampCharges=0
    hp=0


    var modelS = document.getElementById("model");
    var model = modelS.value;
    console.log(model)
    console.log(typeof(model))
    var schemeS = document.getElementById("scheme");
    var scheme = schemeS.value;
    console.log(scheme)

    vmcT=document.getElementById("VMC").checked
    rsaT=document.getElementById("RSA").checked
    exWarrT=document.getElementById("EX Warr").checked


    if (model=="Magnus EX" & vmcT===true){
        vehiclePrice=93850
    }
    if (model=="Zeal EX" & vmcT===true){
        vehiclePrice=85300
    }
    if(model=="Primus" & vmcT===true){
        vehiclePrice=132900
    }
    if(model=="Magnus EX" & vmcT===false){
        vehiclePrice=92365
    }
    if(model=="Zeal EX" & vmcT===false){
        vehiclePrice=83897
    }
    if(model=="Primus" & vmcT===false){
        vehiclePrice=130956
    }
    if(rsaT===true){
        rsa=1071
    }
    if(exWarrT===true){
        exWarr=3658
    }
    if(scheme=="Low cost"){
       stampCharges=0
       hp=0 
    }
    if(scheme=="NO HP"){
        stampCharges=1500
        hp=0
    }
    if(scheme=="Regular"){
        stampCharges=1500
        hp=500
    }

    realVehiclePrice=vehiclePrice+vmc+rsa+exWarr+stampCharges+hp
    dp=realVehiclePrice-netDisb

    document.getElementById("downpayment").innerText= dp



    console.log(vmc)
    console.log(vehiclePrice)
    console.log(exWarr)








}