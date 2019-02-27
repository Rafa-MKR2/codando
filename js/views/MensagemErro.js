class MensagemError extends View{

	constructor(elemento){
		super(elemento);
	}


	template(model){

        return `
		<div class="alert alert-danger scale-transition scale-out" role="alert">
		<i style=" position: absolute;" class="material-icons">error</i>
		
		<span style="margin-left:8%;" >${model}</span>
		
		</div>`;
	}

	

	}