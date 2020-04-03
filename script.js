var userpass = [
	{
		username: "lori",
		password: "beauty",
	},
	{
		username: "xhesi",
		password: "kot",
	},
	{
		username: "renato",
		password: "hic",
	}
];
var newsfeed = [
	{
		username: "deni",
		timeline: "hello, whats a beautiful day",
	},
		{
		username: "qeni",
		timeline: "wow, so crazy",
	},
		{
		username: "peni",
		timeline: " thats amazing",
	}
];
var nameprompt = prompt("what is your username?");
var passprompt = prompt("what is your password?");

function userone(username,password){
	for(var i=0; i < userpass.length; i++){
		if(userpass[i].username === username&&
			userpass[i].password === password){
			return true;}
	}return false;
}
function user(username,password){
	if(userone(username,password)){
		console.log(newsfeed)
	}else {alert( "your username or password is incorrect")};
}

	user(nameprompt,passprompt);