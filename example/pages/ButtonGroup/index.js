import React, { Component } from 'react'

import ButtonGroup from 'Components/ButtonGroup'

import ContentLayout from '@/components/ContentLayout'


class ButtonGroupPage extends Component {
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
        const { disabledButton, checked } = this.state

        return (
            <ContentLayout>
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
                <hr />
                <h3>全局定义大小 - 默认'large'; 全局定义宽度 - 默认'180px', flase则'auto'</h3>
                <ButtonGroup
                    globalWidth={false}
                    primary={[
                        {
                            text: '确认1',
                            onClick: () => { console.log('确认1') },
                        },
                        {
                            text: '确认2',
                            onClick: () => { console.log('确认2') },
                        },
                    ]}
                    secondary={[
                        {
                            text: '返回1',
                            onClick: () => { console.log('返回1') },
                        },
                        {
                            text: '返回2',
                            onClick: () => { console.log('返回2') },
                        },
                    ]}
                />
                <ButtonGroup
                    globalWidth={false}
                    globalSize="default"
                    primary={[
                        {
                            text: '确认1',
                            onClick: () => { console.log('确认1') },
                        },
                        {
                            text: '确认2',
                            onClick: () => { console.log('确认2') },
                        },
                    ]}
                    secondary={[
                        {
                            text: '返回1',
                            onClick: () => { console.log('返回1') },
                        },
                        {
                            text: '返回2',
                            onClick: () => { console.log('返回2') },
                        },
                    ]}
                />
                <ButtonGroup
                    globalWidth={false}
                    globalSize="small"
                    primary={[
                        {
                            text: '确认1',
                            onClick: () => { console.log('确认1') },
                        },
                        {
                            text: '确认2',
                            onClick: () => { console.log('确认2') },
                        },
                    ]}
                    secondary={[
                        {
                            text: '返回1',
                            onClick: () => { console.log('返回1') },
                        },
                        {
                            text: '返回2',
                            onClick: () => { console.log('返回2') },
                        },
                    ]}
                />
                <hr />
                <h3>自定义属性 buttons，自定义 type, width, size</h3>
                <ButtonGroup
                    globalWidth={false}
                    globalSize="default"
                    buttons={[
                        {
                            text: 'primary',
                            onClick: () => { console.log('primary') },
                        },
                        {
                            text: 'danger small',
                            onClick: () => { console.log('danger small') },
                            type: 'danger',
                            size: 'small',
                        },
                        {
                            text: 'pending 180px',
                            onClick: () => { console.log('pending 180px') },
                            type: 'pending',
                            width: '180px'
                        },
                        {
                            text: 'warn large',
                            onClick: () => { console.log('warn large') },
                            type: 'warn',
                            size: 'large',
                        },
                        {
                            text: 'primary disabled',
                            onClick: () => { console.log('primary disabled') },
                            disabled: true
                        },
                    ]}
                />
            </ContentLayout>
        )
    }
}

export default ButtonGroupPage
