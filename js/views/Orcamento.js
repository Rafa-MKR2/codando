class Orcamento extends View{

	constructor(elemento){
		super(elemento);
	}


	template(model){
  if(model.length==0){
    return `
    <div style="position:fixed;" class="col-xl-12 bg-white rounded shadow-sm">
    <h6 class="border-bottom border-gray pb-2 mb-0">Não há orçamentos Cadastrados!</h6>
      </div> `
  }

   return ` <div style="position:fixed;" class="col-xl-12 bg-white rounded shadow-sm">
    <h6 class="border-bottom border-gray pb-2 mb-0">Solicitação de Orçamentos</h6>
      ${model.map(lista=>{
        return `
        <div class="media text-muted pt-3">
           <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
           <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
             <strong class="d-block text-gray-dark">${lista.nome}</strong>
            ${lista.mensagem}
           </p>
           <small class="d-block text-right mt-3">
           <a href="#">${DateHelper.gravaData(new Date(lista.data))}</a> 
           </small>
         </div>`;
      }).join('')}
    
      </div>`;
    
    }
}