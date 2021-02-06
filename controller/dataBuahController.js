const DataBuah = require("../model/databuah")

module.exports = {
    index: function(req, res) {
        DataBuah.get(req.con, function(err, rows) {
            res.render("databuah/index", { data: rows })
        })
    },

    create: function(req, res) {
        res.render("databuah/create")
    },

    store: function(req, res) {
        DataBuah.create(req.con, req.body, function(err) {
            res.redirect("/databuah")
        })
    },

    edit: function(req, res) {
        DataBuah.getById(req.con, req.params.id, function(err, rows) {
            res.render("databuah/edit", { data: rows[0] })
        })
    },

    update: function(req, res) {
        DataBuah.update(req.con, req.body, req.params.id, function(err) {
            res.redirect("/databuah")
        })
    },

    destroy: function(req, res) {
        DataBuah.destroy(req.con, req.params.id, function(err) {
            res.redirect("/databuah")
        })
    }
}