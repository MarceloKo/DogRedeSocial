import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';
const UserHeader = () => {
    const[title,setTitle] = React.useState('');
    const location = useLocation();

    React.useEffect(()=>{
        setTitle(location.pathname)
        const {pathname}=location;
        switch(pathname){
            case '/conta/postar':
                setTitle('Poste sua foto')
                break;
            case '/conta/estisticas':
                setTitle('Estatísticas')
                break;
            default:
                setTitle('Minha conta')
        }
    },[location])
    
    return (
        <header className={styles.header}>
           <h1 className='title'>{title}</h1>
           <UserHeaderNav/>
        </header>
    )
}

export default UserHeader
