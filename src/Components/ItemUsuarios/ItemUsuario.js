import styles from "../ItemUsuarios/ItemUsuario.module.css"

function ItemUsuario({ usuario }) {
  return (
    <>
      <ul className={styles.itemUsuario}>
        <li><strong>Primeiro Nome:</strong> {usuario.primeiroNome}</li>
        <li><strong>Sobrenome:</strong> {usuario.ultimoNome}</li>
        <li><strong>E-mail:</strong> {usuario.email}</li>
        <li><strong>Endereco:</strong> {usuario.endereco}</li>
        <li><strong>Telefone:</strong> {usuario.telefone}</li>
      </ul>
    </>
  );
}

export default ItemUsuario;