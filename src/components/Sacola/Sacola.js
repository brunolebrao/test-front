import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import * as sacolaActions from './sacolaActions'
import { SubTitle, GridBody } from '../../styles'
import Produtos from './widgets/Produtos'
import Valores from './widgets/Valores'
import { get } from 'lodash'

class Sacola extends Component {
  static propTypes = {
    sacola:PropTypes.object,
  }

  componentDidMount() {
    this.props.actions.getProducts()
  }

  render() {
    const { sacola } = this.props
    return (
      <div>
        <SubTitle>PRODUTOS</SubTitle>
        {sacola.isLoading ? <div><LinearProgress/></div>  :
        <Grid container>
          <Grid item xs={12}>
            <GridBody>
              <Produtos items={ get(sacola, ['products', 'items'], []) }/>
            </GridBody>
          </Grid>
          <Grid item xs={12}>
            <GridBody>
              <Valores productValue={ get(sacola, 'products', {}) }/>
            </GridBody>
          </Grid>
        </Grid>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sacola: state.sacola,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(sacolaActions, dispatch)
  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Sacola))
