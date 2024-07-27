
// ?DOM Manupulation
let userAge = document.getElementById("value");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let userCitizen = document.getElementById("citizen");
let userRegister = document.getElementById("register");
let loader = document.getElementById("loader");
let resultCon = document.getElementById("result-container");
let okBtn = document.getElementById("okbtn");


let checkUser = (age,citizen,register) => {
   if(age == '' || citizen == '' || register == ''){
      resultCon.classList.add("toggle-res")
     result.innerHTML = "Please fill the details"
     setTimeout(() => {
      resultCon.classList.remove("toggle-res")
     },3000)
   }
   else if(isNaN(age)){
      resultCon.classList.add("toggle-res")
      result.innerHTML = "Enter the valid age"
      setTimeout(() => {
         resultCon.classList.remove("toggle-res")
      },4000)
   }
   else{
      loader.style.display = "block";
      setTimeout(() => {
         loader.style.display = "none";
         if(age >= 18){
            if(citizen == "No"){
               if(register == "Yes"){
                  resultCon.classList.add("toggle-res")
                  result.innerHTML = "You have successfully register in this portal <br> Thank you !!"  
               }else{
                  resultCon.classList.add("toggle-res")
                  result.innerHTML = "You are not Eligible in this portal due to registration"
               }
            }else{
               resultCon.classList.add("toggle-res")
               result.innerHTML = "You are not Eligible in this portal due to Citizen Status"
            }
         }else{
            resultCon.classList.add("toggle-res")
            result.innerHTML = "You are not Eligible on this portal due to age"
         }
      },5000)
      result.innerHTML = ""
   }
}

btn.addEventListener("click",() => {
   checkUser(userAge.value,userCitizen.value,userRegister.value)
})

okBtn.addEventListener("click",() => {
   resultCon.classList.remove("toggle-res")
   setTimeout(() => {
      window.location.reload()
   },1000)
})