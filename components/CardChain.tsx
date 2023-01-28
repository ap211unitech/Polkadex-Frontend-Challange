import { Fragment, useState, useEffect } from 'react'
import { CardWrapper, CardChainLabel, CardChainRadio, CardChainSelect } from './sharedstyles'
import style from './style.module.css'

const CardChain = ({ setCardToDisplay, items, setChain, chain }) => {

    const [click, setClick] = useState(0);

    useEffect(() => {
        if (chain.title === 'Ropsten') setClick(2);
        else if (chain.title === 'Ethereum Mannet') setClick(1);
    }, [])

    const handleChange = (e) => {
        e.stopPropagation();
        setChain(prev => ({ ...prev, title: e.target.value }));
        if (e.target.value === 'Ropsten') {
            setClick(2);
        }
        else {
            setClick(1);
        }
    }

    return (
        <Fragment>
            <CardWrapper left={"18%"}>
                <p style={{ fontSize: '14px' }}>
                    Select chain
                </p>

                <div className={style.card_chain}>
                    {items?.map((item, index) => (
                        <CardChainLabel isClicked={click == index + 1}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type='radio' name='option' value={item.text} className={style.card_input_radio_2} onChange={handleChange} />
                                <CardChainRadio isClicked={click == index + 1} />
                                <span>
                                    {item.text}
                                </span>
                                <CardChainSelect isClicked={click == index + 1}>
                                    Select
                                </CardChainSelect>
                            </div>
                        </CardChainLabel>
                    ))}
                </div>
            </CardWrapper>
        </Fragment >
    )
}

export default CardChain