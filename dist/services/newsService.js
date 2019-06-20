"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsRepositoty_1 = require("../repository/newsRepositoty");
class NewsService {
    get() {
        return newsRepositoty_1.default.find({});
    }
    getById(_id) {
        return newsRepositoty_1.default.findById(_id);
    }
    create(news) {
        return newsRepositoty_1.default.create(news);
    }
    update(_id, news) {
        return newsRepositoty_1.default.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return newsRepositoty_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new NewsService();
