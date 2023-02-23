/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import ListPhone from './ListPhone';
import dataPhone from '../../data/dataPhone.json'
import Cart from './Cart'

export default class Execise_Phone extends Component {
  state = {
    detail: 
      { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
  }

  handleChangeDetail = (maSP) => {
    let index = dataPhone.findIndex(item => item.maSP === maSP);
    this.setState({
      detail:  index !== -1 ? this.state.detail = {...dataPhone[index]} : this.state.detail
    })
   
    
  }
  render() {
    return (
     <div className='bg-dark' style={{width:"100%", height: "100%"}}>
        <div className='container p-3 text-center text-white'>
          <h2>Exercise Phone</h2>
          <div>
            <ListPhone handleChangeDetail={this.handleChangeDetail}  dataPhone={dataPhone} />
            <Cart detail={this.state.detail} />
          </div>
        </div>
     </div>
    )
  }
}
