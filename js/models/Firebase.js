class Firebase{
    constructor(){

        this._config = {
            apiKey: "AIzaSyDgQFI6rbvCTCklaPPhQ4KQeag9ukW_mjc",
            authDomain: "codando-a9f78.firebaseapp.com",
            databaseURL: "https://codando-a9f78.firebaseio.com",
            projectId: "codando-a9f78",
            storageBucket: "",
            messagingSenderId: "952315727239"
          };
    }




    get config(){
        return this._config;
    }


    logResponse(response){
        let msg = ''
        switch(response){
            case "auth/user-not-found":
            msg= "usuário não cadastrado!"
            break;
            case "auth/wrong-password":
            msg= "senha incorreta!"
            break;
            case "auth/too-many-requests":
            msg='Você excedeu limites de tentativas, tente novamente mais tarde!'
            break;
            case "":
            msg= "Houve um problema!"
            break;
        }

        return msg;
    }

}