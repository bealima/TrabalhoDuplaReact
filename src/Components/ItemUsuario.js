function ItemUsuario({usuario}){
  return(
    <>
      <li>
        Primeiro Nome: {usuario.primeiroNome}
        Sobrenome: {usuario.ultimoNome}
        E-mail: {usuario.email}
        Endereco: {usuario.endereco}
        Telefone: {usuario.telefone}
        
      </li>
    </>
  );
}

export default ItemUsuario;