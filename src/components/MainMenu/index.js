import './MainMenu.css'
import Group277 from './Group 277.svg'
import Logo from './logoNuKenzie.png'

function MainMenu({ setLogin }){
    return(
        <div className='loginPage'>
            
            <div className='logoMainPage'>
                <img src={Logo} alt='logo NuKenzie'/>
                <div className='bigText'>Centralize o controle de suas finanças</div>
                <div className='smallText'>de forma rapida e segura</div>
                <button onClick={()=> setLogin(true)}>Iniciar</button>
            </div>
            <div className='imgMainPage'>
                <img src={Group277} alt='logo'/>
            </div>
        </div>
    )
}
export default MainMenu