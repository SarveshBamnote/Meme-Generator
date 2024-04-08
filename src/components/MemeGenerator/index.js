import {Component} from 'react'

import {
  MainContainer,
  ResponsiveContainer,
  MemeContainer,
  Heading,
  Label,
  Input,
  Select,
  Option,
  GenerateBtn,
  ImageContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 0,
    showMeme: false,
  }

  renderImageContainer = () => {
    const {imgUrl, topText, bottomText, fontSize} = this.state

    return (
      <ImageContainer data-testid="meme" url={imgUrl}>
        <Text fontSize={fontSize}>{topText}</Text>
        <Text fontSize={fontSize}>{bottomText}</Text>
      </ImageContainer>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  onChangeUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: parseInt(event.target.value)})
  }

  render() {
    const {showMeme} = this.state
    return (
      <MainContainer>
        <ResponsiveContainer>
          <MemeContainer onSubmit={this.onSubmitForm}>
            <Heading>Meme Generator</Heading>
            <Label htmlFor="imgUrl">Image URL</Label>
            <Input
              onChange={this.onChangeUrl}
              id="imgUrl"
              type="text"
              placeholder="Enter the Image URL"
            />

            <Label htmlFor="topText">Top Text</Label>
            <Input
              onChange={this.onChangeTopText}
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
            />

            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              onChange={this.onChangeBottomText}
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
            />

            <Label htmlFor="fontSize">Font Size</Label>
            <Select id="fontSize" onChange={this.onChangeFontSize}>
              {fontSizesOptionsList.map(eachSize => (
                <Option value={eachSize.optionId} key={eachSize.optionId}>
                  {eachSize.displayText}
                </Option>
              ))}
            </Select>
            <GenerateBtn type="submit">Generate</GenerateBtn>
          </MemeContainer>
          {showMeme && this.renderImageContainer()}
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
