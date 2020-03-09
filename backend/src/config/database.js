const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://localhost/mymoney", {
    useNewUrlParser: true
});

// tratando mensagens de erro
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório";
mongoose.Error.messages.Number.min =
    "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max =
    "O valor '{VALUE}' informado é maior que o limite maximo de '{MAX}'.";
mongoose.Error.messages.Number.enum =
    "O valor '{VALUE}' nao e valido para o atributo  '{PATH}'.";
