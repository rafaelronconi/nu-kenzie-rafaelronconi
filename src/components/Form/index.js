// Formulario para cadastro de entrada e saida
// Input para descrição da entrada/saida
// Input para o valor da entrada/saida
// Select para selecionar entre entrada ou saida
// Button para enviar as informaçoes

import { useState } from "react"
import './form.css'

// Recebe a lista de transações 'listTransactions'
// Recebe o state para alterar a lista 'setListTransactions'
function Form({ listTransactions, setListTransactions }){
    const [userDescription, setUserDescription] = useState('')
    const [userValue, setUserValue] = useState(0)
    const [userType, setUserType] = useState('entrada')

    function attList(description, value, type){
        if(userType === 'saida'){
            setListTransactions([...listTransactions, {description: description, type: type, value: parseInt(value * -1)}])
        }else{
            setListTransactions([...listTransactions, {description: description, type: type, value: parseInt(value)}])
        }
    }
    return(
        <div className="mainDescription">
            <div className="descriptionContainer">
                <span className="descriptionTitle">Descrição</span>
                <input type='text' value={userDescription} onChange={(evt) => 
                    setUserDescription(evt.target.value)} className="descriptionInput" 
                    placeholder="Digite aqui sua descrição"></input>
                <span className="exemplo">Ex:Compras de Roupas</span>
            </div>

            <div className="valueContainer">
                <div className="selectValue">
                    <span className="valueTitle">Valor</span>
                    <input type='number' onChange={(evt) =>
                        setUserValue(evt.target.value)} className="valueInput" 
                        placeholder="R$ 10,00"></input>
                </div>
                <div className="selectType">
                    <span className="typeTitle">Tipo de valor</span>
                    <select onChange={(evt) => setUserType(evt.target.value)} className="typeInput">
                        <option>entrada</option>
                        <option>saida</option>
                    </select>
                </div>
            </div>
            <button onClick={() => attList(userDescription, userValue, userType)} className="addDescription">
                Inserir valor
            </button>
        </div>
    )
}

export default Form