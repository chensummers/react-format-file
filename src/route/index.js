import React from 'react';
import { Router, Route, Switch, withRouter } from 'dva/router';
import dynamic from 'dva/dynamic';
import Layout from '@/layout'
import routes from './routes'

function RouterCompontent({ history, app, ...rest }) {
    return (
        <Router history={history}>
            <Switch>
                <Layout>
                    {
                        routes.map(({ path,exact, ...dynamics }, index) => {
                            return <Route key={index} path={path} exact={exact} component={dynamic({ app, ...dynamics })} />
                        })
                    }
                </Layout>
            </Switch>
        </Router>
    )
}

export default RouterCompontent