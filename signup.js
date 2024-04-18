let signUpLink = document.getElementById("signUpLink");
let signInLink = document.getElementById("signInLink");
let signInBtn  = document.getElementById("signIn")
let noAccount = document.getElementById("noAccount")
let account = document.getElementById("account")
let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let symbol = document.getElementById("symbol");
let form1 = document.getElementById("form");
let formcontainer = document.getElementById("formcontainer");

// signUpLink.addEventListener("click", () => {
//   account.style.display = "block";
//   noAccount.style.display = "none";
//   title.innerHTML = "Sign Up";
//   nameField.style.display = "block";
//   symbol.style.marginLeft = "-30px";
//   form1.style.marginTop = "-30px";
//   nameField.style.margin = "25px 0";
//   signInBtn.innerHTML ="Sign Up";
//   formcontainer.style.height = "65vh";
// })

// signInLink.onclick = () =>{
//   //location.reload()
//   account.style.display = "none";
//   noAccount.style.display = "block";
//   title.innerHTML = "Sign In";
//   nameField.style.display = "none";
//   signInBtn.innerHTML ="Sign In";
//   formcontainer.style.height = "61vh";
  
// }

// signInBtn.onclick = () =>{
//   var name = document.getElementById("name");
//   var password = document.getElementById("password")
//   var role = document.getElementsByName("role");
//   for(var i = 0; i < role.length; i++){
//     if(role[i].checked){
//       var value = role[i].value;
//     }
//   }
//   if ((value == "coworker") && (password.value.length > 4)){
//     var link = document.getElementById("link");
//     link.setAttribute('href', '/coworker')
//   }
//   if ((value == "owner") && (password.value.length > 4)){
//     var link = document.getElementById("link");
//     link.setAttribute('href', '/headpage')
//   }
// }
window.onload = ()=>{
  resetRadio();
}



const form = document.querySelector('form');
const emailError = document.querySelector('.email.error');
const passwordError = document.querySelector('.password.error');

signInBtn.addEventListener('click', async (e)=>{
    e.preventDefault(); // prevent default action of page refreshing
    
    // reset errors
    emailError.textContent = '';
    passwordError.textContent = '';

    var names = document.getElementById("name");
    var emails = document.getElementById("email")
    var passwords = document.getElementById("password")
    var roles = document.getElementsByName("role");
    for(var i = 0; i < roles.length; i++){
      if(roles[i].checked){
        var value = roles[i].value;
      }
    }



    // get the values
    const name = names.value;
    const email = emails.value;
    const password = passwords.value;
    const role = value;
    //console.log(name)
    try {
        const res =  await fetch('http://localhost:7000/signup', {
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, password: password, role: role }),
            headers: { 'Content-type': 'application/json; charset=UTF-8',
          }
        });
        const data = await res.json();
        console.log(data);
        if(data.errors){
            emailError.textContent = data.errors.email;
            passwordError.textContent = data.errors.password;
        }
        if(data.user){
            location.assign('/');

        }
    }
    catch (err){
        console.log(err);
    }
})





function resetRadio(){
  var radioBtn = document.getElementsByName("role");
  for(var i = 0; i < radioBtn.length; i++){

      radioBtn[i].checked = false;

  }

}