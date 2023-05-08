document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
event.preventDefault();
  let el = document.getElementById('main-form');

  let name = el.name.value;
  let pass = el.pass.value;
  let repass = el.repass.value;
  let state = el.state.value;

  let error = "";

  if (name == "" || pass == "" || state =="")
    error = "Заповніть всі поля";
  else if (name.letngh <= 1 || name.letngh > 50)
    error = "Введіть правильне ім'я";
  else if (pass != repass)
    error = "Паролі не співпадають";
  else if(pass.split("&").letngh > 1)
    error = "Невірний пароль";

    if(error != "")
      document.getElementById('fail').innerHTML = error;

    else {
      alert("Дані заповнені вірно");
      window.location = 'https:translate.google.com';
      
    }
  
  }

// time 27:23