var login = prompt("Who's there?"); 

if (login == "Admin" || login == "admin"){
    var password = prompt("Password?");
    if (password == "TheMaster"){
        console.log("Welcome!");
    } else if (password == null){
        console.log("Canseled");
    } else {
        console.log("Wrong password");
    };
} else if (login == null){
    console.log("Canseled");
} else {
    console.log("I don't know you")
};
