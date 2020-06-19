var login = prompt("Who's there?"); 

switch (login) {
    case 'Admin': case 'admin':
        var  password = prompt("Password?");
        switch (password){
            case 'TheMaster':
                console.log("Welcome");
                break;
            case null:
                console.log("Canceled");
                break;
            default:
                console.log("Wrong password");
                break;
        } break;
    case null:
        console.log("Canceled.");
        break;
    default :
        console.log("I don't know you.");
        break;
}