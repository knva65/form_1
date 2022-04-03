
 function func() {
var textname = document.getElementById("text_name_1").value;
if(document.getElementById("text_name").value === '' || document.getElementById("text_name_1").value === '') {alert ("Заполните все поля!!"); }
else {alert ('Добро пожаловать на сайт, ' + textname + ' !')};}

