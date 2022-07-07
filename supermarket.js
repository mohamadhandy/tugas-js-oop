class Supermarket {
  _buahbuahan = [
    ["tomat", 20],
    ["nangka", 30],
    ["melon", 15],
    ["manggis", 900],
    ["pisang", 90]
  ]

  checkBuah (namaBuah, stockBuah) {
    let result
    let counter = 0
    for (let i = 0; i < this._buahbuahan.length; i++) {
      if (namaBuah === this._buahbuahan[i][0]) {
        if (namaBuah === this._buahbuahan[i][0] && this._buahbuahan[i][1] > stockBuah) {
          this._buahbuahan[i][1] = this._buahbuahan[i][1] - stockBuah
          result = `Buah ${namaBuah} yang dibeli sebanyak ${stockBuah}. Sisa ${namaBuah} sebanyak ${this._buahbuahan[i][1]}`
        } else if (namaBuah === this._buahbuahan[i][0] && this._buahbuahan[i][1] < stockBuah) {
          let tempJumlahBarang = stockBuah * 2
          this._buahbuahan[i][1] += tempJumlahBarang
          return `Sisa buah ${namaBuah} sebanyak ${this._buahbuahan[i][1]}`
        }
      } else {
        counter ++
      }
      
    }
    if (counter === this._buahbuahan.length) {
      return `Barang ${namaBuah} yang anda cari kosong`
    }
    return result
  }

  getSemuaBuah () {
    return this._buahbuahan
  }
}

const pelanggan = new Supermarket()
console.log(pelanggan.checkBuah("tomat", 30))
console.log(pelanggan.checkBuah("melon", 3))
console.log(pelanggan.checkBuah("pisang", 30))
// console.log(pelanggan.getSemuaBuah())

const pelanggan2 = new Supermarket()
console.log(pelanggan2.checkBuah("nanas", 1))