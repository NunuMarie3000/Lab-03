import React, { Component } from 'react'

import {Button, Modal} from 'react-bootstrap'

export default class SelectedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    handleClose = () => {
        // this.setState({beast[0].isSelected: false})
        //when user clicks close button, set this.state.show: false
        this.props.changeIsSelected()
        this.setState({show: false})
    }

    render() {
        return (
        <>
        <Modal show={this.props.isSelected ? true : false} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.beastState[0].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body-container'><img className='modal-image' src={this.props.beastState[0].image} alt={this.props.beastState[0].description}></img> <p>{this.props.beastState[0].description}</p></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
    }
}
