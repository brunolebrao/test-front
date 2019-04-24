import React from 'react'
import PropTypes from 'prop-types'
import { BoxValue, BoxValueContainer,BoxValueContainerDis, BoxValueContainerTot } from '../../../../styles'

const Valores = ({productValue}) => {
  const total = productValue.subTotal + productValue.shippingTotal - productValue.discount
  return (
    <BoxValue>
      <BoxValueContainer>
        <div>
          PRODUTOS
        </div>
        <div>
          {parseFloat(productValue.subTotal).toFixed(2)}
        </div>
      </BoxValueContainer>
      <BoxValueContainer>
      <div>
        FRETE
      </div>
      <div>
        {parseFloat(productValue.shippingTotal).toFixed(2)}
      </div>
      </BoxValueContainer>
      <BoxValueContainerDis>
      <div>
        DESCONTO
      </div>
      <div>
        -{parseFloat(productValue.discount).toFixed(2)}
      </div>
      </BoxValueContainerDis>
      <BoxValueContainerTot>

      <div>
        TOTAL
      </div>
      <div>
        {total.toFixed(2)}
      </div>
      </BoxValueContainerTot>
    </BoxValue>
  )
}

Valores.propTypes = {
  productValue: PropTypes.object.isRequired,
}

export default Valores
