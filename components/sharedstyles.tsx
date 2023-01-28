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

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
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
    background:  ${(props) => (props.isMenuVisible ? "#8a8a8a" : "linear-gradient(to right, rgb(230, 0, 122) 0%, #3f4e9c 55% )")};
    padding: 1.6px 1.6px 1.6px 1.6px;
    border-radius: 14px;
`

export { Container, Main, Title, Description, CodeTag, Icon, ModuleBorderWrap, Wrapper, SecondaryIcon }
