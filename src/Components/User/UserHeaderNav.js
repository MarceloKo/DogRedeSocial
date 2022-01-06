import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg'
import {ReactComponent as Adicionar} from '../../Assets/adicionar.svg'
import {ReactComponent as Sair} from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
const UserHeaderNav = () => {
    const {userLogout} = React.useContext(UserContext)
    const [mobile,setMobile] = React.useState(null)

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <MinhasFotos/> 
                {mobile && 'Minhas Fotos' }
                
            </NavLink>

            <NavLink to="/conta/estatisticas">
                <Estatisticas/>
                {mobile && 'Estatísticas' }
                
            </NavLink>

            <NavLink to="/conta/postar">
                <Adicionar/>
                {mobile && 'Adicionar Foto' }
                
            </NavLink>

            <button onClick={userLogout}>{' '}<Sair/>sair</button>
        </nav>
    )
}

export default UserHeaderNav
