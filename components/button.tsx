import { Fragment } from 'react'
import { Button, Subtext } from './sharedstyles'
import CardAmount from './CardAmount';
import CardToken from './CardToken';
import CardChain from './CardChain';


export default function Buttons({ cardToDisplay = 1, setCardToDisplay, text, subText = undefined, amounts = null, setAmounts = null, tokenItems = null, chainItems = null, setToken, chain, setChain }) {


    const handleClick = () => {
        if (subText === null || subText === undefined) return;
        if (subText.toLowerCase().includes('token')) { setCardToDisplay(1); }
        else if (subText.toLowerCase().includes('chain')) { setCardToDisplay(2); }
        else if (subText.toLowerCase().includes('amount')) { setCardToDisplay(3); }
    }

    return (
        <Fragment>

            {cardToDisplay === 1 && subText && subText.toLowerCase().includes('token') && <CardToken setCardToDisplay={setCardToDisplay} items={tokenItems} setToken={setToken} />}

            {cardToDisplay === 2 && subText && subText.toLowerCase().includes('chain') && <CardChain setCardToDisplay={setCardToDisplay} items={chainItems} setChain={setChain} chain={chain} />}

            {cardToDisplay === 3 && subText && subText.toLowerCase().includes('amount') && <CardAmount cardText={text} amount={amounts} setAmount={setAmounts} />}

            <Button onClick={handleClick}>
                {subText && <Subtext>
                    {subText}
                </Subtext>}
                {text}
            </Button>
        </Fragment>
    )
}
