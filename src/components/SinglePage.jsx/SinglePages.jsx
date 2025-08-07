import React, { useEffect, useState } from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import'./Singlepage.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import AllItem from '../Destinations/AllItem'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min' 
import Sdata from '../Destinations/Sdata'
import EmptyFile from '../../common/EmptyFile/EmptyFile'

const SinglePages = () => {
    const {id} = useParams()
    const [item,setItem] = useState(null)

    useEffect(() => {
      let item = Sdata.find((item) => item.id === parseInt(id))

      if(item){
        setItem(item)
      }
    }, [id])
    
  return (
    <>
    <HeadTitle />
    {item ? (
    <section className="single-page top">
        <div className="container">
            <Link to="/destination" className='primary-btn back'>
                <i className="fa fa-long-arrow-left"> Go Back</i>
            </Link>

            <article className='content flex'>
                <div className="main-content">
                    <img src={item.image} alt="" />
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>

                    <div className="para flex_space">
                    <p>{item.sidepara}</p>
                    <p>{item.sidepara}</p>
                    </div>
                    <h1>What is the {item.title} City?</h1>
                    <p>{item.desc}</p>

                    <div className="image grid1">
                        {/* <img src={item.paraImage_one} alt="imae" />
                        <img src={item.paraImage_two} alt="imae" /> */}
                        <img src={item.image} alt="imae" />
                        <img src={item.image} alt="imae" />
                    </div>
                    <p>{item.desc}</p>
                </div>

                <div className="side-content">
                    <div className="box">
                        <h2>How can we help you?</h2>
                        <p>{item.sidepara}</p>
                        <button className="outline-btn">
                            <i className='fa fa-phone'></i> Contact Us</button>
                    </div>

                    <div className="box2">
                        <p>{item.sidepara}</p>
                    </div>
                </div>
            </article>
        </div>
    </section>
    ) : (
        <EmptyFile />
    )}
    </>
  )
}

export default SinglePages