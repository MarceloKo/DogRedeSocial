import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'
import { UserContext } from '../UserContext'

const Header = () => {
    const {data, userLogout} = React.useContext(UserContext)
    
    return (
        <header className={styles.header}>
           <nav className={`${styles.nav} container`}>
               <Link className={styles.logo} to="/" aria-label='Dogs - Home'>
                   <Dogs/>
               </Link>
               {data ? (
               <Link to="/conta" className={styles.login}>{data.nome}</Link>
                  ): (
                  
                <Link to="/login" className={styles.login}>Login / Criar</Link>)}
                <button onClick={userLogout}>Sair</button>
           </nav>
        </header>
    )
}

export default Header
