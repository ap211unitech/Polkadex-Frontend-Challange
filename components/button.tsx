import styled from 'styled-components'
import { Fragment } from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

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

export const CardWrapper = styled.span`
    position: absolute;
    top: -280%;
    font-size: small;
    background-color: white;
    color: black;
    border-radius: 14px;
    padding:4px 16px 4px 16px;
    height: 150px;
    width: 48%;
    p{
        font-size: 14px;
    }
`

const CardAmount = ({ cardText, amount, setAmount }) => {
    return (
        <Fragment>
            <CardWrapper>
                <p style={{ fontSize: '14px' }}>
                    {cardText}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
                        <div>
                            Max Amount
                        </div>
                        <div>
                            {amount?.max}
                            <span style={{ background: 'lightgray', color: 'white', padding: '4px 6px', marginLeft: 6, borderRadius: 4, fontSize: 'smaller', cursor: 'pointer' }} onClick={() => setAmount('max')}>
                                <BiUpArrow />
                            </span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
                        <div>
                            Min Amount
                        </div>
                        <div>
                            {amount?.min}
                            <span style={{ background: 'lightgray', color: 'white', padding: '4px 6px', marginLeft: 6, borderRadius: 4, fontSize: 'smaller', cursor: 'pointer' }} onClick={() => setAmount('min')}>
                                <BiDownArrow />
                            </span>
                        </div>
                    </div>
                </div>

            </CardWrapper>
        </Fragment >
    )
}

export default function Buttons({ text, subText = undefined, setState, amounts, setAmounts }) {
    return (
        <Fragment>
            {subText && text.includes('amount') && <CardAmount cardText={text} amount={amounts} setAmount={setAmounts} />}
            <Button>
                {subText && <Subtext>
                    {subText}
                </Subtext>}
                {text}
            </Button>
        </Fragment>
    )
}
