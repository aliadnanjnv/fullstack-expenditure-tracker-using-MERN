const userSchema = require('../models/information');
exports.placeItem = async (req, res) => {

    try {
        const { itemName, prize, date } = req.body;
        const items = new userSchema({ itemName, prize, date });
        const saveItems = await items.save()
        res.status(200).json({
            sucess: true,
            data: saveItems,
            message: 'data created successfully'
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "error while creating itemsexpenditure"
        })
    }

}

exports.findItem = async (req, res) => {
    try {
        const itemData = await userSchema.find({});
        res.status(200).json({ itemData })
    }
    catch (error) {
        return res.status(500).json({
            error: "error while creating itemdata"
        })
    }
};