class Helper {
    sendResponse = (res, StatusCode, data) => {
        res.status(StatusCode).json({result: data});
    };
}

export default new Helper();