import React, { Component } from 'react'

import SearchForm from 'Components/SearchForm'

import ContentLayout from '@/components/ContentLayout'


class SearchFormPage extends Component {
    render () {
        return (
            <ContentLayout>
                <h3>基本用法</h3>
                <SearchForm
                    data={[
                        {
                            label: '名称',
                            type: 'input',
                            key: 'name',
                        },
                        {
                            label: '状态',
                            type: 'select',
                            options: [
                                { key: 1, value: '所有' },
                                { key: 2, value: '已经' },
                                { key: 3, value: '没有' },
                            ],
                            key: 'status',
                        },
                        {
                            label: '时间',
                            type: 'datepicker',
                            key: 'date',
                            dateFormat: 'YYYY-MM-DD',
                        },
                        {
                            label: '范围时间',
                            type: 'rangepicker',
                            key: 'rangedate',
                            dateFormat: 'YYYY-MM-DD',
                        },
                    ]}
                    onSearch={this.handleSearchForm}
                    onDownload={this.handleDownload}
                />
            </ContentLayout>
        )
    }
}

export default SearchFormPage
