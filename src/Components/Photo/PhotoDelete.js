import React from 'react';
import styles from './PhotoDelete.module.css'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_DELETE} from '../../api'
const PhotoDelete = ({id}) => {
    const {loading,request} =useFetch();

    async function handleClick(event) {
        const confirm = window.confirm('Tem certeza que deseja deletar?')
        if(confirm){
            const {url,options} = PHOTO_DELETE(id)
            const {response} = await request(url,options)
            if(response.ok) window.location.reload()
        }
   

    }

  return <>
      {loading?  <button className={styles.delete} onClick={handleClick} disabled>Deletar</button> :  <button className={styles.delete} onClick={handleClick}>Deletar</button>}
  </>;
};

export default PhotoDelete;
