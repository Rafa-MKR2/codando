class MensagemSuccess extends View{

	constructor(elemento){
		super(elemento);
	}


	template(model){

        return `
		<div class="alert alert-secondary" role="alert">
		${model}
		</div>`;
	}

	

	}