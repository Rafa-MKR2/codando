class Admin{
    constructor(){

        // controller
        let $ = document.querySelector.bind(document);
        this._email = $('#email');
        this._senha = $('#password');

        this._form = $('#formLogin');


        //View
        this._response = new FirebaseAuth();
        this._alertSuccess = new MensagemSuccess($('#alert'))
        this._alertError = new MensagemError($('#alert'))
        this._perfil = new PerfilView($('#perfil'))


        // configurações
        this._config = {
            apiKey: "AIzaSyDgQFI6rbvCTCklaPPhQ4KQeag9ukW_mjc",
            authDomain: "codando-a9f78.firebaseapp.com",
            databaseURL: "https://codando-a9f78.firebaseio.com",
            projectId: "codando-a9f78",
            storageBucket: "",
            messagingSenderId: "952315727239"
          };
          firebase.initializeApp(this._config);
    }


   
    login(event){
        event.preventDefault()
     return  firebase.auth().signInWithEmailAndPassword(this._email.value, this._senha.value)
            .then(date=> {
                console.log(date.user);
                this._form.style.display="none"
                this._perfil.update(date.user);
              
            })
            .catch(error=>{
             this._alertError.update(this._response.logResponse(error.code))
             console.log(error)
            });
    }

}