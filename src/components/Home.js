import React from 'react'


export default function Home(props) {
    console.log(props.data);
    return (
        <div>
            <h1>Home</h1>
            <div className='cart'>
                <div className='img'>
                    <img src='https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Air-Max-PNG-Cutout.png' width={300} height={200}></img>
                </div>
                <div className='text'>
                    <div>
                        <span>NIKE Shoes</span>
                    </div>
                    <span>Price : $1000.00</span>
                </div>
                <div className='btn'>
                    <button 
                    onClick={()=>props.addToCartHandler({price:1000,name:'shoes'})}>
                    Add To Cart</button>
                </div>
            </div>
            <div className='svg'>
                <img src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png' alt='abc' width={100} height={100}>
                    
                </img>
                <span className='num'>{props.data.length}</span>
            </div>
        </div>
    )
}
