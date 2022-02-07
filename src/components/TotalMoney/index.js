import './totalMoney.css'
function TotalMoney({ listTransactions }){
    return(
        <div className="total">
            <span className='totalText'>Valor Total:</span>
            <span className='totalValue'>R$ {listTransactions.reduce(
                (accumulator, currentValue) => {
                    return accumulator + currentValue.value
                }, 0
            )}</span>
        </div>
    )
}
export default TotalMoney