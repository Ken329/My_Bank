var id, password, infoname, balance = new Array();
var account = new Array();
var par_name, par_ammount, par_type = new Array();
id=["ken", "asf", "kel", "lash"];
password=["liau", "ahmed", "raj", "raj"];
infoname=["KEN", "ASFAND", "KELVEEN", "LASHWEEN"];
balance=[0, 0, 0, 0];
par_name=["", "", "", "", ""];
par_type=["", "", "", "", ""];
par_ammount=[0, 0, 0, 0, 0];
for(i = 0; i < id.length; i++){
	account[i] = parseInt(balance[i]);
}
var i = 0;
var success = 3;
var name, ammount, type = new Array();
function transfer(){
	document.getElementById("my-transfer").style.display = 'none';
	if(account[i] > Number(document.getElementById("par-with").value)){
		alert("Transaction Successful!!!");
		return account[i] -= Number(document.getElementById("par-with").value), 
		par_name[i] = document.getElementById("par-name").value,
		par_ammount[i] = Number(document.getElementById("par-with").value),
		par_type[i] = document.getElementById("type").value;
	}
	alert("Your balance is not enough!!!");
}
function withdraw(){
	document.getElementById("my-withdraw").style.display = 'none';
	if(account[i] > Number(document.getElementById("withdraw").value)){
		alert("Withdraw Successful!!!");
		return account[i] -= Number(document.getElementById("withdraw").value);
	}
	alert("Your balance is not enough!!!");
}
function insert(){
	document.getElementById("my-insert").style.display = 'none';
	alert("Insert Successful!!!");
	return account[i] += Number(document.getElementById("insert").value);
}
function login(){
	for(i = 0; i < id.length; i++){
		if(document.getElementById("username").value == id[i] && document.getElementById("password").value == password[i]){
			document.getElementById("sign-form").style.display = 'none';
			document.getElementById("information").style.display = 'block';
			alert("Successful Login");
			
			document.getElementById("loginLogo").innerHTML = " " + infoname[i];

			document.getElementById("btn-balance").addEventListener("click", function(){
				document.getElementById("my-insert").style.display = 'none';
				document.getElementById("my-withdraw").style.display = 'none';
				document.getElementById("my-transfer").style.display = 'none';
				document.getElementById("my-transaction").style.display = 'none';
				document.getElementById("my-balance").style.display = 'block';
				document.getElementById("infoname").innerHTML = "Username : " + infoname[i];
				document.getElementById("balance").innerHTML = "Balance : " + account[i];
			});
			document.getElementById("btn-insert").addEventListener("click", function(){
				document.getElementById("my-balance").style.display = 'none';
				document.getElementById("my-withdraw").style.display = 'none';
				document.getElementById("my-transfer").style.display = 'none';
				document.getElementById("my-transaction").style.display = 'none';
				document.getElementById("my-insert").style.display = 'block';
				console.log(account[i]);
			});
			document.getElementById("btn-withdraw").addEventListener("click", function(){
				document.getElementById("my-balance").style.display = 'none';
				document.getElementById("my-insert").style.display = 'none';
				document.getElementById("my-transfer").style.display = 'none';
				document.getElementById("my-transaction").style.display = 'none';
				document.getElementById("my-withdraw").style.display = 'block';
				console.log(account[i]);
			});
			document.getElementById("btn-transfer").addEventListener("click", function(){
				document.getElementById("my-balance").style.display = 'none';
				document.getElementById("my-insert").style.display = 'none';
				document.getElementById("my-withdraw").style.display = 'none';
				document.getElementById("my-transaction").style.display = 'none';
				document.getElementById("my-transfer").style.display = 'block';
				console.log(account[i]);
			});
			document.getElementById("btn-transaction").addEventListener("click", function(){
				document.getElementById("my-balance").style.display = 'none';
				document.getElementById("my-insert").style.display = 'none';
				document.getElementById("my-withdraw").style.display = 'none';
				document.getElementById("my-transfer").style.display = 'none';
				document.getElementById("my-transaction").style.display = 'block';
				document.getElementById("trans-name").innerHTML = "Participant Name : " + par_name[i];
				document.getElementById("trans-ammount").innerHTML = "Participant Ammount : " + par_ammount[i];
				if(par_type[i] == "int"){
					document.getElementById("trans-type").innerHTML = "Transfer type: Instant Transfer";
				}else{
					document.getElementById("trans-type").innerHTML = "Transfer type: Normal Transfer";
				}
			
			});
			return false;
		}
	}
	success--;
	alert(success+ " attempts left, wrong username or password");
	if (success == 0) {
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("button").disabled = true;
	}
}
function signUp(){
	if (document.getElementById("my-password").value =="" && document.getElementById("cm-password").value == "") {
		alert("Please do not leave your username and password empty, do try again!!!")
	}else{
		if(document.getElementById("my-password").value == document.getElementById("cm-password").value){
		id.push(document.getElementById("cm-username").value);
		password.push(document.getElementById("cm-password").value);
		infoname.push(document.getElementById("cm-username").value);
		account.push(0);
		alert("Account has been created");
		return false;
		}else{
			alert("Password is not the same, please try again!!!");
		}
	}
}


