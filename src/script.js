function saveCity(cityname){
  localStorage.setItem('city', city.value)
  console.log(city.value)
  hideForm();
};

function changeCity(){
  localStorage.removeItem('city')
  document.querySelectorAll('[class=nocity]').forEach(element=>
  element.style.display= "inline");
  document.querySelectorAll('[id=yescity]').forEach(element=>
  element.style.display= "none");
};

function hideForm(){
  document.querySelectorAll('[class=nocity]').forEach(element=>
  element.style.display= "none");
  document.querySelectorAll('[id=yescity]').forEach(element=>
  element.style.display= "inline");
  var element = document.getElementById("yescity");
  element.innerHTML = 'Ваш город — ' + localStorage.getItem('city');
};

function init(){
  console.log("page loaded")
  if (localStorage.getItem('city') == null) {
    console.log("no city stored");
  } else{
    hideForm();
  }
};

function checkboxToArray(){
    var arr= new Array();
    document.querySelectorAll('[class=checkbox]').forEach(element=>{
        var x = document.getElementById(element.id).checked;
        if (x == true) {
          arr.push(element.id);
        };
      });
    return arr;
};

function storeCookie(){
  var arr = checkboxToArray()
  var json_str = JSON.stringify(arr);
  createCookie('checkboxcookie', json_str, 3600);

}

function createCookie(cookiename, cookievalue, hours) {
    document.cookie = "user=Max; max-age=3500";
    document.cookie = "\"" + encodeURIComponent(cookiename)+ "=" + encodeURIComponent(cookievalue)+"; max-age=0";
    var date = new Date();
    date.setTime(date.getTime() + Number(hours) * 3600 * 1000);
    var cookie = encodeURIComponent(cookiename) + "=" + encodeURIComponent(cookievalue) + "; expires = " + date.toGMTString();
    //var cookie = "\"" + encodeURIComponent(cookiename) + "=" + encodeURIComponent(cookievalue) + "; expires = " + date.toGMTString() + "; path=/\"";
    console.log(cookie)
    document.cookie = cookie;

    console.log(document.cookie.split(';'));


}



function checkCookie() {
  var user = getCookie("checkboxcookie");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
