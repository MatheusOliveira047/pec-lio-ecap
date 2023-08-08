import { Preview } from "react-html2pdf";
import styles from './Ecap.module.css'
import { useState } from "react";

const Ecap = ()=>{
  const [form,setForm] = useState([{
    militar:'',
    destino:''
  }])

  const militares = [
    {
      id: 1,
      nome: "CAP GIANCARLO"
    },
    {
      id: 2,
      nome: "1ºTEN KUCHUMINSKI"
    },
    {
      id: 2,
      nome: "ST ROGERS"
    },
    {
      id: 2,
      nome: "ST CARLOS"
    },
    {
      id: 4,
      nome: "1ºSGT JUNQUEIRA"
    },
    {
      id: 5,
      nome: "1ºSGT DANIEL"
    },
    {
      id: 6,
      nome: "1ºSGT PEREIRA"
    },
    {
      id: 7,
      nome: "3ºSGT SARAIVA"
    },
    {
      id: 15,
      nome: "3ºSGT HELENA ARAUJO"
    },
    {
      id: 15,
      nome: "3ºSGT RICELI"
    },
    {
      id: 8,
      nome: "CB LUDSON"
    },
    {
      id: 9,
      nome: "CB ADRIANO"
    },
    {
      id: 9,
      nome: "CB OLIVEIRA"
    },
    {
      id: 9,
      nome: "CB SANCHES"
    },
    {
      id: 10,
      nome: "CB JONILLE"
    },
    {
      id: 11,
      nome: "CB ALBERT"
    },
    {
      id: 12,
      nome: "SD AMIN SANTOS"
    },
    {
      id: 13,
      nome: "SD JUNIOR"
    },
    {
      id: 14,
      nome: "SD HUGO MOREIRA"
    },
    {
      id: 15,
      nome: "SD BRASIL"
    },
    {
      id: 14,
      nome: "SD RUBENS"
    },
    {
      id: 14,
      nome: "SD SENA"
    },
    {
      id: 14,
      nome: "SD HAILSON"
    },
  ]

  const destinos = [
             'Pronto',
             'Dispensado',
             'Férias',
             'Instalação',
             'Luto',
             'Nupcias',
             'Falta',
             'Disp Medica',
             'Curso',
             'Voô',
             'Missão',
             'Serviço',
             'SSV',
             'BAdm',
             'CMN',
             'Instrução',
             'Formatura',
             'Rancho',
             'Licença Paternidade',
             'CFC'
  ]

  const handlePeculio = (e)=>{
    e.preventDefault()
    console.log(form)

    //print('peculio', 'jsx-template')
  }
return(
    <main className={styles.peculioContainer}>
      <Preview id={'jsx-template'}>      
      <h2>Ecap</h2>
      <form onSubmit={handlePeculio} className={styles.peculio}>
      {
        militares.map(militar=>(
          <div key={militar.id}>
            <input 
            value={militar.nome}
            type="text"
            disabled
            onChange={(e)=> setForm([{...form, militar: e.target.value}])}
            />
            <select>
        {destinos.map(destino=>(
          <option value={destino}>{destino}</option>
        ))}
      </select>
          </div>
        ))
      }
      
      </form>
      </Preview>
    </main>
  )
}

export default Ecap