import './card.css'
function Card({ item }){
    if(item.type === 'entrada'){
        return(
            <div className="cardEntrada">
                <div className="indentificador"></div>
                <div className='infoCard'>
                    <div className='cardDescription'>{item.description}</div>
                    <div className='typeDescription'>{item.type}</div>
                    <div className='valueDescription'>R$ {item.value}</div>
                </div>
            </div>
        )
    }else {
        return(
            <div className="cardSaida">
                <div className="indentificador"></div>
                <div className='infoCard'>
                    <div className='cardDescription'>{item.description}</div>
                    <div className='typeDescription'>{item.type}</div>
                    <div className='valueDescription'>R$ {item.value}</div>
                </div>
            </div>
        )
    }
}

export default Card