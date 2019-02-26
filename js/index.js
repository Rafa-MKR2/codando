class Index{
    constructor(){
        let $ = document.querySelector.bind(document);

        // Formulario orçamento
        this._nome = $('#nome');
        this._email = $('#email');
        this._tel = $('#tel');
        this._mensagem = $('#mensagem');

        // config
        this._firebase = new Firebase();
        firebase.initializeApp(this._firebase.config);
        this._db = firebase.database();
       
    }

    formOcamento(event){
        event.preventDefault();
        let orcamento ={
            nome: this._nome.value,
            email:this._email.value,
            tel:  this._tel.value,
            data: new Date().getTime(),
            mensagem: this._mensagem.value
          }
      return  firebase.database().ref('orcamentos/').push(orcamento)
      .then(()=>  {
        M.toast({
            html: '<a>Seu orçamento foi agendado com sucesso!</a>',
            displayLength:7000, 
            inDuration:900, 
            outDuration:1500,
            completeCallback: setTimeout(()=> 
             M.toast({html:'<p>Obrigado(a) por escolher nossos serviços</p>', displayLength:20000}),9000)
        })

        this._limpaForm()
        })
      .catch(()=>  M.toast({html: 'Não foi posível agendar seu orçameento!'}) )

      

    }



    _limpaForm(){
       this._nome.value =''
       this._email.value =''
       this._tel.value =''
       this._mensagem.value =''
    }
}


