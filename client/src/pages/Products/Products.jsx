import React, { useState } from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [sort,setSort]=useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={1} />
            <label htmlFor="2">shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={1} />
            <label htmlFor="3">shorts</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="priceRange">
            <span>50</span>
            <input type="range" name="" id="" min={50} max={5000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' name='price' onClick={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' name='price' onClick={e => setSort("desc")} />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List carId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products