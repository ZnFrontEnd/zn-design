import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import styles from './index.less'

const CustomButton = ({ type, width, style, className, disable, ...otherProps }) => (
    <Button
        className={`${styles.button} ${styles[type]} ${className}`}
        style={{
            width,
            ...style,
        }}
        {...otherProps}
        type="default"
    />
)

CustomButton.defaultProps = {
    type: 'primary',
    width: '100%',
}
CustomButton.propTypes = {
    type: PropTypes.oneOf(['primary', 'blueLine', 'whiteLine', 'default', 'gary']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default CustomButton
