const FoodListing = require("../models/FoodListing");

exports.searchItems = async (req, res) => {
    const { item } = req.query;

    try {
        const listings = await FoodListing.find({
            item: new RegExp(item, "i"),
        });

        const results = listings.map((listing) => {
            const platforms = listing.platforms.map((p) => {
                const final_price = p.price - p.discount + p.delivery;
                return { ...p._doc, final_price };
            });

            const cheapest = platforms.reduce((min, p) =>
                p.final_price < min.final_price ? p : min
            );

            return {
                id: listing._id,
                name: listing.restaurant, // 👈 IMPORTANT (frontend uses name)
                item: listing.item,

                bestPlatform: {
                    platform: cheapest.name,
                    basePrice: cheapest.price,
                    discount: cheapest.discount,
                    delivery: cheapest.delivery,
                    finalPrice: cheapest.final_price,
                    redirectUrl: cheapest.link,
                },
                // 🔥 ADD THIS (IMPORTANT)
                allPlatforms: platforms.map(p => ({
                    platform: p.name,
                    basePrice: p.price,
                    discount: p.discount,
                    delivery: p.delivery,
                    finalPrice: p.final_price,
                    redirectUrl: p.link,
                })),
            };
        });

        results.sort((a, b) => a.bestPlatform.finalPrice - b.bestPlatform.finalPrice);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};