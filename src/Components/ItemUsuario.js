function ItemUsuario({usuario}){
  return(
    <>
      <li>
        Id: {usuario.id}
        Tipo de Usuario: {usuario.tipoUsuario}
        Nome: {usuario.nome}
        Data de Nascimento: {usuario.dataNasc}
        E-mail: {usuario.email}
      </li>
    </>
  );
}

export default ItemUsuario;