class MensagemError extends View{

	constructor(elemento){
		super(elemento);
	}


	template(model){

        return `
		<div class="alert alert-danger" role="alert">
		${model}
		</div>`;
	}

	

	}