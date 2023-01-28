import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  font-family:'roboto',sans-serif!important;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  gap:30px;
  color: white;
  font-size:medium;
  padding: 6px 4px 6px 30px;
  border-radius: 14px;
  background: black;
`

const Icon = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  color: white;
  font-size:medium;
  padding:10px;
  border-radius:8px;
  cursor: pointer;
  box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
  background-color: rgb(228 228 228 / 16%); 
  backdrop-filter: blur(8px); /* Chrome and Opera */
  -webkit-backdrop-filter: blur(8px);  /* Safari 9+ */
`

const SecondaryIcon = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  color: white;
  font-size:15px;
  padding:10px 16px;
  border-radius:8px;
  cursor: pointer;
  box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
  background-color: rgb(230, 0, 122); 
`

const ModuleBorderWrap = styled.div`
    position: relative;
    background: linear-gradient(to right, rgb(230, 0, 122) 0%, #3f4e9c 55% );
    padding: 1.6px 1.6px 1.6px 1.6px;
    border-radius: 14px;
`


const Button = styled.button`
    position: relative;
    border: none;
    outline: none;
    background: none;
    color: white;
    padding-right:70px;
    cursor:pointer;
    color: white;
    display: inline-block;
    text-align: left;
`

const Subtext = styled.div`
    color: gray;
    padding-bottom: 5px;
    font-size: small;
`

interface PropsLeftMargin {
  left: string;
}
const CardWrapper = styled.div<PropsLeftMargin>`
    position: absolute;
    top: -380%;
    left: ${prop => prop["left"]};
    font-size: small;
    background-color: white;
    color: black;
    border-radius: 14px;
    padding:0px 10px 4px 14px;
    height: 210px;
    width: 40%;
    p{
        font-size: 14px;
        font-weight: 500;
    }
`

const AmountCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const AmountIcon = styled.span`
    background: lightgray;
    color: white;
    padding: 4px 6px;
    margin-left: 6px;
    border-radius: 4px;
    font-size: smaller;
    cursor: pointer;
`
interface PropsIsClicked {
  isClicked: boolean;
}
const CardChainLabel = styled.label<PropsIsClicked>`
    border: ${props => props['isClicked'] ? '1px solid rgb(230,0,122)' : '1px solid gray'};
    border-radius: 8px;
    padding: 10px 6px;
    position: relative;
`

const CardChainSelect = styled.span<PropsIsClicked>`
    position: absolute;
    right: 4px;
    background: ${props => props['isClicked'] ? 'rgb(230,0,122)' : '#e7e7e7'};
    color: ${props => props['isClicked'] ? 'white' : 'black'};;
    padding: 6px 11px;
    border-radius: 6px;
    font-weight: 500;
`

const CardChainRadio = styled.span<PropsIsClicked>`
    border: none;
    outline: none;
    background: ${props => props["isClicked"] ? 'rgb(230,0,122)' : 'lightgray'};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 6px;
`

export { Container, Main, Icon, ModuleBorderWrap, Wrapper, SecondaryIcon, Button, Subtext, CardWrapper, AmountCardWrapper, AmountIcon, CardChainLabel, CardChainRadio, CardChainSelect }
