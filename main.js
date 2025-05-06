function calculate() {
  var math = parseInt(document.getElementById('math').value);
  var science = parseInt(document.getElementById('science').value);
  var english = parseInt(document.getElementById('english').value);

 
  var average = parseInt(math+science+english)/3;


  var result = average.toFixed(2);
    if (result >= 94 && result <= 100) {
        window.alert("Excellent " +  result);
    } 
    else if (result >= 87 && result <= 93.99) {
        window.alert("Above Satisfactory " + result);
    } 
    else if (result >= 80 && result <= 86.99) {
        window.alert("Satisfactory " + result);
    }
    else if (result >= 75 && result <= 79.99) {
        window.alert("Needs Improvement " + result);
    } 
    else {
        window.alert("Poor " + result);
    }
}