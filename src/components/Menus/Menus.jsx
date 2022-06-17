import { Card } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import burger from '../Resources/burger.png'
import './SelectMenus.css'
const SelectMenus = () => {
    const menuList = [
        {
            id: Math.random(),
            name: 'Best Sellers'
        },
        {
            id: Math.random(),
            name: 'New Products'
        },
        {
            id: Math.random(),
            name: 'Family Meals'
        },
        {
            id: Math.random(),
            name: 'Breakfast'
        },
        {
            id: Math.random(),
            name: 'Chikenjoy'
        },
        {
            id: Math.random(),
            name: 'Ready to cook'
        },
        {
            id: Math.random(),
            name: 'Burgers'
        },

        {
            id: Math.random(),
            name: 'Jolly Spaghetti'
        },

        {
            id: Math.random(),
            name: 'Burger Steak'
        },

        {
            id: Math.random(),
            name: 'Super Meals'
        },

        {
            id: Math.random(),
            name: 'Chiken Sandwich'
        },
        {
            id: Math.random(),
            name: 'Jolly Hotdogs'
        },
        {
            id: Math.random(),
            name: 'Palabok'
        },
        {
            id: Math.random(),
            name: 'Fries & Sides'
        },
        {
            id: Math.random(),
            name: 'Desserts'
        },
        {
            id: Math.random(),
            name: 'Beverages'
        },
        {
            id: Math.random(),
            name: 'Jolly Kid Meal'
        },

    ]

    const dummyFood = [
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        },
        {
            id: Math.random(),
            name: "Dummy Food with Dummy Description",
            img: burger,
            price: 'Starts at 9999'
        }
    ]
    
    let {id}= useParams()
    return (
        <div className="menus_holder">
            
        <div className='select-menus'>
            <Card className="card1">
                {menuList.map((each) => (
                    <Link to={`/menus/${each.name}`}>
                        <div key={each.id} className='menu_names'>
                        <Link to={`/menus/${each.name}`}>{each.name}</Link>
                    </div>
                    </Link>
                ))}
            </Card>
            <div className='select-foods'>
                <div className='head-card'>
                    <Card className='headText'>
                        <div>
                        {`${id}`}
                        </div>
                    </Card>
                </div>
                <div className="dummy-food-list">
                    {dummyFood.map((each) =>
                        <Card className='dummy-food-card' key={each.id}>
                            <div><img src={each.img} alt="" /></div>
                            <div className='dummy-desc'>
                                <div className='name'>{each.name}</div>
                                <div className='price'>{each.price}</div>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
        </div>
    )
}

export default SelectMenus