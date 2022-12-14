import React, { useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";

export default function AddRestaurant() {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const {addRestaurant} = useContext(RestaurantContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await RestaurantFinder.post("/apirestaurant", {
                name, location, price_range: priceRange
            })

            addRestaurant(res?.data?.data?.restaurant);

        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="mb-4">
        <form action="">
            <div className="form-row">
            <div className="col">
                <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="name" />
            </div>
            <div className="col">
                <input
                    value={location} onChange={e => setLocation(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="location"
                />
            </div>
            <div className="col">
                <select className="custom-select my-1 mr-sm-2" value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                    <option disabled>Price Range</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                    <option value="5">$$$$$</option>
                </select>
            </div>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                Add
            </button>
            </div>
        </form>
        </div>
    );
}
