import React from 'react';
import { useFormik } from 'formik';
import ListaUsuarios from './ListaUsuarios';
import {useState} from 'react';


function Cadastro(){

  const [idUsuario,setIdUsuario]=useState(0)
  const [listUsuarios,setListUsuarios]=useState([])
  const [isEdicao, setIsEdicao] = useState(false)
    
  const formik = useFormik({
    initialValues:{
      id: 0,
      primeiroNome:'', 
      ultimoNome:'',
      email:'',
      endereco:'', 
      telefone:''
    },
    enableReinitialize: true,
    onSubmit:(values, ) => {
     
      if (!isEdicao){

        values.id = idUsuario
        setIdUsuario(idUsuario + 1)

        if (listUsuarios.length === 0){
          setListUsuarios([values])

        }else {
          setListUsuarios([...listUsuarios, values])
        }
        
        formik.resetForm();

      } else { /*Se isEdicao*/
    
        let userEditado = listUsuarios.find(e => e.id === values.id)
        console.log(userEditado)
        // console.log(values)

        if (userEditado !== -1 ){
          userEditado.primeiroNome = values.primeiroNome
          userEditado.ultimoNome = values.ultimoNome
          userEditado.email = values.email
          userEditado.endereco = values.endereco
          userEditado.telefone = values.telefone
          
          setListUsuarios([...listUsuarios])
        }
        console.log(listUsuarios)
      }

    }
  });

    const handleDelete = (id) => {

      const list = listUsuarios.filter(user => user.id !== id)
      setListUsuarios(list)
    }
    
    const handleUpdate = (id) => {

      setIsEdicao(true)

      const usuario = listUsuarios.find(user => user.id === id)
      formik.setValues(usuario)
      

    }

  return(
    <div>
      <form  onSubmit={formik.handleSubmit}>
        
        <div>
          <label htmlFor="primeiroNome">Primeiro Nome:</label>
          <input type="text"  id="primeiroNome" name="primeiroNome" onChange={formik.handleChange}  value={formik.values.primeiroNome}/>
        </div>
        <div>
          <label htmlFor="ultimoNome">Sobrenome:</label>
          <input type="text"  id="ultimoNome" name="ultimoNome" onChange={formik.handleChange} value={formik.values.ultimoNome}/>
        </div>
        <div>
          <label htmlFor="email">E-mail*:</label>
          <input type="email"  id="email" name="email" onChange={formik.handleChange}  value={formik.values.email}/>
        </div>
        <div>
          <label htmlFor="endereco">Endereco:</label>
          <input type="text"  id="endereco" name="endereco" onChange={formik.handleChange} value={formik.values.endereco}/>
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="text"  id="telefone" name="telefone" onChange={formik.handleChange} value={formik.values.telefone}/>
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