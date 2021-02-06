module.exports = {
    get: function(con, callback) {
        con.query("SELECT * FROM buah", callback)
    },

    create: function(con, data, callback) {
        con.query(
            `INSERT INTO buah SET 
        kode_buah = '${data.kode_buah}',
        nama = '${data.nama}', 
        jumlah = '${data.jumlah}', 
        harga = '${data.harga}'`,
            callback
        )
    },
    getById: function(con, id, callback) {
        con.query(`SELECT * FROM buah WHERE id = ${id}`, callback)
    },

    update: function(con, data, id, callback) {
        con.query(
            `UPDATE buah SET 
        kode_buah = '${data.kode_buah}',
        nama = '${data.nama}', 
        jumlah = '${data.jumlah}', 
        harga = '${data.harga}'
        WHERE id = ${id}`,
            callback
        )
    },

    destroy: function(con, id, callback) {
        con.query(`DELETE FROM buah WHERE id = ${id}`, callback)
    }
}