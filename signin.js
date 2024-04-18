const form = document.querySelector('#form');

const emailError = document.querySelector('.email.error');
const passwordError = document.querySelector('.password.error');
const roleError = document.querySelector('.role.error');
let signInBtn  = document.getElementById("signIn")


signInBtn.addEventListener('click', async (e)=>{
    e.preventDefault(); // prevent default action of page refreshing
    
     // reset errors
     emailError.textContent = '';
     passwordError.textContent = '';
     roleError.textContent = '';
 
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
  
     const email = emails.value;
     const password = passwords.value;
     const role = value;
     //console.log(name)
     try {
         const res =  await fetch('http://localhost:7000/login', {
             method: 'POST',
             body: JSON.stringify({ email: email, password: password, role: role }),
             headers: { 'Content-type': 'application/json; charset=UTF-8',
           }
         });
         const data = await res.json();
        // console.log(data);

         if(data.errors){
             emailError.textContent = data.errors.email;
             passwordError.textContent = data.errors.password;
         }
         if(data.user){
            if(data.role === 'coworker' && role === 'coworker'){
                location.assign('/coworker.html');
    
            }
            if(data.role === 'owner' && role === 'owner'){
               location.assign('/headpage.html'); 
         }
         if(data.role === 'coworker' && role === 'owner'){
            roleError.textContent = "*Incorrect Role*"

        }
        if(data.role === 'owner' && role === 'coworker'){
            roleError.textContent = "*Incorrect Role*"

        }


        }
     }
     catch (err){
         console.log(err);
     }
 })
 