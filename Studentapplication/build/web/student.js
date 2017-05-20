/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var first;
var last;
var dob;
var all = [];

function update() {
    var user = new Object();
    user.first = first;
    user.last = last;
    user.dob = dob;
    all.push(user);
   
};
  
function student(){
    alert("hi");
    
  //var a = {f,l,d};
  first = document.getElementById("firstName").value;
  
  // first = document.getElementById("first").value;
  last = document.getElementById("lastName").value;
 
dob = document.getElementById("dobirth").value;
update();
hidetable();
updatetable();

//alert(a);
// console.log(a);

//alert(f);
//document.getElementById("demo").innerHTML = f + l + d; 
  //window.location = 'index.html';
  
 // document.getElementById("display").innerHTML = f + l + d; 
}


function showtable(){
  
   var info = document.getElementById("information");
   info.style.display = 'block';
    
}

function hidetable(){
    
    document.getElementById("information").style.display = 'none';
}


function updatetable(){
    
  var last = all.length-1;
  var table = document.getElementById("table");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = all[last].first;
        cell2.innerHTML = all[last].last;
        cell3.innerHTML = all[last].dob;
    
};


//window.onload = function(){
//    
//    
//    document.getElementById("submit").onclick = student;
//    document.getElementById("first").focus();
//    document.getElementById("last").focus();
//    document.getElementById("dob").focus;
//    
//};