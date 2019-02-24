class FirebaseAuth{
    constructor(){}


    logResponse(response){
        let msg = ''
        switch(response){
            case "auth/user-not-found":
            msg= "usuário não cadastrado!"
            break;
            case "auth/wrong-password":
            msg= "senha incorreta!"
            break;
            case "":
            msg= "Houve um problema!"
            break;
        }

        return msg;
    }

}