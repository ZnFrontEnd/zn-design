import React, { Component } from 'react'

import Button from 'Components/Button'

import ContentLayout from '@/components/ContentLayout'

const SplitWrap = () => <span style={{ marginLeft: '10px', marginRight: '10px' }} />

class ButtonPage extends Component {
    render () {
        return (
            <ContentLayout>
                <h3>primary - 主要按钮</h3>
                <Button type="primary">主要 - type="primary"</Button>
                <SplitWrap />
                <Button type="primary" disabled>主要 - 禁用 - type="primary" disabled</Button>
                <hr/>
                <h3>default - 次要按钮</h3>
                <Button type="default">次要 - type="default"</Button>
                <SplitWrap />
                <Button type="default" disabled>次要 - 禁用 - type="default" disabled</Button>
                <hr/>
                <h3>状态按钮</h3>
                <Button type="warn">警告 - type="warn"</Button>
                <SplitWrap />
                <Button type="danger">危险 - type="danger"</Button>
                <SplitWrap />
                <Button type="pending">等待 - type="pending"</Button>
                <hr/>
                <h3>不同大小按钮</h3>
                <Button type="primary" size="small">小 - size="small"</Button>
                <SplitWrap />
                <Button type="primary" size="default">默认 - size="small"</Button>
                <SplitWrap />
                <Button type="primary" size="large">大 - size="small"</Button>
                <hr/>
            </ContentLayout>
        )
    }
}

export default ButtonPage
