window.onload = function(){
  var pch = [];
  while(pch.length < 3){
      var r = Math.floor(Math.random() * 3) + 1;
      if(pch.indexOf(r) === -1) pch.push(r);
  }
  var div1=pch[0];
  var div2=pch[1];
  var div3=pch[2];
  
  if(div1=="1"){
    document.getElementById("pch1").style.height = "27.5%";
    document.getElementById("pch1").style.background = "rgb(146, 109, 6)";
    document.getElementById("pch1").innerHTML = "No Cadastro, e obrigatorio constar seu nome, e escrito por inteiro,<br>E obrigatorio o telefone com o DD<br>O email é necessario ser com o dominio upf.br<br>Apos botar a data de nascimento apertar no botao enviar";
  }else if(div1=="2"){
    document.getElementById("pch2").style.height = "27.5%";
    document.getElementById("pch2").style.background = "rgb(146, 109, 6)";
    document.getElementById("pch2").innerHTML = "No Cadastro, e obrigatorio constar seu nome, e escrito por inteiro,<br>E obrigatorio o telefone com o DD<br>O email é necessario ser com o dominio upf.br<br>Apos botar a data de nascimento apertar no botao enviar";
  }else{
    document.getElementById("pch3").style.height = "27.5%";
    document.getElementById("pch3").style.background = "rgb(146, 109, 6)";
    document.getElementById("pch3").innerHTML = "No Cadastro, e obrigatorio constar seu nome, e escrito por inteiro,<br>E obrigatorio o telefone com o DD<br>O email é necessario ser com o dominio upf.br<br>Apos botar a data de nascimento apertar no botao enviar";
  };
  if(div2=="1"){
    document.getElementById("pch1").style.height = "27.5%";
    document.getElementById("pch1").style.background = "rgb(177, 131, 6)";
    document.getElementById("pch1").innerHTML = "Dicas do game:<br>1: Preste atenção<br>2:Nao tente decorar, pois as peças mudarão a cada novo jogo<br>3:Guarde carateristicas dos personagens, tais como cor da roupa etc...";
  }else if(div2=="2"){
    document.getElementById("pch2").style.height = "27.5%";
    document.getElementById("pch2").style.background = "rgb(177, 131, 6)";
    document.getElementById("pch2").innerHTML = "Dicas do game:<br>1: Preste atenção<br>2:Nao tente decorar, pois as peças mudarão a cada novo jogo<br>3:Guarde carateristicas dos personagens, tais como cor da roupa etc...";
  }else{
    document.getElementById("pch3").style.height = "27.5%";
    document.getElementById("pch3").style.background = "rgb(177, 131, 6)";
    document.getElementById("pch3").innerHTML = "Dicas do game:<br>1: Preste atenção<br>2:Nao tente decorar, pois as peças mudarão a cada novo jogo<br>3:Guarde carateristicas dos personagens, tais como cor da roupa etc...";
  };
  if(div3=="1"){
    document.getElementById("pch1").style.height = "45%";
    var oImg = document.createElement("img");
    oImg.setAttribute('src', './assets/image/propaganda.png');
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '100%');
    oImg.setAttribute('width', '100%');
    oImg.style.borderTopLeftRadius="30px";
    oImg.style.borderTopRightRadius="30px";
    document.getElementById("pch1").appendChild(oImg);
  }else if(div3=="2"){
    document.getElementById("pch2").style.height = "45%";
    var oImg = document.createElement("img");
    oImg.setAttribute('src', './assets/image/propaganda.png');
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '100%');
    oImg.setAttribute('width', '100%');
    document.getElementById("pch2").appendChild(oImg);

  }else{
    document.getElementById("pch3").style.height = "45%";
    var oImg = document.createElement("img");
    oImg.setAttribute('src', './assets/image/propaganda.png');
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '100%');
    oImg.setAttribute('width', '100%');
    oImg.style.borderBottomLeftRadius="30px";
    oImg.style.borderBottomRightRadius="30px";
    document.getElementById("pch3").appendChild(oImg);
  };
};