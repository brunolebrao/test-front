import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress';
import { GlobalStyle } from './styles'


const StepContainer = React.lazy(() => import('./containers/StepContainer'))
const Sacola = React.lazy(() => import('./components/Sacola'))
const Pagamento = React.lazy(() => import('./components/Pagamento'))
const Confirmacao = React.lazy(() => import('./components/Confirmacao'))



class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Suspense fallback={<LinearProgress/>}>
          <Router>
            <Grid container>
              <Grid item xs={12}>
                <StepContainer/>
              </Grid>
            </Grid>
            <div>
              <Route exact path="/" component={Sacola} />
              <Route exact path="/pagamento" component={Pagamento} />
              <Route exact path="/confirmacao" component={Confirmacao} />
            </div>
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default App;
