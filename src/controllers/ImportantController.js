const Annotations = require('../models/AnnotationsData');

module.exports = {

    async read(request, response) {
        const important = request.query;

        const importantNotes = await Annotations.find(important);

        return response.json(importantNotes);
    },

    async update(request, response) {
        const { id } = request.params;

        const annotation = await Annotations.findOne({ _id : id});

        if (annotation.important) {
            annotation.important = false;
        } else {
            annotation.important = true;
        }

        await annotation.save();

        return response.json(annotation);
    }

}