import React, { Component } from 'react';

/*
//nama Class diawali huruf kapital (uppercase)
class MenuMinuman extends Component {
    render() {
        return (
            <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
            <p>Nama Menu: Juice Melon</p>
            <p>Harga: Rp. 15.000</p>
          </div>
        )
    }
}
*/

class MenuMinuman extends Component {
    render() {
        return (
            <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
            <p>Nama Menu: {this.props.namaMenu}</p>
            <p>Harga: Rp. {this.props.hargaMenu}</p>
          </div>
        )
    }
}

export default MenuMinuman