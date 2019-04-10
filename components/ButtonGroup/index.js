import React, { Component, Fragment } from 'react'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import Button from 'components/Button'

import styles from './index.less'

class ButtonGroup extends Component {
    generatePrimaryButton = ({ text, hide, ...params }, index) => {
        if (hide) {
            return null
        }
        return (
            <Button key={index} className={styles.groupButton} width="180px" {...params}>
                {text}
            </Button>
        )
    }

    generateSecondaryButton = ({ text, hide, ...params }, index) => {
        if (hide) {
            return null
        }
        return (
            <Button
                key={index}
                className={styles.groupButton}
                width="180px"
                type="default"
                {...params}
            >
                {text}
            </Button>
        )
    }

    generateContract = ({ text, link, download, checkbox, hide }, index) => {
        if (hide) {
            return null
        }
        return (
            <div className={styles.contractWrap} key={index}>
                {checkbox && (
                    <Checkbox checked={checkbox.checked} onChange={checkbox.onChange}>
                        同意
                    </Checkbox>
                )}
                <a
                    href={link}
                    className={styles.contractLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
                {download && (
                    <Fragment>
                        <span className={styles.divide} />
                        <a href={download} target="_blank" rel="noopener noreferrer">
                            下载
                        </a>
                    </Fragment>
                )}
            </div>
        )
    }

    render() {
        const { align, primary, secondary, contract } = this.props

        return (
            <div className={`${styles.container} ${styles[align]}`}>
                {primary.map(this.generatePrimaryButton)}
                {secondary.map(this.generateSecondaryButton)}
                {contract.map(this.generateContract)}
            </div>
        )
    }
}

ButtonGroup.defaultProps = {
    align: 'right',
    primary: [],
    secondary: [],
    contract: [],
}

ButtonGroup.propTypes = {
    align: PropTypes.string,
    primary: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.node.isRequired,
            onClick: PropTypes.func,
            disabled: PropTypes.bool,
            hide: PropTypes.bool,
        })
    ),
    secondary: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.node.isRequired,
            onClick: PropTypes.func,
            disabled: PropTypes.bool,
            hide: PropTypes.bool,
        })
    ),
    contract: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.node.isRequired,
            link: PropTypes.string,
            download: PropTypes.string,
            checkbox: PropTypes.object,
            hide: PropTypes.bool,
        })
    ),
}

export default ButtonGroup
