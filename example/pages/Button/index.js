import React, { Component } from 'react'

import Button from 'Components/Button'

import ContentLayout from '@/components/ContentLayout'


class ButtonPage extends Component {
    render () {
        return (
            <ContentLayout>
                <h3>primary - 主要按钮</h3>
                <Button type="primary">按钮</Button>
                <hr/>
                <h3>primary - 主要按钮 - 禁用</h3>
                <Button type="primary" disabled>按钮</Button>
                <hr/>
                <h3>default - 次要按钮</h3>
                <Button type="default">按钮</Button>
                <hr/>
                <h3>default - 次要按钮 - 禁用</h3>
                <Button type="default" disabled>按钮</Button>
                <hr/>
            </ContentLayout>
        )
    }
}

export default ButtonPage
