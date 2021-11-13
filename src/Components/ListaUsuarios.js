import ItemUsuario from "./ItemUsuario";
import Cadastro from "./Cadastro";

function ListaUsuarios({usuarios, setUsuarios}){
  function Remover(user){
    console.log('oi')
    let index = usuarios.findIndex((u)=>u.id=== user.id)
    usuarios.splice(index,1)
    setUsuarios([...usuarios]) 
  };
  function Editar(props){
    console.log('tchau')
    return <Cadastro/>
  };
    
  return(
    <div>
      {usuarios.map((user) => (
        <div key={user.id}>
          <ItemUsuario usuario={user}/> 
          <button type="button" onClick={() => Remover(user)}>Remover</button>
          <button type="button" onClick={() => Editar(user)}>Editar</button>
        </div>
      ))}
      
    </div>
  );
}

export default ListaUsuarios;
