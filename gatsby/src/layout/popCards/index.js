import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import Image from '../image';
import './style.css';

const propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
}

function PopCards(props) {
  const {title, links,} = props;
  return (
    <React.Fragment>  
      <div className="row">
        <div className="col-md-12">
          <h2 className="subtitle">{title}</h2>
        </div>
      </div>
      <div className="row mb-70">
        <div className="col-md-12">
          <ul className="pop-docs top-docs-1col">
            {links.map((link)=>(
              <li key={link.url}>
                <div className="popIcon">
                  <Image
                    alt={link.text}
                    path={link.icon}
                    className='main-topic-info__plugin-image'               
                  />
                </div>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

PopCards.propTypes = propTypes

export default PopCards
