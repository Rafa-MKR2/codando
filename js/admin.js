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

                    this._db.ref('orcamentos/').on('child_added',snap =>{
                        this.add_Lista(snap.val());
                        this._lista.reverse();

                        this.render(snap.val())
                        });
                    this._db.ref('orcamentos/').on('child_changed',snap => {
                        this.update_Lista(snap.val())
                        this.render(this._lista)

                        })
                    this._db.ref('orcamentos/').on('child_removed',snap =>{ 
                        this.update_Lista(snap.val())
                        this.render(this._lista)
                    });
         
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

   
   
    add_Lista(item){
        this._lista.push(item);
        console.log(this._lista)

    }

    update_Lista(item){
        let lista= []
        this._lista.map(e=>{
            if(item.data==e.data) return
            lista.push(e)
        })
        this._lista = lista;
        console.log(this._lista)
    }


    render(){
        return this._orcamento.update(this._lista)
      }
    
}