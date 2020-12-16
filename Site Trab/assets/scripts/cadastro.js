function valCad() {
  if(document.getElementById("nome").value.length < 6)
{
  alert("Nome Completo Inválido - Digite Novamente");
  document.getElementById("nome").focus();
  return false;
}    
  var x = document.forms["cadastro"]["email"].value;
  var upf = x.includes("upf.br");
  if (upf == true){
      alert("Dados Gravados com Sucesso!");
      return true;
  }else{
      alert("Erro: Email deve ser institucional '@upf.br'");
      document.write(navigator.userAgent);  
      if(navigator.userAgent.indexOf("Chrome") != -1 && navigator.userAgent.indexOf("Edg") == -1 && navigator.userAgent.indexOf("OPR") == -1){
          var img = document.createElement("IMG");
          img.setAttribute("src", "assets/image/chrome.jpg");
          img.setAttribute("alt", "Navegador Google Chrome");
          document.body.appendChild(img);
      }
      if(navigator.userAgent.indexOf("Edg/") != -1){
          var img = document.createElement("IMG");
          img.setAttribute("src", "assets/image/edge.jpg");
          img.setAttribute("alt", "Navegador Microsoft Edge");
          document.body.appendChild(img);
      }
      if(navigator.userAgent.indexOf("Firefox") != -1){
          var img = document.createElement("IMG");
          img.setAttribute("src", "assets/image/firefox.jpg");
          img.setAttribute("alt", "Navegador Mozilla FireFox");
          document.body.appendChild(img);
      }
      if(navigator.userAgent.indexOf("OPR") != -1){
          var img = document.createElement("IMG");
          img.setAttribute("src", "assets/image/opera.jpg");
          img.setAttribute("alt", "Navegador Opera");
          document.body.appendChild(img);
      }
      return false;
  }
  
return true;
}