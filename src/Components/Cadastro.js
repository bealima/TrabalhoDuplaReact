import React from 'react';
import { useFormik } from 'formik';
import ListaUsuarios from './ListaUsuarios';
import {useState} from 'react';


function Cadastro(){
  const formik = useFormik({
    initialValues:{
      tipoUsuario:'', 
      nome:'',
      dataNasc:'', 
      email:'',
      senha:''
    },
    enableReinitialize: true,
    onSubmit:(values, {resetForm}) => {
      
      //let idAtual = 0
      // idAtual= id
      // setId(id+1)
      // console.log(values.id)
      console.log(values)
      if (listUsuarios.length === 0){
        setListUsuarios([values])
        console.log(654654)
      }else {
        setListUsuarios([...listUsuarios, values])
      }
        
      console.log('blabla',listUsuarios)    
      // formik.values.id++
      resetForm();
      
    }
  });
 
    const [id,setId]=useState(0)
    const [listUsuarios,setListUsuarios]=useState([])
    
    const handleDelete = (id) => {
      console.log("Button delete");
      console.log(id)
      const list = listUsuarios.filter(usuario => usuario.nome !== id)
      setListUsuarios(list)
    }
    
    const handleUpdate = () => {
      console.log("Button update");
    }

  return(
    <div>
      <form  onSubmit={formik.handleSubmit}>
        
        <div>
          <label htmlFor="tipoUsuario">Tipo de usuário</label>
          <input type="text"  id="tipoUsuario" name="tipoUsuario" onChange={formik.handleChange}  value={formik.values.tipoUsuario}/>
        </div>
        <div>
          <label htmlFor="nome">Nome completo*</label>
          <input type="text"  id="nome" name="nome" onChange={formik.handleChange} value={formik.values.nome}/>
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento*:</label>
          <input type="date"  id="dataNasc" name="dataNasc" onChange={formik.handleChange} value={formik.values.dataNasc}/>
        </div>
        <div>
          <label htmlFor="email">E-mail*:</label>
          <input type="email"  id="email" name="email" onChange={formik.handleChange}  value={formik.values.email}/>
        </div>
        <div>
          <label htmlFor="senha">Senha*:</label>
          <input type="password"  id="senha" name="senha" onChange={formik.handleChange} value={formik.values.senha}/>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="primeiroEmprego">Primeiro Emprego?</label>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      <ListaUsuarios listaUsuarios={listUsuarios} onDelete={handleDelete} onUpdate={handleUpdate}/>
    </div>
  );
}

export default Cadastro;