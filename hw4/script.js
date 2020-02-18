window.onload = jsTable;
//create new 4x4 table and node 
function jsTable(){
    var body1 = document.body;
    var nodeTable = document.createElement('table');
    nodeTable.setAttribute("id", "myTable"); //set attribute id to mytable

		var tr = nodeTable.insertRow(); //insert header row
    	for(var i=0;i<4;i++){
        var headercell=document.createElement("TH");
        headercell.appendChild(document.createTextNode("Header "+(i+1)))
        headercell.style.border = '1px solid black';
        tr.appendChild(headercell);
    }
    
   // insert cells under header
   for(var i = 0; i < 3; i++){
        var tr = nodeTable.insertRow();
        for(var j = 0; j < 4; j++){
            var td = tr.insertCell();
            td.appendChild(document.createTextNode((i+1)+','+(j+1)));//cells labeled 1,1 etc..
            td.style.border = '1px solid black';
        }
    }
   
    //highlight cell 1,1 
    body1.appendChild(nodeTable);
    var table = document.getElementById("myTable");
    var rowIndex = 1;
    var columnIndex = 0;
    table.rows[rowIndex].cells[columnIndex].style.border='2px solid black';
    
    //create new up button
    var buttonElement = document.createElement("input");
    buttonElement.type = "button";
    buttonElement.value = "Up";
    buttonElement.onclick = function(){
        var current = table.rows[rowIndex].cells[columnIndex];
        if(rowIndex == 1){
           current = current; //if already at top row stay there
        }
        else{
           table.rows[rowIndex].cells[columnIndex].style.border='1px solid black';
           rowIndex --;
           current = table.rows[rowIndex].cells[columnIndex];
           current.style.border ='2px solid black';
        }
    };
    
    body1.appendChild(buttonElement);
    
    //Down button
    var buttonElement = document.createElement("input");
    buttonElement.type = "button";
    buttonElement.value = "Down";
    buttonElement.name = "Down";
    buttonElement.onclick = function() {
       var current = table.rows[rowIndex].cells[columnIndex];
       if(rowIndex == 3){
           current = current;
       }
       else{
            table.rows[rowIndex].cells[columnIndex].style.border ='1px solid black';
            rowIndex ++; 
            current = table.rows[rowIndex].cells[columnIndex];
            current.style.border ='2px solid black';
        }
    };
    body1.appendChild(buttonElement);

	//Left button
   var buttonElement = document.createElement("input");
   buttonElement.type = "button";
   buttonElement.value = "Left";
   buttonElement.name = "Left";
   buttonElement.onclick = function() {
        var current = table.rows[rowIndex].cells[columnIndex];
       if(columnIndex == 0){
           current = current;
        }
        else{
           table.rows[rowIndex].cells[columnIndex].style.border='1px solid black';
           columnIndex --;
           current = table.rows[rowIndex].cells[columnIndex];
           current.style.border ='2px solid black';
        }
    };
   body1.appendChild(buttonElement);

    //Right button
    var buttonElement = document.createElement("input");
    buttonElement.type = "button";
    buttonElement.value = "Right";
    buttonElement.name = "Right";

    buttonElement.onclick = function() {
        var current = table.rows[rowIndex].cells[columnIndex];
       if(columnIndex == 3){
           current = current;
        }
        else{
           table.rows[rowIndex].cells[columnIndex].style.border ='1px solid black';
           columnIndex ++;
           current = table.rows[rowIndex].cells[columnIndex];
           current.style.border ='2px solid black';
        }
    };
    body1.appendChild(buttonElement);

var buttonElement = document.createElement("input");
    buttonElement.type = "button";
    buttonElement.value = "Markcell";
    buttonElement.name = "Markcell";
    buttonElement.onclick = function() {
        table.rows[rowIndex].cells[columnIndex].style.backgroundColor= 'yellow';
   };
   body1.appendChild(buttonElement);
}
