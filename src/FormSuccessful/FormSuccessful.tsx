import React from 'react'
import { styled } from 'styled-components'
import { GlobalStyle } from '../Styles/GlobalStyles'

type TypePropsFormSuccessful = {
    left: string
    callBack: () => void
}

export const FormSuccessful: React.FC<TypePropsFormSuccessful> = (props) => {

    const { left, callBack } = props

    const onClickCloseSuccess = () => {
        callBack()
    }

    return (
        <WrapperForm left={left}>
            <ClosingBlock onClick={onClickCloseSuccess}>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <line x1="1.70711" y1="1.69853" x2="32.1127" y2="32.1041" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
                    <line x1="1.29289" y1="31.6984" x2="31.6985" y2="1.29282" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
                </svg>
            </ClosingBlock>
            <FormBlock>
                <FormBlockH1>Спасибо за заявку</FormBlockH1>
                <FormBlockH2>Я обязательно свяжусь с вами в ближайшее время.</FormBlockH2>
                <HeaderLogo>
                <svg xmlns="http://www.w3.org/2000/svg" width="170" height="34" viewBox="0 0 170 34" fill="none">
                    <path d="M0 24H2.51953L6.25 13.7461C6.33464 13.5117 6.40299 13.2871 6.45508 13.0723C6.51367 12.8574 6.56901 12.6458 6.62109 12.4375H6.69922C6.74479 12.6458 6.79688 12.8574 6.85547 13.0723C6.91406 13.2871 6.98568 13.5117 7.07031 13.7461L10.8008 24H13.6035L8.13477 9.71289H5.42969L0 24ZM2.76367 20.6797H10.6836L10.0391 18.707H3.4082L2.76367 20.6797Z" fill="white" />
                    <path d="M15.3512 24H24.5113V21.9395H17.9977V9.78125H15.3512V24Z" fill="white" />
                    <path d="M26.7668 24H36.3957V21.959H29.384V17.6914H35.3703V15.6895H29.384V11.8418H36.2883V9.78125H26.7668V24Z" fill="white" />
                    <path d="M37.45 24H40.1941L44.2664 17.5156H44.6668L49.5789 9.78125H46.8836L43.0848 16.002H42.6746L37.45 24ZM37.6648 9.78125L42.7039 17.5645H42.7625L46.8445 24H49.9109L44.618 15.9824H44.5594L40.702 9.79102L37.6648 9.78125Z" fill="white" />
                    <path d="M51.7074 22.6621C51.7074 23.0918 51.8474 23.4564 52.1273 23.7559C52.4138 24.0553 52.8207 24.2051 53.348 24.2051C53.8754 24.2051 54.279 24.0553 54.559 23.7559C54.8389 23.4564 54.9789 23.0918 54.9789 22.6621C54.9789 22.2324 54.8389 21.8678 54.559 21.5684C54.279 21.2624 53.8754 21.1094 53.348 21.1094C52.8207 21.1094 52.4138 21.2624 52.1273 21.5684C51.8474 21.8678 51.7074 22.2324 51.7074 22.6621Z" fill="white" />
                    <path d="M62.8199 20.0352C62.8264 21.3958 63.3408 22.444 64.3629 23.1797C65.3915 23.9154 66.7327 24.2832 68.3863 24.2832C70.053 24.2832 71.3811 23.9089 72.3707 23.1602C73.3603 22.4115 73.8551 21.3893 73.8551 20.0938C73.8486 18.8568 73.4612 17.9062 72.693 17.2422C71.9313 16.5781 70.7789 16.041 69.2359 15.6309C67.7776 15.2402 66.8238 14.8984 66.3746 14.6055C65.9319 14.306 65.7105 13.8926 65.7105 13.3652C65.7105 12.7988 65.9189 12.3529 66.3355 12.0273C66.7522 11.7018 67.4033 11.5391 68.2887 11.5391C69.1741 11.5391 69.8382 11.7376 70.2809 12.1348C70.7236 12.5319 70.9449 13.0592 70.9449 13.7168V13.9219H73.5621V13.668C73.5556 12.4766 73.0738 11.4837 72.1168 10.6895C71.1598 9.89518 69.8805 9.49805 68.2789 9.49805C66.6643 9.49805 65.3915 9.86914 64.4605 10.6113C63.5361 11.3535 63.0738 12.3268 63.0738 13.5312C63.0738 14.6836 63.4417 15.582 64.1773 16.2266C64.9195 16.8646 66.0719 17.3919 67.6344 17.8086C69.0927 18.1927 70.053 18.5508 70.5152 18.8828C70.984 19.2148 71.2184 19.6738 71.2184 20.2598C71.2184 20.8652 70.9742 21.3503 70.4859 21.7148C69.9977 22.0794 69.2945 22.2617 68.3766 22.2617C67.4586 22.2617 66.7457 22.0729 66.2379 21.6953C65.7301 21.3177 65.4729 20.748 65.4664 19.9863V19.7617H62.8199V20.0352Z" fill="white" />
                    <path d="M76.423 24H79.0695V17.7109H85.3879V24H88.0246V9.78125H85.3879V15.6309H79.0695V9.78125H76.423V24Z" fill="white" />
                    <path d="M91.4324 24H101.061V21.959H94.0496V17.6914H100.036V15.6895H94.0496V11.8418H100.954V9.78125H91.4324V24Z" fill="white" />
                    <path d="M101.911 9.78125L107.233 24.0684H109.967L115.28 9.78125H112.702L109.069 19.752C109.004 19.9408 108.942 20.1426 108.883 20.3574C108.825 20.5723 108.776 20.7904 108.737 21.0117H108.659C108.613 20.7904 108.561 20.5755 108.502 20.3672C108.45 20.1523 108.388 19.9473 108.317 19.752L104.752 9.78125H101.911Z" fill="white" />
                    <path d="M115.768 11.8418H120.201V24H122.848V11.8418H127.281V9.78125H115.768V11.8418Z" fill="white" />
                    <path d="M128.492 20.0352C128.498 21.3958 129.013 22.444 130.035 23.1797C131.063 23.9154 132.405 24.2832 134.058 24.2832C135.725 24.2832 137.053 23.9089 138.043 23.1602C139.032 22.4115 139.527 21.3893 139.527 20.0938C139.52 18.8568 139.133 17.9062 138.365 17.2422C137.603 16.5781 136.451 16.041 134.908 15.6309C133.449 15.2402 132.496 14.8984 132.046 14.6055C131.604 14.306 131.382 13.8926 131.382 13.3652C131.382 12.7988 131.591 12.3529 132.007 12.0273C132.424 11.7018 133.075 11.5391 133.961 11.5391C134.846 11.5391 135.51 11.7376 135.953 12.1348C136.395 12.5319 136.617 13.0592 136.617 13.7168V13.9219H139.234V13.668C139.227 12.4766 138.746 11.4837 137.789 10.6895C136.832 9.89518 135.552 9.49805 133.951 9.49805C132.336 9.49805 131.063 9.86914 130.132 10.6113C129.208 11.3535 128.746 12.3268 128.746 13.5312C128.746 14.6836 129.114 15.582 129.849 16.2266C130.591 16.8646 131.744 17.3919 133.306 17.8086C134.765 18.1927 135.725 18.5508 136.187 18.8828C136.656 19.2148 136.89 19.6738 136.89 20.2598C136.89 20.8652 136.646 21.3503 136.158 21.7148C135.67 22.0794 134.966 22.2617 134.048 22.2617C133.13 22.2617 132.418 22.0729 131.91 21.6953C131.402 21.3177 131.145 20.748 131.138 19.9863V19.7617H128.492V20.0352Z" fill="white" />
                    <path d="M141.558 17.291C141.558 19.5827 142.15 21.321 143.335 22.5059C144.527 23.6908 146.057 24.2832 147.925 24.2832C149.787 24.2832 151.314 23.6908 152.505 22.5059C153.703 21.321 154.302 19.5827 154.302 17.291V16.4805C154.302 14.1953 153.703 12.4603 152.505 11.2754C151.314 10.0905 149.787 9.49805 147.925 9.49805C146.057 9.49805 144.527 10.0905 143.335 11.2754C142.15 12.4603 141.558 14.1953 141.558 16.4805V17.291ZM144.273 17.5254V16.2559C144.273 14.6868 144.601 13.5117 145.259 12.7305C145.923 11.9492 146.812 11.5586 147.925 11.5586C149.038 11.5586 149.927 11.9492 150.591 12.7305C151.262 13.5117 151.597 14.6868 151.597 16.2559V17.5352C151.597 19.0977 151.262 20.2728 150.591 21.0605C149.927 21.8418 149.038 22.2324 147.925 22.2324C146.818 22.2324 145.933 21.8418 145.269 21.0605C144.605 20.2728 144.273 19.0944 144.273 17.5254Z" fill="white" />
                    <path d="M155.405 9.78125L160.727 24.0684H163.462L168.774 9.78125H166.196L162.563 19.752C162.498 19.9408 162.436 20.1426 162.378 20.3574C162.319 20.5723 162.27 20.7904 162.231 21.0117H162.153C162.108 20.7904 162.055 20.5755 161.997 20.3672C161.945 20.1523 161.883 19.9473 161.811 19.752L158.247 9.78125H155.405Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M169.166 34H0.166016V33H169.166V34Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M169.166 1H0.166016V0H169.166V1Z" fill="white" />
                </svg>
            </HeaderLogo>
            </FormBlock>
        </WrapperForm>
    )
}

type TypeWrapperForm = {
    left: string
}

const WrapperForm = styled.div<TypeWrapperForm>`
    position: absolute;
    display: flex;
    width: 612px;
    min-width: 612px;
    top: 0;
    left: ${props => props.left};
    background-color: #0F1D45;
    transition: left 0.5s;
    z-index: 12;
    align-items: center;
    justify-content: center;
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
const FormBlockH1 = styled.div`
    width: 80%;
    margin: 0 auto;
    color: ${GlobalStyle.colorText};
    font-family: ${GlobalStyle.fontFamilyRaleway};
    font-size: 50px;
    font-style: ${GlobalStyle.fontStyle};
    font-weight: ${GlobalStyle.fontWeight600};
    line-height: 157.8%;
    text-align: center;
`
const FormBlockH2 = styled.div`
    width: 80%;
    margin: 98px auto 0 auto;
    color: ${GlobalStyle.colorText};
    font-family: ${GlobalStyle.fontFamilyRaleway};
    font-size: 40px;
    font-style: ${GlobalStyle.fontStyle};
    font-weight: ${GlobalStyle.fontWeight600};
    line-height: 145%;
    text-align: center;
`
const HeaderLogo = styled.div`
    margin-top: 209px;
    text-align: right;
`