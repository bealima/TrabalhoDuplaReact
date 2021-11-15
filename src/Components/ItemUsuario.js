import styles from '../Components/Cadastro.module.css';

function ItemUsuario({ usuario }) {
  return (
    <>
      <li className={styles.liElements}> Primeiro Nome: {usuario.primeiroNome}</li>
      <li className={styles.liElements}>Sobrenome: {usuario.ultimoNome}</li>
      <li className={styles.liElements}>E-mail: {usuario.email}</li>
      <li className={styles.liElements}>Endereco: {usuario.endereco}</li>
      <li className={styles.liElements}>Telefone: {usuario.telefone}</li>
    </>
  );
}

export default ItemUsuario;