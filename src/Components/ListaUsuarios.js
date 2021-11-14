import ItemUsuario from "./ItemUsuario";


function ListaUsuarios({listaUsuarios, onDelete, onUpdate}){
    
  return(
    <div>
      {listaUsuarios.map((user, index) => (
        <div key={index}>
          <ItemUsuario usuario={user}/> 
          <button type="button" onClick={() => onDelete(user.id)}>Remover</button>
          <button type="button" onClick={() => onUpdate(user.id)}>Editar</button>
        </div>
      ))}
      
    </div>
  );
}

export default ListaUsuarios;
