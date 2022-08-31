import styles from '../styles/Section.module.css'
import styled from 'styled-components'

const SectionBackground = styled.div`
  background-image: url(${props => props.img.src});
  /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%);
  clip-path: polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%); */
  /* display: flex; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  padding: .5rem;
  height: 100vh;
  width: 100%;
  position: relative;
`

// Pass image as prop
const Sections = ({test, img}) => {
  return (
    <SectionBackground className={styles.section} img={img}>
        <div className={`${styles.content} w-100 h-100`}>
            {test}
        </div>
        <div className={styles.arrow}>
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </SectionBackground>
  )
}

export default Sections