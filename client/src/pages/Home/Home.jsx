import React from 'react'
import AddRestaurant from '../../components/AddRestaurant';
import ListRestaurant from '../../components/ListRestaurant';
import Header from '../Layout/Header';

const Home = () => {
    return (
        <section>
            <Header/>
            <AddRestaurant />
            <ListRestaurant />
        </section>
    )
}

export default Home;