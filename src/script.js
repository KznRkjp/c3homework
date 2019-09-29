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
  checkCookie();
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
    var date = new Date();
    date.setTime(date.getTime() + Number(hours) * 3600 * 1000);
    var cookie = encodeURIComponent(cookiename) + "=" + encodeURIComponent(cookievalue) + "; expires = " + date.toGMTString();
    console.log(cookie)
    document.cookie = cookie;
}



function checkCookie() {
  var arr = JSON.parse(getCookie("checkboxcookie"));
  if (arr.length > 0){
    document.querySelectorAll('[class=checkbox]').forEach(element=>{
      element.disabled = true;
    });
  };
  document.querySelectorAll('[class=checkbox]').forEach(element=>{
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element.id) {
            element.checked = true;
        };
      };
});
};

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

function rstCheckbox(){
  document.querySelectorAll('[class=checkbox]').forEach(element=>{
    element.checked = false;
    element.disabled = false;
  });
};
