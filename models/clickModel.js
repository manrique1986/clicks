const mongoose = require("mongoose");

const ClickSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Click", ClickSchema);

// const { Schema, model } = require('mongoose');

// const RoleSchema = Schema({
//     rol: {
//         type: String,
//         required: [true, 'El rol es obligatorio']
//     }
// });


// module.exports = model( 'Role', RoleSchema );
