let signUpLink = document.getElementById("signUpLink");
let signInLink = document.getElementById("signInLink");
let signInBtn  = document.getElementById("signIn")
let noAccount = document.getElementById("noAccount")
let account = document.getElementById("account")
let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let symbol = document.getElementById("symbol");
let form = document.getElementById("form");
let formcontainer = document.getElementById("formcontainer");

signUpLink.addEventListener("click", () => {
  account.style.display = "block";
  noAccount.style.display = "none";
  title.innerHTML = "Sign Up";
  nameField.style.display = "block";
  symbol.style.marginLeft = "-30px";
  form.style.marginTop = "-30px";
  nameField.style.margin = "25px 0";
  signInBtn.innerHTML ="Sign Up";
  formcontainer.style.height = "65vh";
  register();
})

signInLink.onclick = () =>{
  //location.reload()
  account.style.display = "none";
  noAccount.style.display = "block";
  title.innerHTML = "Sign In";
  nameField.style.display = "none";
  signInBtn.innerHTML ="Sign In";
  formcontainer.style.height = "61vh";
  
}

signInBtn.onclick = () =>{
  var name = document.getElementById("name");
  var password = document.getElementById("password")
  var role = document.getElementsByName("role");
  for(var i = 0; i < role.length; i++){
    if(role[i].checked){
      var value = role[i].value;
    }
  }
  if ((value == "coworker") && (password.value.length > 4)){
    var link = document.getElementById("link");
    link.setAttribute('href', 'coworker.html')
  }
  if ((value == "owner") && (password.value.length > 4)){
    var link = document.getElementById("link");
    link.setAttribute('href', 'headpage.html')
  }

  login();
}
window.onload = ()=>{
  resetRadio();
}

function resetRadio(){
  var radioBtn = document.getElementsByName("role");
  for(var i = 0; i < radioBtn.length; i++){

      radioBtn[i].checked = false;

  }

}



//connect backend to frontend for authorization
//for registration
const register = async (userData) => {
  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Handle non-2xx status codes
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const data = await response.json();
    console.log(data); // Assuming the backend returns some data upon successful registration
  } catch (error) {
    // Handle network errors or exceptions
    console.error('Registration failed:', error.message);
  }
};


//for login
const login = async (credentials) => {
  try {
    const response = await fetch('http://localhost:3000/userLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      // Handle non-2xx status codes
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    console.log(data); // Assuming the backend returns a JWT token
  } catch (error) {
    // Handle network errors or exceptions
    console.error('Login failed:', error.message);
  }
};
