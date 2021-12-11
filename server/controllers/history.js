const { History } = require('../models');

class HistoryController {
    static async getAllHistories(req, res, next) {
        try {
            const resp = await History.findAll();
            res.status(200).json(resp);
        } catch (error) {
            console.log(error);
            // next(error);
        }
    }
}

module.exports = HistoryController;