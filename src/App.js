// REBUILD AS A CLASS COMPONENT

// 1ST IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from './data.json'
import './App.css'
import Form from 'react-bootstrap/Form'


// 2ND CREATE THE CLASS - will always have a render method

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showModal: false,
      selectedBeastImg: '',
      selectedBeastDescription: '',
      hornAmount: '',
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

  handleSelect = (event) => {
    let selected = event.target.value;

    if (selected === '1') {
      let newData = data.filter(event => event.horns === 1);
      this.setState({
        data: newData
      })
    } else if (selected === '2') {
      let newData = data.filter(event => event.horns === 2);
      this.setState({
        data: newData
      })
    }
      else if (selected === '3'){
        let newData = data.filter(event => event.horns === 3);
        this.setState({
          data: newData
        })
      }
      else if (selected === '100'){
        let newData = data.filter(event => event.horns === 100);
        this.setState({
          data: newData
        })
      }
  }
  // THIS GOES TO SELECTED BEAST

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select name='select' onChange={this.handleSelect}>
              <option>Open this select menu</option>
              <option value='1'>One Horn</option>
              <option value='2'>Two Horns</option>
              <option value='3'>Three Horns</option>
              <option value='100'>100 Horns</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          handleOpenModal={this.handleOpenModal}
          data={this.state.data}
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