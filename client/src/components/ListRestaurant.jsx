import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useNavigate  } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";

export default function ListRestaurant(props) {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await RestaurantFinder.get("apirestaurant/getRestaurant");

        setRestaurants(res?.data?.data?.restaurants);
      } catch (error) {}
    }
    fetchData();
  }, []);

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`restaurant/${id}/update`);
  };

  const handleSelect = (e, id) => {
    e.stopPropagation();
    navigate(`restaurant/${id}`);
  };

  const handleClick = async (e, id) => {
    try {

        e.preventDefault();

        const confirmBox = window.confirm("Do you really want to delete this?");

        if(confirmBox === true) {
            const res = await RestaurantFinder.delete(`/apirestaurant/getRestaurant/${id}`);

            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id;
            }))

            alert("Delete successfully")
        }
        
    } catch (error) {
        alert(error);
    }
  }

  return (
    <div className="list-restaurant">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id} onClick={(e) => handleSelect(e, restaurant.id)}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>D</td>
                  <td>
                    <button onClick={(e) => handleUpdate(e, restaurant.id)} className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button onClick={(e) => handleClick(e, restaurant.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
