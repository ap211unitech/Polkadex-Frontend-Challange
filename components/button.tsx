import styled from 'styled-components'
import { Fragment } from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import style from './style.module.css'
import { motion } from 'framer-motion';
import { FaEthereum } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';

export const Button = styled.button`
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

export const Subtext = styled.div`
    color: gray;
    padding-bottom: 5px;
    font-size: small;
`

export const CardWrapper = styled.div`
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

const CardAmount = ({ cardText, amount, setAmount }) => {
    return (
        <Fragment>
            <CardWrapper left={"52%"}>
                <p style={{ fontSize: '14px' }}>
                    {cardText}
                </p>

                <AmountCardWrapper>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
                        <div>
                            Max Amount
                        </div>
                        <div>
                            {amount?.max}
                            <AmountIcon onClick={() => setAmount('max')}>
                                <BiUpArrow />
                            </AmountIcon>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
                        <div>
                            Min Amount
                        </div>
                        <div>
                            {amount?.min}
                            <AmountIcon onClick={() => setAmount('min')}>
                                <BiDownArrow />
                            </AmountIcon>
                        </div>
                    </div>
                </AmountCardWrapper>

            </CardWrapper>
        </Fragment >
    )
}



const CardToken = ({ cardText, items }) => {
    return (
        <Fragment>
            <CardWrapper left={"-10%"}>
                <p style={{ fontSize: '14px' }}>
                    {cardText}
                </p>

                {items?.map(item => (
                    <label>
                        <input type="radio" name="option" className={style.card_input_radio} />
                        <div className={style.card} style={item.subText === 'ETH' ? { marginRight: 10 } : {}}>
                            <span>
                                {item.subText == 'ETH' ? <FaEthereum /> : <BsFillSunFill color='#00ADF2' />}
                            </span>
                            <span>
                                {item.text}
                            </span>
                            <span>
                                {item.subText}
                            </span>
                        </div>
                    </label>
                ))}

            </CardWrapper>
        </Fragment >
    )
}

export default function Buttons({ cardToDisplay = 1, setCardToDisplay, text, subText = undefined, setState, amounts = null, setAmounts = null, tokenItems = null }) {


    const handleClick = () => {
        if (text.includes('token')) { setCardToDisplay(1); }
        else if (text.includes('chain')) { setCardToDisplay(2); }
        else if (text.includes('amount')) { setCardToDisplay(3); }
    }

    return (
        <Fragment>
            {cardToDisplay == 1 && subText && text.includes('token') && <CardToken cardText={text} items={tokenItems} />}
            {/* {subText && text.includes('amount') && <CardAmount cardText={text} amount={amounts} setAmount={setAmounts} />} */}
            {cardToDisplay == 3 && subText && text.includes('amount') && <CardAmount cardText={text} amount={amounts} setAmount={setAmounts} />}
            <Button onClick={handleClick}>
                {subText && <Subtext>
                    {subText}
                </Subtext>}
                {text}
            </Button>
        </Fragment>
    )
}
