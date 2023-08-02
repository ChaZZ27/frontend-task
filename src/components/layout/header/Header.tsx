import React from 'react';
import { Logo } from '@/atoms/logo/Logo';
import styles from './Header.module.sass'
import { Nav } from '@/atoms/nav/Nav';
import { NavItem } from 'types/header';

const navigationData: NavItem[] = [
  ['Home', '/']
]

export const Header: React.FC= () => {
  return (
  <header className={styles.header}>
    <div className={styles.container}>
      <Logo type='core'/>
      <Nav items={navigationData} />
    </div>
  </header>
  )
}