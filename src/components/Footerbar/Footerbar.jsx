import React from 'react';
import styles from './Footerbar.module.css';

const Footerbar=()=>{
    return(
        <footer className={styles.container}>            
            <div className={styles.footer}>
               <h6>-- Created By Rahul Prasad --</h6> 
            </div>
        </footer>
    )
};

export default Footerbar;