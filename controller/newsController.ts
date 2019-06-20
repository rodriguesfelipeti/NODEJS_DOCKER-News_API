import NewsService from '../services/newsService';

import * as HttpStatus from 'http-status';

import Helper from '../infra/helper'

class NewsController {


    get(req,res){
        NewsService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(err => console.error.bind(console, `Error: ${err}`))
    };

    getById(req,res){
        const _id = req.params.id;

        NewsService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(err => console.error.bind(console, `Error: ${err}`))
    };

    create(req,res){
        let news = req.body;

        NewsService.create(news)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, 'Noticia Cadastrada com sucesso!'))
            .catch(err => console.error.bind(console, `Error: ${err}`))
    }

    update(req,res){
        const _id = req.params.id;
        let news = req.body;

        NewsService.update(_id, news)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, "Noticia foi atualizada com sucesso!"))
            .catch(err => console.error.bind(console, `Error: ${err}`))
    }

    delete(req,res){
        const _id = req.params.id;
        
        NewsService.delete(_id)
            .then(() => Helper.sendResponse(res, HttpStatus.OK, `Noticia deletada com sucesso!`))
            .catch(err => console.error.bind(console, `Error: ${err}`))
    }
}

export default new NewsController();