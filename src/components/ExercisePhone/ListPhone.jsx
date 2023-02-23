import React, { Component } from 'react'
import Phone from './Phone'
export default class ListPhone extends Component {

  renderPhone = () => {
    const {dataPhone, handleChangeDetail} = this.props;
    return dataPhone.map((phone, index) => {
      return (
        <div className='col-4' key={index}>
          <Phone handleChangeDetail={handleChangeDetail}  phone={phone}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='row'>
        {this.renderPhone()}
      </div>
    )
  }
}
