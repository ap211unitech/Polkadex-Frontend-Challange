import Head from 'next/head'
import { Container, ModuleBorderWrap, Wrapper, Icon, SecondaryIcon } from '../components/sharedstyles'
import Button from '../components/button';
import { CiSearch } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Home() {

  const [menu, setMenu] = useState(false);

  const [token, setToken] = useState({
    title: 'Choose token',
    subTitle: 'Any token',
    items: [
      { text: 'Ethereum', subText: 'ETH' },
      { text: 'Cardano', subText: 'ADA' },
    ]
  });

  const [chain, setChain] = useState({
    title: 'Select Chain',
    subTitle: 'Any Chain',
    items: [
      { text: 'Ethereum Mannet', subText: null },
      { text: 'Ropsten', subText: null },
    ]
  });

  const [amount, setAmount] = useState({
    title: 'Filter by amount',
    subTitle: 'Any amount',
    items: []
  });

  const [cardToDisplay, setCardToDisplay] = useState(1);

  const [amounts, setAmounts] = useState({
    min: 1,
    max: 10
  });

  const handleAmountsChange = (key) => {
    const change = {
      [key]: key === 'max' ? amounts['max'] + 1 : amounts['min'] - 1
    }
    setAmounts({ ...amounts, ...change })
  }

  useEffect(() => {
    document.addEventListener('click', handleOutSideClick, true);
  }, [])
  const refOne = useRef(null);
  const handleOutSideClick = (e) => {
    if (!refOne.current.contains(e.target)) {
      console.log('Clicked outside');
      setCardToDisplay(0);
    }
  }


  return (
    <Container>
      <Head>
        <title>Polkadex Frontend Developer Challange</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!menu ? <ModuleBorderWrap>
        <Wrapper onClick={() => setMenu(true)} ref={refOne}>
          <Button setCardToDisplay={setCardToDisplay} text={token.subTitle} />
          <Button setCardToDisplay={setCardToDisplay} text={chain.subTitle} />
          <Button setCardToDisplay={setCardToDisplay} text={amount.subTitle} />
          <Icon>
            <CiSearch size={'20'} />
          </Icon>
        </Wrapper>
      </ModuleBorderWrap>
        :
        <motion.div
          initial={{ scaleX: 0.5, scaleY: 0.5 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ModuleBorderWrap isMenuVisible={menu}>
            <Wrapper ref={refOne}>

              <Button cardToDisplay={cardToDisplay} setCardToDisplay={setCardToDisplay} subText={token.subTitle} text={token.title} tokenItems={token.items} setToken={setToken} />

              <Button cardToDisplay={cardToDisplay} setCardToDisplay={setCardToDisplay} subText={chain.subTitle} text={chain.title} chainItems={chain.items} chain={chain} setChain={setChain} />

              <Button cardToDisplay={cardToDisplay} setCardToDisplay={setCardToDisplay} subText={amount.subTitle} text={amount.title} amounts={amounts} setAmounts={handleAmountsChange} />

              <SecondaryIcon>
                <CiSearch size={'24'} />
                <span style={{ marginLeft: 4 }}>
                  Search
                </span>
              </SecondaryIcon>
            </Wrapper>
          </ModuleBorderWrap>
        </motion.div>
      }

    </Container>
  )
}


