import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/6839163/pexels-photo-6839163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/6839183/pexels-photo-6839183.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Best Style In London",
            isNew: true,
            oldPrice: 19,
            price: 25,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae ut quia fuga magnam dolorum, distinctio in. Doloribus, possimus nam"
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/11354160/pexels-photo-11354160.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/11354154/pexels-photo-11354154.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Best Style In London",
            isNew: false,
            oldPrice: 19,
            price: 25,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae utquia fuga magnam dolorum, distinctio in. Doloribus, possimus nam"
        }
    ]

    return (
        <div className='cart'>
            <h1>Product in your cart</h1>
            {data.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 80)}</p>
                        <div className='price'>1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" />
                </div>
            ))}
           
            <div className="total">
                <span>SUBTOTAL</span>
                <span>50</span>
            </div>
            <button >PROCEED TO CHECKOUT</button>
            <span className="reset">
                Reset Cart
            </span>
        </div>
    )
}

export default Cart