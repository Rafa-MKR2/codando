class Admin{
    constructor(){

        // controller
        let $ = document.querySelector.bind(document);
        this._email = $('#email');
        this._senha = $('#password');
        this._form = $('#formLogin');


        //View
        this._alertSuccess = new MensagemSuccess($('#alert'))
        this._alertError = new MensagemError($('#alert'))
        this._perfil = new PerfilView($('#perfil'))


        // configurações
        this._firebase = new Firebase();

        firebase.initializeApp(this._firebase.config);
        console.log(this._firebase.config)
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
             this._alertError.update(this.firebase.logResponse(error.code))
             console.log(error)
            });
    }

}