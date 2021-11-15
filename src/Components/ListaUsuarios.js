
import ItemUsuario from "./ItemUsuario"
import styles from '../Components/Cadastro.module.css';


function ListaUsuarios({ listaUsuarios, onDelete, onUpdate }) {

  return (
    <div>
      <h1 className={styles.h1Title}>Lista de Usuários</h1>
      {listaUsuarios.map((user, index) => (
        <div key={index}>
          <ItemUsuario usuario={user} />
          <button type="button" onClick={() => onDelete(user.id)}>Remover</button>
          <button type="button" onClick={() => onUpdate(user.id)}>Editar</button>
        </div>
      ))}

    </div>
  );
}

export default ListaUsuarios;