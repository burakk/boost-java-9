const formEl = document.getElementById("frm-calculator-101");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  /* prevent dafault olayın varsayılı davranışını engeller. Linklerin url'ye yönlenmesi, form datasının url parametreleri olarak gönderilmeye çalışılması gibi olayları engelleyebilirsiniz... */
  e.preventDefault();

  
  /* name attribute'u a olan input içinden değerini alan
  fonksiyonu çağırıyoruz */
  const aVal = getInputValue("a");
  /* name attribute'u b olan input içinden değerini alan
  fonksiyonu çağırıyoruz */
  const bVal = getInputValue("b");

  if (!checkVal(aVal) || !checkVal(bVal)) {
    alert("Girdi kutularını kontrol ediniz");
    return false;
  }

  messageToUser(addNums(aVal, bVal));
}

function getInputValue(name) {
  /*  string template literal backtick sembolleri ile --- örn: `Hello ${ 3 * 5 }`*/
  
  const input = document.querySelector(`[name=${name}]`);
  return input.value.trim(); // ""
}

function messageToUser(msgContent) {
  const msgBox = document.getElementById("msg-to-user");
  msgBox.textContent = msgContent;
}

function addNums(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function checkVal(val){

  if( val && !isNaN(val)){
    return true;
  }

  return false;

}
