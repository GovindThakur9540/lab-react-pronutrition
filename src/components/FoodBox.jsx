import React, {Component} from 'react'

import Calories from './Calories'
import DisplayItems from './DisplayItems'

export default class FoodBox extends Component{
    constructor(props){
        super(props)
        this.state = {} //state holds all the item selected by user

        this.removeItem = this.removeItem.bind(this)
    }


    //when user clicks on add button beside the fooditem the this function identifies that item and add that item to state

    getValue = (e) =>{
        const count = parseInt(document.querySelector(`.${e.target.name}`).value)
        if(count){
            const cal = parseInt(document.querySelector(`#${e.target.name}`).innerHTML)
            this.setState({[e.target.name]:[count , count*cal]})
        }
    }

    //when user click on cross button it removes the item fro states

    removeItem(e){
        let name=e.target.name
        this.setState(prevState => {
            delete prevState[name]
            return{...prevState}
        })
    }

    //renders the item and its calories
    getCalories = () => {
        let calorieItems = []
        let count = 1
        for (let item in this.state) {

            const calItem = {
                name: item,
                count: this.state[item][0],
                calories: this.state[item][1]
            }
            calorieItems.push(<Calories key={count++} {...calItem} delete={this.removeItem} />
            )
        }

        return calorieItems
    }

    //calculate total calories of all selected items

    getTotalCaloriesCount = () => {

        let count = 0
        for (let item in this.state) {

            count = count + this.state[item][1]
        }

        return count
    }

    render(){
        let calorieItems = []
        let totalCalories = "0"

        if (this.state) {
            calorieItems = this.getCalories()
            totalCalories = this.getTotalCaloriesCount()
        }

        return(
            <div className="food-container" >
                <div className="box">
                    {/*Sending all data to displayItems component*/}
                    {this.props.items.map(item => <DisplayItems key={item.id} item={item} getValue={this.getValue} />)}
                </div>

                <div className="calories">
                    <h3 className="total-calories" style={{ marginLeft: "50px", marginBottom: "20px" }}>
                        Today's Food {totalCalories} cal
                    </h3>
                    {calorieItems}
                </div>
            </div>
        )
    }

}