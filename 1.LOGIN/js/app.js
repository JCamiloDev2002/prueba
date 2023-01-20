
//campos de formulario
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);
const form = document.querySelector(`#form`);
let captcha = document.querySelector('.g-recaptcha');

//objeto con informacion
const citaObj ={
    email:``,
    password:``,
}


//validar captcha
document.querySelector('.g-recaptcha').addEventListener("click", function(){
    this.setAttribute("name", "1");
  });

//registrar eventos con los inputs
eventListeners();
function eventListeners(){
    email.addEventListener(`change`,datosCita);
    password.addEventListener(`change`,datosCita);
    form.addEventListener(`submit`,validar);
}


//agrega datos al objeto
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

//validar informacon
function validar(e){
    e.preventDefault();
    //extraer la informacion del objeto
    const {email, password} = citaObj;
    if (captcha.getAttribute("name") === "0") {
        Swal.fire("Error", "Por favor verifica el captcha", "error");
      }else{
        if(email === `admin@admin.com` && password === `admin`){
            const showAlert = () =>{
                Swal.fire("Éxito", "Inicio de sesión correcto", "success");
                window.location.href = "/api.html";
            }
            showAlert();
        }else{
            const showAlert = () =>{
                Swal.fire("Error", "Correo o contraseña incorrectos", "error");
            }
            showAlert();
        }
      }

        

      }


