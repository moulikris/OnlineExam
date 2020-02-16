var list = [],Alist = [];
var qno = 1;
var option;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
  } else {
    window.location.href = "Authentication.html";
  }
});


    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var ref = firebase.database().ref('Questions/');
    ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
       var childKey = childSnapshot.key;
       var childData = childSnapshot.val();
    
       list.push(childData);

        console.log(childData.q);
          
            var row = document.createElement("tr");

            var cell = document.createElement("td");
            var cellText = document.createTextNode(qno+".");
            cell.appendChild(cellText);
            row.appendChild(cell);
            tblBody.appendChild(row);

            qno++;

            var cell = document.createElement("td");
            var cellText = document.createTextNode(childData.q);
            cell.style.fontSize = "14pt";
            cell.style.fontStyle = "bold";
            cell.setAttribute("onclick","getId(this)");
            cell.appendChild(cellText);
            row.appendChild(cell);
            tblBody.appendChild(row);
    
            var cell = document.createElement("INPUT");
            var lbl = document.createElement('label');
            //lbl.setAttribute('for', 'chkIfSenior' + i);
            lbl.appendChild(document.createTextNode(childData.a));
            cell.type = "checkbox";
            cell.id = "option";
            cell.value = childData.a;
            value = childData.a;
            cell.setAttribute("onclick","getId(this,value)");
            row.appendChild(cell);
            row.appendChild(lbl);
            tblBody.appendChild(row);

            var cell = document.createElement("INPUT");
            var lbl = document.createElement('label');
            //lbl.setAttribute('for', 'chkIfSenior' + i);
            lbl.appendChild(document.createTextNode(childData.b));
            cell.type = "checkbox";
            cell.id = "option";
            cell.value = childData.b;
            value = childData.b;
            cell.setAttribute("onclick","getId(this,value)");
            row.appendChild(cell);
            row.appendChild(lbl);
            tblBody.appendChild(row);

            var cell = document.createElement("INPUT");
            var lbl = document.createElement('label');
            //lbl.setAttribute('for', 'chkIfSenior' + i);
            lbl.appendChild(document.createTextNode(childData.c));
            cell.type = "checkbox";
            cell.id = "option";
            cell.value = childData.c;
            value = childData.c;
            cell.setAttribute("onclick","getId(this,value)");
            row.appendChild(cell);
            row.appendChild(lbl);
            tblBody.appendChild(row);

            var cell = document.createElement("INPUT");
            var lbl = document.createElement('label');
            //lbl.setAttribute('for', 'chkIfSenior' + i);
            lbl.appendChild(document.createTextNode(childData.d));
            cell.type = "checkbox";
            cell.id = "option";
            cell.value = childData.d;
            value = childData.d;
            cell.setAttribute("onclick","getId(this,value)");
            row.appendChild(cell);
            row.appendChild(lbl);
            tblBody.appendChild(row);
            
             });

            tbl.appendChild(tblBody);
            body.appendChild(tbl);
            tbl.setAttribute("border", "1");
});
function  getId(element,user) {1
    /*alert("row" + element.closest('tr').rowIndex + 
    " -column" + element.closest('td').cellIndex);
  */
     var index =  element.closest('tr').rowIndex;
    
     if(element.checked == true) {
       Alist[index] = user;
     }
     else alert(element.innerHTML);
  }
  function submit() {
    var marks=0;
    for(var i=0;i<list.length;i++){
      if(list[i].ans == Alist[i]){
        marks++;
      }
    }
    document.getElementById("scorecard").innerHTML = "Your Score: "+marks+"/"+list.length;
  }