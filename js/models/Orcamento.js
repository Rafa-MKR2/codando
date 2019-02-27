class OcamentosLista{
    constructor(data,nome,email,mensagem,tel){
        this._nome = nome;
        this._email = email;
        this._mensagem = mensagem;
        this._tel = tel;
        this._data = data
    }
    get nome(){
        return this._nome;
    }
    get email(){
        return this._email;

    }
    get mensagem(){
        return this._mensagem;

    }
    get tel(){
        return this._tel;

    }
    get data(){
        return this._data;

    }
}