import React, { useRef } from 'react';
import './sortiments.css';
import { NavLink } from 'react-router-dom';

const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'})

const Sortiments = ({name, picture}) => {

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
)

    const sortimentRef = useRef(null)

    const executeScroll = async () => {
      await delay(130)

      scrollToRef(sortimentRef)
    }


  return (
      <NavLink to={'Sortiment/'+ name} className="slide__sortiment-links" ref={sortimentRef} onClick={executeScroll}>
        <img src={ require('../../assets/sortiment/' + picture + '.webp') } alt={name}/>
        <h2>{'Sortiment' + name}</h2>
      </NavLink>
  )
}

export default Sortiments