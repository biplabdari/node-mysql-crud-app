module.exports = {
    getHomePage: (req, res) => {
        let query = "select XXSKU.ITEM_NUMBER SKU, XXSKU.DESCRIPTION,XXPR.LIST_PRICE from XXIBM_PRODUCT_SKU XXSKU,XXIBM_PRODUCT_PRICING XXPR,XXIBM_PRODUCT_STYLE XXPS,XXIBM_PRODUCT_CATALOGUE XXPC where XXSKU.ITEM_NUMBER = XXPR.ITEM_NUMBER and XXSKU.STYLE_ITEM = XXPS.ITEM_NUMBER AND XXSKU.CATALOGUE_CATEGORY=XXPC.COMMODITY"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Socka | View Players"
                ,players: result
            });
        });
    },
};
