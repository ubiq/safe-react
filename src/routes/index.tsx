import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom'

import { LOAD_ADDRESS, OPEN_ADDRESS, SAFELIST_ADDRESS, SAFE_PARAM_ADDRESS, WELCOME_ADDRESS } from './routes'

import Loader from 'src/components/Loader'
import { defaultSafeSelector } from 'src/logic/safe/store/selectors'
import { DEFAULT_SAFE_INITIAL_STATE } from 'src/logic/safe/store/reducer/safe'

const Welcome = React.lazy(() => import('./welcome/container'))

const Open = React.lazy(() => import('./open/container/Open'))

const Safe = React.lazy(() => import('./safe/container'))

const Load = React.lazy(() => import('./load/container/Load'))

const SAFE_ADDRESS = `${SAFELIST_ADDRESS}/:${SAFE_PARAM_ADDRESS}`

const Routes = (): React.ReactElement => {
  const [isInitialLoad, setInitialLoad] = useState(true)
  const location = useLocation()

  const defaultSafe = useSelector(defaultSafeSelector)

  useEffect(() => {
    if (isInitialLoad && location.pathname !== '/') {
      setInitialLoad(false)
    }
  }, [location.pathname, isInitialLoad])

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          if (!isInitialLoad) {
            return <Redirect to={WELCOME_ADDRESS} />
          }

          if (defaultSafe === DEFAULT_SAFE_INITIAL_STATE) {
            return <Loader />
          }

          if (defaultSafe) {
            return <Redirect to={`${SAFELIST_ADDRESS}/${defaultSafe}/balances`} />
          }

          return <Redirect to={WELCOME_ADDRESS} />
        }}
      />
      <Route component={Welcome} exact path={WELCOME_ADDRESS} />
      <Route component={Open} exact path={OPEN_ADDRESS} />
      <Route component={Safe} path={SAFE_ADDRESS} />
      <Route component={Load} exact path={LOAD_ADDRESS} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
