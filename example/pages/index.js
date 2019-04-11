import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom'

import Button from './Button'
import ButtonGroup from './ButtonGroup'
import SearchForm from './SearchForm'
import BasicTable from './BasicTable'

import styles from './index.less'

const menus = [
    {
        name: '按钮',
        key: '/button',
    },
    {
        name: '按钮组',
        key: '/button-group',
    },
    {
        name: '基础表格',
        key: '/basic-table',
    },
    {
        name: '搜索表单',
        key: '/search-form',
    },
]

class IndexApp extends Component {
    state = {
    }

    componentDidMount () {
    }

    render () {
        return (
            <Router>
                <ul className={styles.menu}>
                    {
                        menus.map(menu => (
                            <li
                                key={menu.key}
                            >
                                <NavLink
                                    to={menu.key}
                                    className={styles.menuItem}
                                    activeClassName={styles.menuActive}
                                >
                                    { menu.name }
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <Switch>
                    {/* <Route path="/" component={<div>lllllll</div>} /> */}
                    <Route path="/button" component={Button} />
                    <Route path="/button-group" component={ButtonGroup} />
                    <Route path="/basic-table" component={BasicTable} />
                    <Route path="/search-form" component={SearchForm} />
                </Switch>
            </Router>
        )
    }

}

export default IndexApp
