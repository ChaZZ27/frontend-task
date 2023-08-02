import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from './Main.module.sass'

export interface MainContentProps {
  children: ReactNode
}

export const Main: React.FC<MainContentProps> = ({children}) => {
  return <>
    <Head>
      <title>Gigaclear</title>
      <meta name='description' content='Gigaclear blog' />
    </Head>
    <main className={styles.main}>
      {children}
    </main>
  </>
}