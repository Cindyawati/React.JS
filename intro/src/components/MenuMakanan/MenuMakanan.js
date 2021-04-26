import React from 'react'

/*
//nama Function diawali lowercase
var MenuMakanan = () => {
    return (
        <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
            <p>Nama Menu: Ayam Bakar</p>
            <p>Harga: Rp. 25.000</p>
          </div>
    )
}

//tambahkan props sebagai parameter
var MenuMakanan = (props) => {
    return (
        <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
            <p>Nama Menu: { props.namaMenu }</p>
            <p>Harga: Rp. { props.hargaMenu }</p>
        </div>
    )
}

*/

/*if statement*/
var menuMakanan = (props) => {
    if (props.stock !==0){
        return (
            <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
                <p>Nama Menu: { props.namaMenu }</p>
                <p>Harga: Rp. { props.hargaMenu }</p>
                <p>Stock: {props.stock}</p>
            </div>
        );
    }
    else
    {
        return null;
    }
}

export default menuMakanan