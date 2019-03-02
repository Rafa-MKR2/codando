class PerfilView extends View{

	constructor(elemento){
		super(elemento);
	}


	template(model){

        return `
        <div style="position:relative;" class="d-flex align-items-center p-3 my-3 text-purple-50 bg-purple rounded shadow-sm">
        <img class="mr-3" src="img/user.png" alt="" width="48" height="48">
        <div class="lh-100">
          <h6 class="mb-0 text-purple lh-100">${model.displayName}</h6>
          <small>ultímo acesso: ${DateHelper.gravaData(new Date(model.metadata.lastSignInTime)) }</small>
          </div>

      </div>`;
	}

	

	}