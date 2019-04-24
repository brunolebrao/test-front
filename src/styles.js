import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #eeeeee;
  }
`

export const BelezaButton = styled.div`
  text-align: center;
a {
  color: #FF7800;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
  text-decoration: none;
}
`
export const SubTitle = styled.h2`
  color: #999;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  margin-left:20px;
`
export const Gridheader = styled.div`
  display:flex;
  height: 72px;
  width: 100%;
  min-width: 387px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`
export const GridBody = styled.div`
  display:flex;
  height: auto;
  min-width: 341px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 15px 15px 0 15px;
  margin: 0 9px 0 9px;
`
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Box = styled.div`
  display: flex;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #EEE;
  margin-bottom: 15px;
  padding: 5px;
  width: 100%;
  min-width: 316px;
  div {
    color: #212122;
    font-size: 13px;
    line-height: 16px;
    margin-left: 15px;
  }
`
export const BoxBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #212122;
  font-size: 13px;
  line-height: 16px;
  margin-left: 15px;
  width:100%;
  justify-content: space-between;
`
export const BoxBodyName = styled.div`
margin-top: 12px;
margin-right: 10px;
align-self: flex-start;
`

export const BoxBodyValue = styled.div`
margin-bottom: 14px;
margin-right: 10px;
height: 17px;
color: #212122;
font-size: 14px;
font-weight: 700;
line-height: 17px;
`
export const BoxValue = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #CCC;
  width: 100%;
  padding: 15px;
`
export const BoxValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  div {
  color: #212122;
  font-size: 14px;
  line-height: 17px;
  }
`
export const BoxValueContainerDis = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  div {
    color: #FF7800;
    font-size: 14px;
    line-height: 17px;
  }
`
export const BoxValueContainerTot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  div{
    color: #212122;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
  }
`
