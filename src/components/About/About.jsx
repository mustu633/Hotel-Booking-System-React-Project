import React from 'react'
import AboutCard from './AboutCard'
import HeadTitle from '../../common/HeadTitle/HeadTitle'

const About = () => {
  return (
    <>
    <HeadTitle />
    <section className="about top">
        <div className="container">
            <AboutCard />
        </div>
    </section>

    <section className="features top">
        <div className="container aboutCard flex_space">
            <div className="row row1">
                <h1>
                    Our <span>Features</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque odit, recusandae tempora, distinctio doloribus deleniti culpa nisi fuga molestias laborum officia! At aliquid delectus sint ut sunt quisquam ex.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque odit, recusandae tempora, distinctio doloribus deleniti culpa nisi fuga molestias laborum officia! At aliquid delectus sint ut sunt quisquam ex.</p>
                <button className="secondary-btn">
                    Explore More <i className="fa fa-long-arrow-right"></i>
                </button>
            </div>
            <div className="row image">
            <img src="/images/feature-img-1.jpg" alt="" />
            <div className="control-btn">
                <button className="prev">
                <i className="fa fa-play"></i>
                </button>
            </div>
        </div>
        </div>
    </section>
    </>

  )
}

export default About