class interval {

    constructor(ChargeTime,DechargeTime) { 
        this.ChargeTime = document.getElementById("exampleInputEmail1").value;
        this.DechargeTime = document.getElementById("exampleInputEmail2").value;
        this.setTimeForCharge();
    }
    
    setTimeForCharge() {
        this.charge.click(() => { this.setTime(document.getElementById("exampleInputEmail2").value); });
        this.decharge.click(() => {  this.setTime(); });
    }

    setTime() {
        // $('.cell').css('background', color)
    }
}

new interval();

function myFunction() {
    setTimeout(function(){ alert("Hello"); }, 5000);
  }