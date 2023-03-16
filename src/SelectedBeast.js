import React from 'react';
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>{this.props.selectedBeastDescription}</Modal.Header>
          <Modal.Body>
            <img width='300px' height='300px' src={this.props.selectedBeastImg} alt={this.props.selectedBeastDescription} />
          </Modal.Body>
        </Modal>
      </>
    )

  }
}

export default SelectedBeast;