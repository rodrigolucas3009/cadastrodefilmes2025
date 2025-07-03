function enter(){
   let input1 = document.getElementById("form1");
   let input2 = document.getElementById("form2");
   if (input1.value == "admin" && input2.value == "admin"){
    window.location.href = "cadastro.html";
   }
   else{
    alert("Usuário ou senha inválidos!");
   }
}