class Admin{
    constructor(){

        // controller
        let $ = document.querySelector.bind(document);
        this._email = $('#email');
        this._senha = $('#password');
        this._form = $('#formLogin');
        this._timeView = $('#time')
        this._lista = []

        this._mainStatus = $('#main')

        //View
        this._alertSuccess = new MensagemSuccess($('#alert'))
        this._alertError = new MensagemError($('#alert'))
        this._perfil = new PerfilView($('#perfil'))
        this._orcamento = new Orcamento($('#orcamento'))

        // configurações
        this._firebase = new Firebase();
        firebase.initializeApp(this._firebase.config);
        this._info = ''
        this._db = firebase.database();
      
    }

 
   
    login(event){
        event.preventDefault()
       
     return  firebase.auth().signInWithEmailAndPassword(this._email.value, this._senha.value)
            .then(date=> {
                this._form.classList.add('scale-out')
                this._mainStatus.classList.add('scale-in')
                this._perfil.update(date.user);

                setInterval(()=>{
                    let update = this.orcamentoLoad();

                    if(update.length===this._lista.length){
                        return;
                    }
                    else{
                        this._lista = [].concat(this.orcamentoLoad());
                        this._orcamento.update(this._lista)
                    }
                    if(update.length==0) {
                        this._orcamento.update(this._lista)
                    }
                    
                },2000)
         
            })
            .catch(error=>{
              
             this._alertError.update(this._firebase.logResponse(error.code))
             this._info = error.code;
            if(this._info==='auth/too-many-requests'){
                document.querySelector('.alert-danger').classList.add('scale-in')

                return;
            }
             setTimeout(()=> 
              document.querySelector('.alert-danger').classList.add('scale-in')
             ,50)

            });
    }

   
    orcamentoLoad(){
        let lista = [];
        this._db.ref('orcamentos/').on('child_added', snapshot=> 
        lista.push(snapshot.val())); 

        return lista.reverse();
        }
}