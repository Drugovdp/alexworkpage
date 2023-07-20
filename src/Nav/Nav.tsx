import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../Styles/GlobalStyles'

type TypePropsNav = {}

export const Nav: React.FC<TypePropsNav> = (props) => {

    const { } = props

    return (
        <WrapperNav>
            <NavUl>
                <NavUlLi><a href='#'>Обо мне</a></NavUlLi>
                <NavUlLi><a href='#'>Наставничество</a></NavUlLi>
                <NavUlLi><a href='#'>Мероприятия</a></NavUlLi>
                <NavUlLi><a href='#'>Кейсы</a></NavUlLi>
                <NavUlLi><a href='#'>Отзывы</a></NavUlLi>
                <NavUlLi><a href='#'>Контакты</a></NavUlLi>
            </NavUl>
        </WrapperNav>
    )
}

const WrapperNav = styled.nav`
    
`
const NavUl = styled.ul`
    display: flex;
    gap: 30px;
`
const NavUlLi = styled.li`
    a {
        font-family: ${GlobalStyle.fontFamilyMontserrat};
        font-style: ${GlobalStyle.fontStyle};
        font-size: 14px;
        font-weight: ${GlobalStyle.fontWeight400};
        line-height: 122.9%;
        color: ${GlobalStyle.colorText};
        cursor: pointer;
    }
`
