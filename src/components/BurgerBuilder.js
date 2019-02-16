import React, { Component, useContext } from 'react';
import { Button } from 'reactstrap';

import Burger from './Burger/Burger';

const BurgerContext = React.createContext();

const BurgerControl = React.memo(props => {
    const { lessClick, moreClick } = useContext(BurgerContext);
    return(
        <div>
            <p style={{marginRight: 10}}>{props.ingredient}</p>
            <div>
                <Button onClick={lessClick.bind(this, props.ingredient)}>Less</Button>
                <input type="text" value={props.amount} disabled />
                <Button onClick={moreClick.bind(this, props.ingredient)}>More</Button>
            </div>
        </div>
    );
})

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 1,
            cheese: 0,
            bacon: 0
        }
    }
    componentDidUpdate() {
        console.log(this.state);
    }
    lessClick = (ingredient) => {
        this.setState(state => {
            const newState = {...state.ingredients};
            newState[ingredient]--;
            console.log(newState);
            return {ingredients: newState}; 
        })
    }
    moreClick = (ingredient) => {
        this.setState(state => {
            const newState = {...state.ingredients};
            newState[ingredient]++;
            console.log(newState);
            return {ingredients: newState}; 
        })
    }
    render(){
        const { ingredients } = this.state;
        return(
            <div className="BurgerBuilder">
                <Burger ingredients={ ingredients }/>
                <BurgerContext.Provider value={{lessClick: this.lessClick, moreClick: this.moreClick}}>
                {
                    Object.keys(ingredients).map(igKey => {
                        return <BurgerControl ingredient={igKey} amount={ingredients[igKey]}/>
                    })
                }
                </BurgerContext.Provider>
            </div>
        )
    }
}