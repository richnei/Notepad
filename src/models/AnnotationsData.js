const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    important: Boolean,
})

module.exports = mongoose.model('Annotations', AnnotationDataSchema);