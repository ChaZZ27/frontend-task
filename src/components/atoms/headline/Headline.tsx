import styles from'./Headline.module.sass'
import clsx from 'clsx';
import React, { ReactNode } from 'react';

const Headline = ({text, className, centered, children}: {text: ReactNode, className?: string, centered?: true, children?: ReactNode}) => {
    const headlineClasses = clsx(styles.headline, className)

    return (
        <>
            <h1 className={headlineClasses} style={centered && {textAlign: 'center'}}>{text}</h1>
            {children}
        </>
    )
}

export default Headline;