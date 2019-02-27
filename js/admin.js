class Admin{
    constructor(){

        // controller
        let $ = document.querySelector.bind(document);
        this._email = $('#email');
        this._senha = $('#password');
        this._form = $('#formLogin');
        this._timeView = $('#time')
        this.lista = []

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
        this._db = firebase.database().ref('orcamentos/');


        
    }

 
   
    login(event){
        event.preventDefault()
       
     return  firebase.auth().signInWithEmailAndPassword(this._email.value, this._senha.value)
            .then(date=> {
                this._form.classList.add('scale-out')
                this._mainStatus.classList.add('scale-in')

                this._perfil.update(date.user);
  
                this.orcamentoLoad();

              setTimeout(()=>{ 

                    return this._orcamento.update(this.lista.reverse());
           
                  
                },1000)

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
       
           return this._db.on('child_added', snapshot=> 
           this.lista.push(snapshot.val()))
     
    }
}