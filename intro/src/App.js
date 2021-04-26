import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component {

  constructor() {
    super()
    this.state = {
        namaResto: 'React',
        namaPembeli : ' ',
        keterangan : ' ',
        jenisPembayaran: ' ',
        menuMakanan: [
          { nama: 'Ayam Bakar', harga: 25000, stock: 10},
          { nama: 'Nasi Goreng', harga: 22000, stock: 0},
        ],
        menuMinuman: [
          { id: 1, nama: 'Juice Melon', harga: 15000 },
          { id: 2, nama: 'Milkshake Strawberry', harga: 20000 },
          { id: 3, nama: 'Juice Tomat', harga: 15000 },
          { id: 4, nama: 'Juice Mangga', harga: 15000 },
          { id: 5, nama: 'Juice Alpukat', harga: 15000 },
        ]
    }
  }

    handleGantiNama = (nama) => {
      this.setState({ namaResto: nama })
    }

    /*

    Handle per kondisi

    handleChangeNamaPembeli = (event) => {
      this.setState({ namaPembeli: event.target.value })
    }

    handleChangeKeterangan = (event) => {
      this.setState({ keterangan: event.target.value })
    }

    handleChangeJenisPembayaran = (event) => {
      this.setState({ jenisPembayaran: event.target.value })
    }
    */

    //Menggabungkan 3 handler menjadi satu menggunakan variabel
    handleChange = (event) => {
      var name = event.target.name //nama state yang mau diambil isinya
      var value = event.target.value //isi dari inputan
      this.setState({ [name]: value })
    }

    render() {
      return (
        <div className="App">
            <h1>Cafe and Resto {this.state.namaResto}</h1>
            <br></br>
            <button className="btn btn-primary" onClick={() => this.handleGantiNama('Cindy')}>Ganti Nama Resto</button>
            <br></br>
            <br></br>
            
            <div className="row" style={{marginTop: '10px'}}>
              <div className="col-md-4 offset-md-4">
                <form>
                  <div className="form-group">
                    <label>Nama pembeli: </label>
                    <input 
                      className="form-control" 
                      name="namaPembeli" //state
                      onChange={this.handleChange}
                      value={this.state.namaPembeli}
                    />
                    <small>Nama Pembeli: {this.state.namaPembeli}</small>
                  </div>

                  <div className="form-group">
                  <label>Keterangan:</label>
                  <textarea
                    className="form-control"
                    name="keterangan" //state
                    onChange={this.handleChange}
                    value={this.state.keterangan}
                  ></textarea>
                  <small>Keterangan: {this.state.keterangan}</small>
                  </div>

                  <div className="form-group">
                    <label>Jenis Pembayaran:</label>
                    <select
                      className="form-control"
                      name="jenisPembayaran" //state
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option value="cash">Cash</option>
                      <option value="kartuKredit">Kartu Kredit</option>
                      <option value="voucher">Voucher</option>
                    </select>
                    <small>Jenis Pembayaran: {this.state.jenisPembayaran}</small>
                  </div>

                </form>
              </div>
            </div>

            <br></br>
            <h2 className>Menu Makanan</h2>
                <MenuMakanan
                  namaMenu={this.state.menuMakanan[0].nama}
                  hargaMenu={this.state.menuMakanan[0].harga}
                  stock={this.state.menuMakanan[0].stock}
                />
                <MenuMakanan
                  namaMenu={this.state.menuMakanan[1].nama}
                  hargaMenu={this.state.menuMakanan[1].harga}
                  stock={this.state.menuMakanan[1].stock}
                />
                <br></br>

                <h2>Menu Minuman</h2>
                {this.state.menuMinuman.map((menu, index) =>
                <MenuMinuman key={index} namaMenu={menu.nama} hargaMenu={menu.harga}/> 
                )}
              </div>
      );
    }
}

export default App;
