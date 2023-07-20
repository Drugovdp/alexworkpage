import React, { ChangeEvent, useState } from 'react'
import { styled } from 'styled-components'
import { GlobalStyle } from '../Styles/GlobalStyles'
import { Button } from '../Button/Button'
import check from '../Images/check.svg'

type TypePropsFormCallback = {
    left: string
    setChangeForm: (changeForm: boolean) => void
    callBack: () => void
}

export const FormCallback: React.FC<TypePropsFormCallback> = (props) => {

    const { left, setChangeForm, callBack } = props

    const [valueName, setValueName] = useState('')
    const [valueTel, setValueTel] = useState('')
    const [checked, setChecked] = useState(false)

    const onClickCloseHandler = () => {
        callBack()
    }

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const re = /^[A-zА-яЁё]{0,10}$/
        if (re.test(e.currentTarget.value)) {
            setValueName(e.currentTarget.value.trim())
        }
    }

    const onFocusNameHandler = () => {
        document.querySelectorAll('span')[0].textContent = ''
    }

    const onChangeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const re = /^\d{1,11}$/
        if (re.test(e.currentTarget.value)) {
            setValueTel(e.currentTarget.value.replace(/^7/, '8'))
        }
    }

    const onFocusTelHandler = () => {
        document.querySelectorAll('span')[1].textContent = ''
    }

    const onChangeCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
        document.querySelectorAll('input')[2].style.border = ''
    }

    const onClickBtnHandler = () => {
        const re = /^\d{11}$/
        if (valueName === '') {
            document.querySelectorAll('span')[0].textContent = 'пустая строка'
        } else if (valueTel === '' || !re.test(valueTel)) {
            document.querySelectorAll('span')[1].textContent = 'пустая строка или должен быть 11-и значный номер'
        } else if (!checked) {
            document.querySelectorAll('input')[2].style.border = '2px solid #ff0101'
        } else {
            setChangeForm(false)
        }
    }

    return (
        <WrapperForm left={left}>
            <ClosingBlock onClick={onClickCloseHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <line x1="1.70711" y1="1.69853" x2="32.1127" y2="32.1041" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
                    <line x1="1.29289" y1="31.6984" x2="31.6985" y2="1.29282" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
                </svg>
            </ClosingBlock>
            <FormBlock>
                <FormBlockH1>Закажите обратный звонок</FormBlockH1>
                <label>
                    <Input type='text' placeholder={'ИМЯ'} value={valueName} onChange={onChangeNameHandler} onFocus={onFocusNameHandler}/>
                    <MassageErrorInput></MassageErrorInput>
                </label>
                <label>
                    <Input type='text' placeholder={'ТЕЛЕФОН'} value={valueTel.replace(/\D/g, '').replace(/^7/, '8')} onChange={onChangeTelHandler} onFocus={onFocusTelHandler}/>
                    <MassageErrorInput></MassageErrorInput>
                </label>
                <CheckboxBlock>
                    <Checkbox type="checkbox" check={check} onChange={onChangeCheckHandler} checked={checked}></Checkbox>
                    <CheckboxText>Согласен на сохранение и обработку персональных данных</CheckboxText>
                </CheckboxBlock>
                <CheckboxBtn>
                    <Button colorContent={'#FFF'} backgroundBtn={'#0F1D45'} callBack={onClickBtnHandler}>Заказать обратный звонок</Button>
                </CheckboxBtn>
            </FormBlock>
        </WrapperForm>
    )
}

type TypeWrapperForm = {
    left: string
}

const WrapperForm = styled.div<TypeWrapperForm>`
    position: fixed;
    width: 612px;
    min-width: 612px;
    height: 946px;
    top: 0;
    left: ${props => props.left};
    background-color: #0F1D45;
    transition: left 0.5s;
    z-index: 12;
`
const ClosingBlock = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 40px;
    right: 40px;
    cursor: pointer;
`
const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;
    margin: 108px auto 108px auto;
`
const FormBlockH1 = styled.h1`
    color: ${GlobalStyle.colorText};
    font-family: ${GlobalStyle.fontFamilyRaleway};
    font-size: 50px;
    font-style: ${GlobalStyle.fontStyle};
    font-weight: ${GlobalStyle.fontWeight600};
    line-height: 148.8%;
`
const Input = styled.input`
    appearance: none;
    width: 480px;
    background-color: #0F1D45;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.80);
    margin-top: 66px;

    &[placeholder] {
        color: rgba(255, 255, 255, 0.80);
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 200%;  
    }
`
const MassageErrorInput = styled.span`
    top: 0;
    left: 0;
    color: red;
    font-size: 14px;
`
const CheckboxBlock = styled.div`
    margin-top: 110px;
    display: flex;
    gap: 23px;
    align-items: center;

    span {
        top: 0;
        left: 0;
        color: red;
        font-size: 14px;
    }
`
type TypeCheckbox = {
    check?: string
}

const Checkbox = styled.input<TypeCheckbox>`
    appearance: none;
    width: 30px;
    height: 30px;
    border: 1px solid #FFF;

    &[type="checkbox"]:checked {
        background-image: url("${props => props.check ? props.check : '&#8744'}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 19px;
    }
`
const CheckboxText = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.8%;
    letter-spacing: 0.56px;
`
const CheckboxBtn = styled.div`
    margin-top: 89px;
    width: 380px;
`