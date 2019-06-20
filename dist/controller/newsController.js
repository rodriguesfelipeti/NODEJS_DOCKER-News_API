"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        newsService_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(err => console.error.bind(console, `Error: ${err}`));
    }
    ;
    getById(req, res) {
        const _id = req.params.id;
        newsService_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(err => console.error.bind(console, `Error: ${err}`));
    }
    ;
    create(req, res) {
        let news = req.body;
        newsService_1.default.create(news)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, 'Noticia Cadastrada com sucesso!'))
            .catch(err => console.error.bind(console, `Error: ${err}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        newsService_1.default.update(_id, news)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia foi atualizada com sucesso!"))
            .catch(err => console.error.bind(console, `Error: ${err}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, `Noticia deletada com sucesso!`))
            .catch(err => console.error.bind(console, `Error: ${err}`));
    }
}
exports.default = new NewsController();
