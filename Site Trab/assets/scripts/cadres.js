window.onload = function(){
link = window.location.href;
link = link.replace(/\+/g, " "); // PQP, 4 horas procurando esta sintaxe.
link = link.replace(/\%2F/g, "/"); // adequei todas as sintaxes. 
link = link.replace(/\%40/g, "@");
function getUrlVars() {
	var i;
	var vars = new Array();
	var parteString;
	var todaString = link.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < todaString.length; i++) {
		parteString = todaString[i].split('=');
		parteString[1] = decodeURI(parteString[1]);
		vars.push(parteString[0]);
		vars[parteString[0]] = parteString[1];
	}
	return vars;
}
var result = getUrlVars();
var i, nomeVar;
var old = localStorage.getItem("JSON");
if (old) {
	old = old.substring(1);
	old = old.substring(0, old.length - 1);
}
if (result.length > 0) {
	var myObjJSON = "{";
	for (i = 0; i < result.length; i++) {
		nomeVar = result[i];
		myObjJSON += "\"" + nomeVar + "\"" + ":\"" + (result[nomeVar] != "" ? result[nomeVar] : "null") + "\"";
		if (i != result.length - 1)
			myObjJSON += ",";
		else
			myObjJSON += "}";
	}
	var data = old ? old + "," + myObjJSON : myObjJSON;
	data = "[" + data + "]";
	localStorage.setItem("JSON", data);
}
text = localStorage.getItem("JSON");
obj = JSON.parse(text);
var txt = "";
for (objDados of obj) {
	var count = 0;
	for (campo in objDados) {
		if (Object.prototype.hasOwnProperty.call(objDados, campo)) {
			count++;
		}
	}
	var tamanho = 0;
	for (campo in objDados) {
		txt += campo + ": " + objDados[campo];
		if (tamanho != count - 1)
			txt += ", ";
		else
			txt += ".";
		tamanho++;
	}
	txt += "<br>";
}
document.getElementById("cadastro").innerHTML = txt;
}