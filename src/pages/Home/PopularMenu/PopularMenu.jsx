import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import UseMenu from '../../../hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-8'>
            <SectionTitle
                subHeading={"Check it Out"}
                heading={"From Our Menu"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;