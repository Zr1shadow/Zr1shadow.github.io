import style from '../styles/hero.module.css'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Title = styled.h1`
  font-size: 72px;
  color: white;
`

const Hero = () => {
  return (
    <Container>    
            <Title className={`${style.heroText} ps-5`}>Hi, <br/>
            Im <span className={style.heroTextSpecial}>Raul</span>,<br/>
            software developer
            </Title>
    </Container>
  )
}

export default Hero