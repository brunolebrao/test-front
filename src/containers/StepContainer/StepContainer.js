import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import StepComponent from '../../components/StepComponent'
import { Gridheader } from '../../styles'

export default class StepContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Gridheader>
        <Grid container justify={ 'center' } alignItems={ 'center' }>
          <Grid item xs>
            <StepComponent routeName={'/'} buttonName={'SACOLA'} />
          </Grid>
          <Grid item xs>
            <StepComponent routeName={'/pagamento'} buttonName={'PAGAMENTO'} />
          </Grid>
          <Grid item xs>
            <StepComponent routeName={'/confirmacao'} buttonName={'CONFIRMAÇÃO'} />
          </Grid>
        </Grid>
      </Gridheader>

    )
  }
}
