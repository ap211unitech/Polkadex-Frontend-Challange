import { Fragment } from 'react'
import { CardWrapper, AmountCardWrapper, AmountIcon } from './sharedstyles'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';


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
export default CardAmount