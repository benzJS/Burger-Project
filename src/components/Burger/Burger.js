import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    const { ingredients } = props;
    const transformedIngredients = Object.keys(ingredients)
        .filter(key => ingredients[key] !== 0).map(igKey => {
            return [...Array(ingredients[igKey])].map((_, id) => {
                return <BurgerIngredient key={ igKey.concat(id) } type={ igKey }/>
            })
        })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;