import React, { Component } from 'react'

export default class Phone extends Component {
  render() {
    const { phone, handleChangeDetail } = this.props;
    const {tenSP, hinhAnh, giaBan, maSP} = phone
    return (
      <div>
        <div className="card bg-dark" style={{width:300, height: 450}}>
          <img className="card-img-top" src={hinhAnh} alt='23' />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">{giaBan}</p>
            <button onClick={() => handleChangeDetail(maSP)} className='btn btn-success'>See Detail</button>
          </div>
        </div>
      </div>
    )
  }
}
