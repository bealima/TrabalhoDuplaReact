import ItemUsuario from "../ItemUsuarios/ItemUsuario"
import styles from "../ListaUsuarios/ListaUsuarios.module.css"


function ListaUsuarios({ listaUsuarios, onDelete, onUpdate }) {

  return (
    <div className={styles.listaUsuarios}>
      <h1 >Lista de Usuários</h1>
      {listaUsuarios.length !== 0
        ?        
        listaUsuarios.map((user, index) => (
          <div key={index}>
            <ItemUsuario usuario={user} />
            <button type="button" onClick={() => onDelete(user.id)}>Remover</button>
            <button type="button" onClick={() => onUpdate(user.id)}>Editar</button>
          </div>
        ))
        :
        <p>Não existem usuários cadastrados </p>
      }
    </div>
  );
}

export default ListaUsuarios;