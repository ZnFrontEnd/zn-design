```javascript

import React, { Component } from 'react'
import ButtonGroup from 'components/ButtonGroup'

class TestPage extends Component {

    state = {
        checked: false,
        disabledButton: true,
    }

    changeContract = (e) => {
        const { checked } = e.target
        this.setState({
            checked,
            disabledButton: !checked,
        })
    }

    goOutterSite = () => {
        window.location.href = 'https://translate.google.cn'
    }

    render () {
        const { checked, disabledButton } = this.state

        return (
            <div>
                <h1>按钮组测试</h1>
                <hr />
                <h3>普通</h3>
                <ButtonGroup
                    primary={[
                        {
                            text: '重新发起',
                            onClick: () => { console.log('重新发起') },
                        },
                        {
                            text: '主级禁用',
                            disabled: true,
                            onClick: () => { console.log('禁用') },
                        },
                        {
                            text: '主级隐藏',
                            hide: true,
                        },
                    ]}
                    secondary={[
                        {
                            text: '返回',
                            onClick: () => { console.log('返回') },
                        },
                        {
                            text: '次级禁用',
                            disabled: true,
                            onClick: () => { console.log('禁用') },
                        },
                    ]}
                />
                <hr />
                <h3>仅协议</h3>
                <ButtonGroup
                    contract={[
                        {
                            text: '付款承诺函',
                            link: 'https://translate.google.cn',
                        },
                    ]}
                />
                <hr />
                <h3>查看协议以及下载</h3>
                <ButtonGroup
                    secondary={[
                        {
                            text: '融资撤回',
                            onClick: () => { console.log('融资撤回') },
                        },
                        {
                            text: '返回',
                            onClick: () => { console.log('返回') },
                        },
                    ]}
                    contract={[
                        {
                            text: '付款承诺函',
                            link: 'https://translate.google.cn',
                        },
                        {
                            text: '锌贝壳流转协议',
                            link: 'https://translate.google.cn',
                            download: 'https://translate.google.cn',
                        },
                    ]}
                />
                <hr />
                <h3>合同签署</h3>
                <ButtonGroup
                    primary={[
                        {
                            text: '同意锌贝壳流转协议',
                            disabled: disabledButton,
                            onClick: this.goOutterSite,
                        },
                    ]}
                    secondary={[
                        {
                            text: '撤回',
                            onClick: () => { console.log('撤回') },
                        },
                        {
                            text: '返回',
                            onClick: () => { console.log('返回') },
                        },
                    ]}
                    contract={[
                        {
                            text: '锌贝壳流转协议',
                            link: 'https://translate.google.cn',
                            checkbox: {
                                checked,
                                onChange: this.changeContract,
                            },
                        },
                    ]}
                />
                <hr />
                <h3>表单</h3>
                <ButtonGroup
                    align="center"
                    primary={[
                        {
                            text: '确认',
                            onClick: () => { console.log('确认') },
                        },
                    ]}
                    secondary={[
                        {
                            text: '返回',
                            onClick: () => { console.log('返回') },
                        },
                    ]}
                />
            </div>
        )
    }
}

export default TestPage

```
