import React from 'react'
import {NavLink} from 'react-router-dom'

class CartShowCard extends React.Component {
    state = {
        cartItems: []
    }
    
    // componentDidUpdate(prevProps) {
    //     if (this.props.cartItem.length !== prevProps.cartItem.length) {
    //         this.setState({ cartItems: this.props.cartItem })
    //     }
    // }
    render () {
        // console.log('cart show cart', this.props.cartItem)
        
        return (

            <div className="item-card-cart">
                <div className="item-image">
                    <img alt="" className="item-card-picture" src={this.props.cartItem.image} />
                </div>
                <div className="item-name">
                    <NavLink to={`/items/${this.props.cartItem.id}`}> <h2>{this.props.cartItem.name}</h2> </NavLink>
                </div>
                <h3>Price: ${this.props.cartItem.price}</h3>

                <p>Category: {this.props.cartItem.category}</p>
                <select name="quantity" >
                    <option value="1" selected> 1</option>
                    <option value="2" > 2</option>
                    <option value="3" > 3</option>
                    <option value="4" > 4</option>
                    <option value="5" > 5</option>
                    <option value="6" > 6</option>
                    <option value="7" > 7</option>
                    <option value="8" > 8</option>
                    <option value="9" > 9</option>
                    <option value="10"> 10</option>
                 </select> 
                <button className="add-to-cart" onClick={() => this.props.deleteHandler(this.props.cartItem.id)}>Remove Item</button>
            </div>
            
        )
    }
}

export default CartShowCard