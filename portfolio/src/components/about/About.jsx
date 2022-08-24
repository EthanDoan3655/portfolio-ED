import React from 'react'
import './About.css'
import ME from '../../assets/me.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {AiOutlineCar} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="About Image"/>

        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>6 month Full-Stack Coding Apprenticeship</small>
        </article>
        <article className='about__card'>
          <AiOutlineCar className='about_icon'/>
          <h5>Hobbies</h5>
          <small>
            <ul>
              <li>Alter/Create Clothes</li>
              <li>Automotives</li>
              <li></li>
            </ul>
          </small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>Some Of My Work So Far</small>
        </article>
        </div>

        <p>
        I am an aspiring Software Developer who is passionate about innovating in the Tech and Computer Science space. I was born and raised in Charlotte, North Carolina. I have always been fascinated with figuring out how things work, which is probably why It seems like I pick up a new hobby every week. This obsession with trying to become of jack of all trades has led me into picking up some random skills. However, it would also lead me to find a love for software development, the field in which there is always something to gain proficiency in and outside of coding.        </p>

        <a href='#contact' className='btn btn-primary'> Lets Connect</a>
      </div>
    </div>
    </section>
  )
}

export default About