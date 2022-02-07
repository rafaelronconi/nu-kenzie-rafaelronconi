// List que cria a lista de transações feitas
import Card from "../Card"
import './List.css'
// Recebe a lista de transações 'listTransactions' 
// e apartir dela realiza um map para renderizar uma ul
function List({ listTransactions }){
    if (listTransactions.length === 0){
        return(
            <div className="emptyList">
                <span className="emptyText">Voce nao tem nenhum lançamento recente</span>
                
                <div className="emptyCard">
                    <div className="emptyIndentificador"></div>
                    <div className="maior"></div>
                    <div className="menor"></div>
                </div>
                
                <div className="emptyCard">
                    <div className="emptyIndentificador"></div>
                    <div className="maior"></div>
                    <div className="menor"></div>
                </div>
                
                <div className="emptyCard">
                    <div className="emptyIndentificador"></div>
                    <div className="maior"></div>
                    <div className="menor"></div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="list">
                <ul>
                    {listTransactions.map((item, index) => {
                        return (
                            <li key={index}>
                                <Card item={item}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default List