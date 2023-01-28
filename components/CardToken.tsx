import { Fragment } from 'react'
import { CardWrapper } from './sharedstyles'
import style from './style.module.css'
import { FaEthereum } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';

const CardToken = ({ setCardToDisplay, items, setToken }) => {
    const handleChange = (e) => {
        e.stopPropagation();
        setToken(prev => ({ ...prev, title: e.target.value }));
        setCardToDisplay(2);
    }
    return (
        <Fragment>
                <CardWrapper left={"-10%"}>
                    <p style={{ fontSize: '14px' }}>
                        Choose token
                    </p>

                    {items?.map(item => (
                        <label>
                            <input type="radio" name="option" value={item.text} className={style.card_input_radio} onChange={handleChange} />
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


export default CardToken