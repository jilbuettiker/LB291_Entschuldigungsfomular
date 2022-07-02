let isError,errorLabel, errorMessage, username, password1, password2, form;

const minPasswordLength = 12;
const minUsernameLength = 3;

errorLabel = document.querySelector(".error");
errorLabel.style.display = "none";

form = document.querySelector("form");

onSubmit = function(event){
    event.preventDefault();
    isError = false;
    errorMessage = "";

    username = document.querySelector("input[type='text']").value;
    password1 = document.querySelector(".password1").value;
    password2 = document.querySelector(".password2").value;
    
    if(username.length < minUsernameLength ){
        isError = true;
        errorMessage = "<p>Der Benutzername muss mindestes drei Buchstaben enthalten.</p>";
    }

    if(password1.length < minPasswordLength ){
        isError = true;
        errorMessage += "<p>Das Passwort ist zu kurz. Bitte wähle ein Passwort, dass mindestes zwölf Buchstaben enthalten.</p>"; 
    }

    if(password1 != password2){
        isError = true;
        errorMessage += "<p>Die beiden Passwörter müssen identisch sein</p>" 
    }
    errorLabel.innerHTML = errorMessage;

    if(isError){
        errorLabel.style.display ="block";
    }else{
        errorLabel.style.display ="none";    
    }
}
form.addEventListener("submit",onSubmit);

