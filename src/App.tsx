import styled from 'styled-components'
import fonsection from './Images/fonsection.png'
import fonMain from './Images/imgMainFon.png'
import { Header } from './Header/Header'
import { GlobalStyle } from './Styles/GlobalStyles';
import { useRef, useState } from 'react';
import { Button } from './Button/Button';
import { FormCallback } from './FormCallback/FormCallback';
import { FormSuccessful } from './FormSuccessful/FormSuccessful';

function App() {

  const [styleLeft, setStyleLeft] = useState('-612px')
  const [changeForm, setChangeForm] = useState(true)

  const ref = useRef<HTMLDivElement>(null);

  const onClickHandlerButton = () => {
    setStyleLeft('0')
    if (!ref.current) {
      return
    }
    ref.current.style.backdropFilter = 'blur(7.5px)'
    ref.current.style.height = '100%'
    setChangeForm(true)
  }

  const onClickHandler = () => {
    setStyleLeft('-612px')
    if (!ref.current) {
      return
    }
    ref.current.style.height = ''
    ref.current.style.backdropFilter = ''
  }

  return (
    <WrapperMain>
      <FonSectionBlur ref={ref}></FonSectionBlur>
      <FonSection>
        <FiilterFonImages></FiilterFonImages>
        <img src={fonsection} alt="fonsection" />
      </FonSection>
      <Header />
      <MainContent>
        <Content>
          <ContentH1>Создаю условия для вашего успеха</ContentH1>
          <ContentTitle>
            <Line></Line>
            <ContentTitleP>Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий</ContentTitleP>
          </ContentTitle>
          <ContentBtn>
            <Button colorContent={'#07305D'} backgroundBtn={'#FFF'} callBack={onClickHandlerButton}>Записаться на консультацию</Button>
            <Button colorContent={'#FFF'} backgroundBtn={''} callBack={onClickHandlerButton}>Бесплатная консультация</Button>
          </ContentBtn>
          <ContentBottom>
            <ItemBlock>
              <Block>
                <Num>130+</Num>
                <Text>техник для достижения целей</Text>
              </Block>
            </ItemBlock>
            <ItemBlock>
              <Block>
                <Num>250%</Num>
                <Text>увеличение личной продуктивности</Text>
              </Block>
            </ItemBlock>
          </ContentBottom>
        </Content>
        <ContentImg>
          <img src={fonMain} alt="fonMain" />
        </ContentImg>
      </MainContent>
      {changeForm ? 
        <FormCallback setChangeForm={setChangeForm} left={styleLeft} callBack={onClickHandler} /> 
        :
        <FormSuccessful left={styleLeft} callBack={onClickHandler}/>
      }
    </WrapperMain>
  );
}

const WrapperMain = styled.main`
    position: relative;
    width: 100%; 
    overflow: hidden;
    z-index: 1;
`
const FonSectionBlur = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 4;
`
const FonSection = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;

    img {
        height: 100%;
        object-fit: contain;
    }
`
const FiilterFonImages = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(19, 52, 87, 0.87);
    z-index: 1;
`
const MainContent = styled.div`
  max-width: 1320px;
  margin: 57px auto 0 auto;
  display: flex;
`
const Content = styled.div`
  flex-basis: 70%;
  margin-top: 118px;
`
const ContentH1 = styled.h1`
  width: 747px;
  color: ${GlobalStyle.colorText};
  font-family: ${GlobalStyle.fontFamilyRaleway};
  font-size: max(1em, min(3em, calc(100vw / 75) * 4));
  font-style: ${GlobalStyle.fontStyle};
  font-weight: ${GlobalStyle.fontWeight600};
  line-height: 135.3%;
  text-transform: uppercase;
`
const ContentTitle = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 53px;
`
const Line = styled.div`
  width: 1px;
  background-color: #FFF;
`
const ContentTitleP = styled.div`
  flex-basis: 675px;
  color: rgba(255, 255, 255, 0.50);
  font-family: ${GlobalStyle.fontFamilyRaleway};
  font-size: 16px;
  font-style: ${GlobalStyle.fontStyle};
  font-weight: ${GlobalStyle.fontWeight400};
  line-height: 150%;
`
const ContentBtn = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 40px;
`
const ContentBottom = styled.div`
  margin-top: 116px;
  margin-bottom: 47px;
  display: flex;
  gap: 40px;
`
const ItemBlock = styled.div`
  width: 41%;
  height: 133px;
  border-left: 1px solid rgba(255, 255, 255, 0.61);
`
const Block = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 50%;
`
const Num = styled.div`
  color: ${GlobalStyle.colorText};
  font-family: ${GlobalStyle.fontFamilyMontserrat};
  font-size: 40px;
  font-style: ${GlobalStyle.fontStyle};
  font-weight: ${GlobalStyle.fontWeight600};
  line-height: 141.3%;
  text-transform: uppercase;
`
const Text = styled.div`
  color: rgba(255, 255, 255, 0.50);
  font-family: ${GlobalStyle.fontFamilyRaleway};
  font-size: 16px;
  font-style: ${GlobalStyle.fontStyle};
  font-weight: ${GlobalStyle.fontWeight400};
  line-height: 122.8%;
  text-transform: lowercase;
`
const ContentImg = styled.div`
  flex-basis: 30%;
`
export default App;
