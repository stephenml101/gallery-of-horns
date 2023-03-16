import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Hornedbeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likes: 0
    }
  }

// METHOD TO UPDATE STATE FOR EACH BEAST TO TRACK LIKES
handleLikes = () => {
  //react method called this.setState()--> takes in an object & rebuilds that state object
  this.setState({
   likes: this.state.likes + 1 
})
}

handleBeastClick = () => {
  this.props.handleOpenModal(this.props.image_url, this.props.description)
}


  render(){
    return (
<Card style={{ width: '24rem' }}>
      <Card.Img onClick={this.handleBeastClick} variant="top" src={this.props.image_url} alt={this.props.description}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button onClick={this.handleLikes} variant="primary">💟{this.state.likes}</Button>
      </Card.Body>
    </Card>
      // <>
      // <h2>{this.props.title}</h2>
      // <img src={this.props.imgUrl} alt={this.props.description} title={this.props.title}/> 
      // <p>{this.props.description}</p>
      // </>
    )
  }
}

export default Hornedbeast;

