    module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        idcard: String,
        name: String,
        birthday: String,
        gender:String,
        class: String,
        address: String,
        specialized:Number,
        IDnum:Number,
        numberphone:Number,
        mailcontact: String,

    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Student = mongoose.model("student", schema);
    return Student;
};