import React from 'react'
import Header from './header'
import * as styles from "./styles.module.css"
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Layout
