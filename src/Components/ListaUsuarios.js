import ItemUsuario from "./ItemUsuario";


function ListaUsuarios({listaUsuarios, onDelete, onUpdate}){
    
  return(
    <div>
      {listaUsuarios.map((user, index) => (
        <div key={index}>
          <ItemUsuario usuario={user}/> 
          <button type="button" onClick={() => onDelete(user.nome)}>Remover</button>
          <button type="button" onClick={() => onUpdate(user.nome)}>Editar</button>
        </div>
      ))}
      
    </div>
  );
}

export default ListaUsuarios;
