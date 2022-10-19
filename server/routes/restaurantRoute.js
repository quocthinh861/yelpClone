const express = require("express");
const db = require('../db');

const router = express.Router();

router.get("/getRestaurant", async (req, res) => {
    try {
        var query = await db.query("SELECT * from restaurant");

        res.status(200).json({
            status: "success",
            rowCount: query.rows.length,
            data: {
                restaurants: query.rows
            }
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(404, error);
    }
})

router.get("/getRestaurant/:id", async (req, res) => {
    try {
        var query = await db.query("SELECT * from restaurant where id = $1", [req.params.id]);

        res.status(200).json({
            status: "success",
            rowCount: query.rows.length,
            data: {
                restaurants: query.rows[0]
            }
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(404, error);
    }
})

router.put("/getRestaurant/:id", async (req, res) => {
    try {
        var query = await db.query("UPDATE restaurant SET name = $1, location = $2, price_range = $3 where id = $4 returning *", [
            req.body.name, req.body.location, req.body.price_range, req.params.id
        ]);

        console.log(query);

        res.status(200).json({
            status: "success",
            rowCount: query.rows.length,
            data: {
                restaurants: query.rows[0]
            }
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(404, error);
    }
})

router.delete("/getRestaurant/:id", async (req, res) => {
    try {
        var query = await db.query("DELETE FROM restaurant where id = $1 returning *", [
            req.params.id
        ]);


        res.status(200).json({
            status: "success",
            rowCount: query.rows.length,
            data: {
                restaurants: query.rows[0]
            }
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(404, error);
    }
})

router.post("/", async (req, res) => {
    try {
        var query = await db.query("INSERT INTO restaurant (name, location, price_range) VALUES ($1, $2, $3) returning *", [
            req.body.name,
            req.body.location,
            req.body.price_range
        ]);

        console.log(query);

        res.status(200).json({
            status: "success",
            rowCount: query.rows.length,
            data: {
                restaurants: query.rows[0]
            }
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(404, error);
    }
})

module.exports = router;