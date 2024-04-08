import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    width: 60%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 72px;
  }
`
export const MemeContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 40px;
  font-family: 'Open Sans';
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 18px;
  font-family: 'Open Sans';
  margin-bottom: 10px;
`
export const Input = styled.input`
  border: 1px solid #5a7184;
  border-radius: 6px;
  font-family: 'Open Sans';
  padding: 8px 0px 8px 18px;
  outline: none;
  max-width: 300px;
  margin-bottom: 16px;
`
export const Select = styled.select`
  border: 1px solid #5a7184;
  border-radius: 6px;
  font-family: 'Open Sans';
  padding: 8px 0px 8px 18px;
  outline: none;
  max-width: 300px;
  margin-bottom: 16px;
`
export const Option = styled.option`
  font-family: 'Open Sans';
  font-size: 16px;
`
export const GenerateBtn = styled.button`
  width: 120px;
  height: 40px;
  color: #ffffff;
  background-color: #0b69ff;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 100%;
  height: 300px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 300px;
  }
`
export const Text = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
`
