/*
var xmlhttp = new XMLHttpRequest();
		
function processarRequisicao() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var a = JSON.parse (xmlhttp.responseText);
		var htmlString = "";
		var num = a.restify.rows.length;
		var link = "";

		htmlString = getFormattedTable();
		
		for (j = 0; j < num; j++) {
			link = a.restify.rows[j].values.id.value;
			// alterar os 'htmlString = htmlString +' para 'htmlString +=' -> é a mesma coisa e o code fica menor  
			htmlString = htmlString + "<tbody><tr><td>"+ a.restify.rows[j].values.id.value + "</td>"+ "<td>" + a.restify.rows[j].values.nome.value +"</td>"+ "<td>" + a.restify.rows[j].values.responsavel.value +"</td>"+ "<td>" + a.restify.rows[j].values.cnpj.value +"</td>"+ "<td>" + a.restify.rows[j].values.tel.value +"</td>"+ "<td>" + a.restify.rows[j].values.email.value +"</td>";
			htmlString = htmlString + '<td><button class="btn btn-warning" onclick="Modifica(' + link + ');">Editar</button></td>';
			htmlString = htmlString + '<td><button class="btn btn-danger" onclick="ApagaRegistro(' + link + ');">Deletar</button></td></tr></tbody>';
		}
		htmlString += "</table>";
		document.getElementById("secao").innerHTML = htmlString;
	}
}

function ExecutaAjax() {			
	xmlhttp.onreadystatechange = processarRequisicao;
	xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro/?_view=json&_expand=yes", true);
	xmlhttp.send();
}

function InsereRegistro() {
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4) {  //&& xmlhttp.status==200) {               
			document.getElementById("secao").innerHTML = xmlhttp.responseText;
		}
	}
    xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');            
	xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+'","responsavel":"'+document.getElementById('responsavel').value+'","cnpj":"'+document.getElementById('cnpj').value+'","tel":"'+document.getElementById('telefone').value+'","email":"'+document.getElementById('email').value +'"}');
}

function ApagaRegistro(link){
	if(confirm("Deseja apagar?")==true) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4) {  //&& xmlhttp.status==200) {               
				document.getElementById("secao").innerHTML = xmlhttp.responseText;
			}
		}
		if(typeof link == 'number'){
			var j = "";
			j=link.toString();
		}
    	xmlhttp.open("DELETE", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro/"+j, true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');            
		xmlhttp.send();		
	}
}

function Confirma(x) {
	if(x==1){
		if(confirm("Deseja inserir?")==true) {
			InsereRegistro();
		}
	}
}

function Insere() {
	var str = "";
	str = '<center><form class="form-inline" name="formulario" method="POST" onSubmit="Confirma(1);"><div class="form-group"><input class="form-control" id="nome" type="text" name="nome" placeholder="Nome da Empresa"></div><input class="form-control" id="responsavel" type="text" name="responsavel" placeholder="Responsavel"><input class="form-control" id="cnpj" type="text" name="cnpj" placeholder="CNPJ"><input class="form-control" id="telefone" type="text" name="telefone" placeholder="Telefone"><input class="form-control" id="email" type="text" name="email" placeholder="Email"><input class="btn btn-success" type="submit" value="ENVIAR"></form></center>'
	document.getElementById("secao").innerHTML = str;	
}

function Modifica(link) {
	var str = "";
	str = '<center><form class="form-inline" name="formulario2" method="POST" onSubmit="ModificaRegistro(' + link + ')"><div class="form-group"><input class="form-control" id="nome" type="text" name="nome" placeholder="Nome da Empresa"></div><input class="form-control" id="responsavel" type="text" name="responsavel" placeholder="Responsavel"><input class="form-control" id="cnpj" type="text" name="cnpj" placeholder="CNPJ"><input class="form-control" id="telefone" type="text" name="telefone" placeholder="Telefone"><input class="form-control" id="email" type="text" name="email" placeholder="Email"><input class="btn btn-success" type="submit" value="ENVIAR"></form></center>'
	document.getElementById("secao").innerHTML = str;
}

function ModificaRegistro(link) {
	if(confirm("Deseja modificar?")==true) {
		var xmlhttp = new XMLHttpRequest();
	
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4) {  //&& xmlhttp.status==200) {               
			document.getElementById("secao").innerHTML = xmlhttp.responseText;
			}
		}
		if(typeof link == 'number'){
			var j = "";
			j=link.toString();
		}
    	xmlhttp.open("PUT", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro/"+j, true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');            
		xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+'","responsavel":"'+document.getElementById('responsavel').value+'","cnpj":"'+document.getElementById('cnpj').value+'","tel":"'+document.getElementById('telefone').value+'","email":"'+document.getElementById('email').value +'"}');
	}
}

function getFormattedTable() {
	var htmlString = "";

	htmlString = '<center><table class="table-bordered"></center>';
	htmlString += '<thead>';
	htmlString += '<tr><th>ID</th><th>Nome da Empresa</th>';
	htmlString += '<th>Responsavel</th>';
	htmlString += '<th>CNPJ</th>';
	htmlString += '<th>Telefone</th>';
	htmlString += '<th>Email</th>';
	htmlString += '</tr></thead>';

	return htmlString;
}*/

var xmlhttp = new XMLHttpRequest();
		
		function processarRequisicao() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var a = JSON.parse (xmlhttp.responseText);
				var str = "";
				var num = a.restify.rows.length;
				var link = "";
				str = "<center><table class='table-bordered' border='2'></center><tr><th>CODIGO</th><th>Nome</th><th>Email</th><th>Data do Cadastro</th><th>Telefone</th></tr>"
				for (j = 0; j < num; j++) {
					link = a.restify.rows[j].values.codigo.value;
					str = str + "<tr><td>"+ a.restify.rows[j].values.codigo.value + "</td>"+ "<td>" + a.restify.rows[j].values.nome.value +"</td>"+ "<td>" + a.restify.rows[j].values.email.value +"</td>"+ "<td>" + a.restify.rows[j].values.data_cadastro.value +"</td>"+ "<td>" + a.restify.rows[j].values.telefone.value +"</td>";
					str = str + '<td><button class="btn btn-warning" onclick="Modifica(' + link + ');">Editar</button></td>';
					str = str + '<td><button class="btn btn-danger" onclick="ApagaRegistro(' + link + ');">Deletar</button></td></tr>';
				}
				str = str + "</table>";
				document.getElementById("secao").innerHTML = str;
			}
		}
		
		function ExecutaAjax() {			
			xmlhttp.onreadystatechange = processarRequisicao;
			xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro/?_view=json&_expand=yes", true);
			xmlhttp.send();
		}
		
		function InsereRegistro() {
			if(confirm("Deseja inserir?")==true) {
				var xmlhttp = new XMLHttpRequest();
			
				xmlhttp.onreadystatechange=function() {
					if (xmlhttp.readyState==4) {  //&& xmlhttp.status==200) {               
						document.getElementById("secao").innerHTML = xmlhttp.responseText;
					}
				}
				var d = new Date();
    			var timedate = d.toJSON();
            	xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro", true);
				xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');            
				xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+'","email":"'+document.getElementById('email').value+'","data_cadastro":"'+timedate+'","telefone":"'+document.getElementById('telefone').value +'"}');
			}
		}
		
		function ApagaRegistro(link){
			if(confirm("Deseja apagar?")==true) {
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange=function() {
					if (xmlhttp.readyState==4) {  //&& xmlhttp.status==200) {               
						document.getElementById("secao").innerHTML = xmlhttp.responseText;
					}
				}
				if(typeof link == 'number'){
					var j = "";
					j=link.toString();
				}
            	xmlhttp.open("DELETE", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro/"+j, true);
				xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');            
				xmlhttp.send();		
			}
		}
		
		function Insere() {
			var str = "";
			str = '<form name="formulario" method="POST" onSubmit="InsereRegistro();"><input id="nome" type="text" name="nome" placeholder="Nome"><input id="email" type="text" name="email" placeholder="Email"><input id="telefone" type="text" name="telefone" placeholder="Telefone"><input type="submit" value="Enviar"></form>'
			document.getElementById("secao").innerHTML = str;	
		}
		
		function Modifica(link) {
			var str = "";
			str = '<form name="formulario2" method="POST" onSubmit="ModificaRegistro(' + link + ')"><input id="nome" type="text" name="nome" placeholder="Nome"><input id="email" type="text" name="email" placeholder="Email"><input id="telefone" type="text" name="telefone" placeholder="Telefone"><input type="submit" value="Enviar"></form>'
			document.getElementById("secao").innerHTML = str;
		}
		
		function ModificaRegistro(link) {
			if(confirm("Deseja modificar?")==true) {
				var xmlhttp = new XMLHttpRequest();
			
				xmlhttp.onreadystatechange=function() {
					if (xmlhttp.readyState==4) {  //&& xmlhttp.status==200) {               
					document.getElementById("secao").innerHTML = xmlhttp.responseText;
					}
				}
				if(typeof link == 'number'){
					var j = "";
					j=link.toString();
				}
				var d = new Date();
    			var timedate = d.toISOString();
            	xmlhttp.open("PUT", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro/"+j, true);
				xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');            
				xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+'","email":"'+document.getElementById('email').value+'","data_cadastro":"'+timedate+'","telefone":"'+document.getElementById('telefone').value +'"}');
			}
		}