//SIGNUPINPUT FIELDS
const userName = document.getElementById('userName')
const emails = document.getElementById('email')
const password = document.getElementById('password')
const cPassword = document.getElementById('cPassword')

//LOGIN INPUT FIELDS
const loginEmailField = document.getElementById('email-login');
const loginPassField = document.getElementById('password-login');


const signupHandler = () => {
    let user = JSON.parse(localStorage.getItem('users')) || [];
console.log(user)
     if(!userName.value || !emails.value || !password.value || !cPassword.value)
     {alert("all fields are rquired")
    return; }
     if(password.value.length < 6 || cPassword.value.length < 6 )
     {alert("pass atleast 8 characters")
    return; }
     if(password.value !== cPassword.value)
     {alert("pass and cpass is also same")
    return; }
    
// for (let i = 0; i < user.length; i++) {
//     if (user[i].email === emails.value){
//         alert("email already exist")
//         return
//     }    
// }

let sameEmailUser = user.find((user)=> {
  if(user.email == emails.value){
    return user;
  }
})

if (sameEmailUser){
    alert("email already exist");
    return;
}
console.log(sameEmailUser)
    let inputFieldsData = {
        name: userName.value,
        email: emails.value,
        pass: password.value,
        cpass: cPassword.value
    }
    user.push(inputFieldsData)

    localStorage.setItem('users', JSON.stringify(user))

    alert("signup successfulllyy")
     let rr= "../login/index.html";
    window.location.href= rr;



    
}

const loginHandler = () => {
    let user = JSON.parse(localStorage.getItem('users'));
    let sameEmailUser = user.find((user)=> {
        if(user.email == loginEmailField.value && user.pass == loginPassField.value){
          return user;
        }
      })
      if (sameEmailUser){
        window.location.href = '../home/index.html';
        localStorage.setItem('loginusers', JSON.stringify(sameEmailUser))
      }else {
        alert("user does not exist")
      }
}


const logoutHandler = () => {
 console.log("logout")
  localStorage.removeItem('loginusers');
  window.location.href = '../login/index.html';
 
}


const editHandler = () => {

}