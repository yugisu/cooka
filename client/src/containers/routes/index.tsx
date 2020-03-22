import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { ROUTES } from 'configs/routes.config'

import { Main } from 'containers/main'

export const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.MAIN} component={Main} />

      <Route render={() => <Redirect to={ROUTES.MAIN} />} />
    </Switch>
  )
}
