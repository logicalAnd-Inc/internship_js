
document.getElementById('calculateButton').addEventListener('click',function() {
            

  var hundreds = document.getElementById('hundreds').value || 0;
  var tens = document.getElementById('tens').value || 0;
  var ones = document.getElementById('ones').value || 0;
  var tenths = document.getElementById('tenths').value ||0;
  
  //if (hundreds === "" || tens === "" || ones === "" || tenths === "") {
  //  document.getElementById('result').textContent = "";
  //  return;
  //}             

  hundreds = parseInt(hundreds);
  tens = parseInt(tens);
  ones = parseInt(ones);
  tenths = parseInt(tenths) / 10;
  
  var totalNumber = (hundreds * 100) + (tens * 10) + ones + tenths;
  var result = 63400 / totalNumber;
  var resultText = result %  1               

  if (totalNumber === 0) {
    document.getElementById('result').textContent = "∞";
    return;
  }
  
  if (totalNumber > 999.9) {
    document.getElementById('result').textContent = "0~9までの値を入力してください";
    return;
  }

  if (result < 0) { 
    document.getElementById('result').textContent ="正数のみ入力してください";
    return;
  }              
  

  if (resultText === 0) { 
    document.getElementById('result').textContent = "スカイツリーはあなたの身長" +result.toFixed(0) + "人分";
    return;
  }
  document.getElementById('result').textContent = "スカイツリーはあなたの身長" +result.toFixed(1) + "人分";
  
});           