/** 
$( ".btn.btn-primary" ).click(function makeCharge() {
    
    let result=[];
    
    for (let i = 0; i < cell.length; i++) {
      
       
        return document.getElementsByClassName("cell")[i].style.backgroundColor = "#1ad809";
          
      }

  });

  */

  function charge() {
    
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "#1ad809";
      }

  }
  
$( ".btn.btn-primary" ).click(charge);