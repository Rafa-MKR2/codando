class DateHelper{


    constructor(){
        throw new Error("DateHelper, não pode ser instanciada");
    }

    static dataParaTexto(data){
        return ` ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

    }


    static textoParaData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Data deve estar no formato aaaa-mm-dd");
    
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }


    static gravaData(data =new Date()){
       let hoje = `Hoje ás ${data.getHours()<10? '0'+data.getHours():data.getHours()}:
       ${data.getMinutes()<10? '0'+data.getMinutes():data.getMinutes()}`,

       dataFormatada = `${data.getDate()<10? '0'+data.getDate():data.getDate()}
                        /${data.getMonth()+1<10? '0'+data.getMonth():data.getMonth()+1}
                        /${data.getFullYear()}`;


        if(data.getDate()===new Date().getDate()) return hoje
         else 
       return dataFormatada

    }
}