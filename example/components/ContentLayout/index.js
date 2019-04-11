import React from 'react'
import styles from './index.less';

const ContentLayout = ({ children }) => (
    <div className={styles.container}>
        { children }
    </div>
)

export default ContentLayout
