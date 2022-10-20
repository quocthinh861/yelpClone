import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../../apis/RestaurantFinder";
import { RestaurantContext } from "../../context/RestaurantContext";

const Detail = () => {

    const {id} = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(
        RestaurantContext
      );

    useEffect(() => {
        try {
            const fetchData = async () => {
                const resp = await RestaurantFinder.get(`apirestaurant/getRestaurant/${id}`)
                
                setSelectedRestaurant(resp?.data?.data.restaurant);
            };

            fetchData();
        } catch (error) {
            
        }
    }, [])

    return (
        <>
            <section>
                {selectedRestaurant && selectedRestaurant.name}
            </section>
        </>
    )
}

export default Detail;