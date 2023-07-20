import React, { ReactNode } from 'react'
import { styled } from 'styled-components'
import { GlobalStyle } from '../Styles/GlobalStyles'

type TypePropsButton = {
    children: ReactNode
    colorContent: string
    backgroundBtn: string
    callBack: () => void
}

export const Button: React.FC<TypePropsButton> = (props) => {

    const {children, colorContent, backgroundBtn, callBack} = props

    const onClickHandler = () => {
        callBack()
    }

    return (
        <WrapperButton onClick={onClickHandler}>
            <ButtonLeft color={colorContent} backgroundbtn={backgroundBtn}>{children}</ButtonLeft>
            <ButtonRight color={colorContent} backgroundbtn={backgroundBtn}>
                <InsideBlock>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                        <path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" stroke={colorContent} strokeWidth="2" />
                    </svg>
                </InsideBlock>
            </ButtonRight>
        </WrapperButton>
    )
}

const WrapperButton = styled.div`
    display: flex;
    border: 1px solid #FFF;
    flex-basis: 41%;
    cursor: pointer;
`
type TypeButton = {
    color: string
    backgroundbtn: string
}

const ButtonLeft = styled.div<TypeButton>`
    display: flex;
    width: 81%;
    height: 71px;
    background: ${props=>props.backgroundbtn ? props.backgroundbtn : ''};
    color: ${props=>props.color};
    font-family: ${GlobalStyle.fontFamilyRaleway};
    font-size: 18px;
    font-style: ${GlobalStyle.fontStyle};
    font-weight: ${GlobalStyle.fontWeight600};
    line-height: 122.8%;
    align-items: center;
    justify-content: center;
`
const ButtonRight = styled.div<TypeButton>`
    position: relative;
    width: 19%;
    height: 71px;
    border-left: 2px solid ${props=>props.color};
    background: ${props=>props.backgroundbtn ? props.backgroundbtn : ''};
    align-items: center;
    justify-content: center;
`
const InsideBlock = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    right: 13px;
    bottom: 13px;
`