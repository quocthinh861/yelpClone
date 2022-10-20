import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { restaurants } = useContext(RestaurantContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(
        `apirestaurant/getRestaurant/${id}`
      );
      console.log(response.data.data);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`apirestaurant/getRestaurant/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    navigate("/");
  };

  return (
    <section>
      <h1 className="font-weight-light display-1 text-center">
        Updating Restaurant
      </h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            id="price_range"
            className="form-control"
            type="number"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default UpdateRestaurant;
