// REBUILD AS A CLASS COMPONENT

// 1ST IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from './data.json'
import './App.css'



// 2ND CREATE THE CLASS - will always have a render method

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeastImg:'',
      selectedBeastDescription: ''
    }
  }

  // MODAL METHOD TO CLOSE THE MODAL
  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (img, description) => {
    this.setState({
      showModal: true,
      selectedBeastImg: img,
      selectedBeastDescription: description
    })
  }

// THIS GOES TO SELECTED BEAST

  render(){
    return (
    <>
    <Header />
    <Main 
    handleOpenModal={this.handleOpenModal}
    data = {data}
    />
    <SelectedBeast 
    showModal={this.state.showModal}
    handleCloseModal={this.handleCloseModal}
    selectedBeastDescription={this.state.selectedBeastDescription}
    selectedBeastImg={this.state.selectedBeastImg}
    />
   
    <Footer />
    </>
    )
  }
}

//3RD EXPORT THE CLASS FOR OTHER FILES TO IMPORT
export default App;