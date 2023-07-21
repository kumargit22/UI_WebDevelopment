function Sub(){
    var n, k, r, e, v, sum, avg;
    n=(document.getElementById('Name').value);
    english=parseFloat(document.getElementById('English').value);
    telugu=parseFloat(document.getElementById('Telugu').value);
    hindi=parseFloat(document.getElementById('Hindi').value);
    science=parseFloat(document.getElementById('Science').value);
    maths=parseFloat(document.getElementById('Maths').value);
    social=parseFloat(document.getElementById('Social').value);
    // Calculating the Total Marks
    sum=english+telugu+hindi+science+maths+social;
    avg=sum/6;
    // Displaying the Student Data
    var newTable = document.getElementById('TableScore');
    var row = newTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(0);
    var cell4 = row.insertCell(0);
    cell4.innerHTML= n;
    cell3.innerHTML=sum;
    cell2.innerHTML = avg;
    if(avg>=33){
       cell1.innerHTML="<font color=green>Pass</font>";
    } else {
       cell1.innerHTML="<font color=red>Fail</font>";
    }
 }