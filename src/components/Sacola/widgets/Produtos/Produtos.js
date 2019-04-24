import React from 'react'
import PropTypes from 'prop-types'
import { BoxContainer,Box, BoxBody,BoxBodyName, BoxBodyValue } from '../../../../styles'

const Produtos = ({items}) => {
  return (
    <BoxContainer>
      {items.map(item => (
        item.product.imageObjects.map((img, index) => (
          <Box key={`keyProd-${index}`}>
            <div>
              <img src={img.small} alt={`img-${index}`}/>
            </div>
            <BoxBody>
              <BoxBodyName>
                {item.product.name}
              </BoxBodyName>
                <BoxBodyValue>
                  R$ {(item.product.priceSpecification.originalPrice).toFixed(2)}
                </BoxBodyValue>
            </BoxBody>

          </Box>
        ) )
      ))}
      <img src="" alt=""/>
    </BoxContainer>
  )
}

Produtos.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Produtos
