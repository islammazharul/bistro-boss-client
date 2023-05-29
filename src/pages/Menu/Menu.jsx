import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import bannerImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import UseMenu from '../../hooks/UseMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Our Menu</title>
            </Helmet>
            <Cover img={bannerImg} title={"Our Menu"}></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertImg}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                title="salad"
                img={saladImg}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title="soup"
                img={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;