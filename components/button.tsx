import styled from 'styled-components'
import Link from 'next/link'
import { Fragment } from 'react'

export const Button = styled.button`
    border: none;
    outline: none;
    background: none;
    color: white;
    padding-right:70px;
    cursor:pointer;
    color: white;
`

export default function Cards({ text }) {
    return (
        <Fragment>
            <Button>{text}</Button>
        </Fragment>
    )
}
