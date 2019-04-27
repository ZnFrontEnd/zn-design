import React, { Component } from 'react'

import BasicTable from 'Components/BasicTable'

import ContentLayout from '@/components/ContentLayout'


class BasicTablePage extends Component {
    render () {

        return (
            <ContentLayout>
                <h3>基本用法</h3>
                <BasicTable
                    columns={[
                        {
                            dataIndex: 'date',
                            type: 'date', // 自动将日期转换
                            title: '日期',
                            format: 'YYYY-MM-DD hh:mm:ss', // 默认
                        },
                        {
                            dataIndex: 'amount',
                            type: 'amount', // 自动加千分符，（暂无，可先加上）
                            title: '金额',
                        },
                        {
                            type: 'oprate', // 增加操作列
                            title: '操作', // 默认
                            dataIndex: 'toolcol', // 默认
                            buttons: [
                                {
                                    text: '按钮',
                                    onClick: () => {} // 传递record
                                    // ... // 其他跟antd Button的参数一致
                                }
                            ]
                         }
                    ]}
                    dataSource={[
                        { date: '2019-12-30', amount: '1000' },
                        { date: '2019-12-30', amount: '1000' },
                        { date: '2019-12-30', amount: '1000' },
                        { date: '2019-12-30', amount: '1000' },
                    ]}
                />
            </ContentLayout>
        )
    }
}

export default BasicTablePage
