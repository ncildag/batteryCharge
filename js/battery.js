class Battery {

    constructor(Charge,Decharge,ChargeTime,DechargeTime) {
        this.charge = $('.charge');
        this.decharge = $('.decharge');
        this.ChargeTime = document.getElementById("exampleInputEmail1").value;
        this.DechargeTime = document.getElementById("exampleInputEmail2").value;
        this.setListeners();
    }

    setListeners() {
        this.charge.click(() => {
            this.setColor('green');
        });
        this.decharge.click(() => {
            this.setColor('white');
        });
    }

    setColor(color) {
        $('.cell').css('background', color)
    }



}



setTimeout(() => {new Battery();
    
}, (document.getElementById("exampleInputEmail1").value)*1000);