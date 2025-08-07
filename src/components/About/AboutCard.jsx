import React from 'react'
import './About.css'

const AboutCard = () => {
  return (
    <>
    <div className="aboutCard top flex_space">
        <div className="row row1">
        <h4>About Us</h4>
        <h1>
            We <span>provide Solution </span>to grow your business
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque odit, recusandae tempora, distinctio doloribus deleniti culpa nisi fuga molestias laborum officia! At aliquid delectus sint ut sunt quisquam ex.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque odit, recusandae tempora, distinctio doloribus deleniti culpa nisi fuga molestias laborum officia! At aliquid delectus sint ut sunt quisquam ex.</p>
        <button className="secondary-btn">
            Explore More <i className="fa fa-long-arrow-right"></i>
        </button>
        </div>
        <div className="row image">
            <img src="/images/about-img-1.jpg" alt="" />
            <div className="control-btn">
                <button className="prev">
                <i className="fa fa-play"></i>
                </button>
            </div>
        </div>
    </div>

    </>
  )
}

export default AboutCard