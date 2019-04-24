import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { BelezaButton } from '../../styles'
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";


const StepComponent = ({routeName, buttonName}) => {
  return (
      <BelezaButton>
        <NavLink activeStyle={{fontWeight: "bold",color: "red"}}to={ `${routeName}` }>{buttonName}</NavLink>
      </BelezaButton>
  )
}

StepComponent.propTypes = {
  buttonName: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
}

export default StepComponent
