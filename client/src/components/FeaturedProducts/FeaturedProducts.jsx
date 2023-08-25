import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'
const FeaturedProducts = ({type}) => {
    const data =[
        {
            id:1,
            img: "https://images.pexels.com/photos/6839163/pexels-photo-6839163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/6839183/pexels-photo-6839183.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title:"Best Style In London",
            isNew:true,
            oldPrice:19,
            price:25
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/11354160/pexels-photo-11354160.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/11354154/pexels-photo-11354154.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Best Style In London",
            isNew: false,
            oldPrice: 19,
            price: 25
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/12551562/pexels-photo-12551562.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/12551552/pexels-photo-12551552.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Best Style In London",
            isNew: true,
            oldPrice: 19,
            price: 25
        },
        {
            id:4,
            img: "https://images.pexels.com/photos/17433110/pexels-photo-17433110/free-photo-of-young-woman-posing-in-an-elegant-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/17433112/pexels-photo-17433112/free-photo-of-young-woman-posing-in-an-elegant-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Best Style In London",
            isNew: false,
            oldPrice: 19,
            price: 25
        },
    ]
    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                {data.map(item=>
                    (<Card item={item} key={item.id} />)
                )}
            </div>
        </div>
    )
}

export default FeaturedProducts