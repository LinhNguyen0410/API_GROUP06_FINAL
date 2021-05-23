    module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        IDClass: Number,
        className : String,
        career : String,


    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Class = mongoose.model("class", schema);
    return Class;
};