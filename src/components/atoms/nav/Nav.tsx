import React from 'react';
import Link from 'next/link'
import styles from'./Nav.module.sass'
import { NavProps } from 'types/header';

export const Nav: React.FC<NavProps> = ({items}) => {
    
    return <nav className={styles.nav}>
        {items.map(([title, url], index) => <Link key={index} href={url} title={title}>{title}</Link>)}
    </nav>
}