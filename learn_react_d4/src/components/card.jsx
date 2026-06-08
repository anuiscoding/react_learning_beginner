import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props);
  return (
    <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>save <Bookmark size={15} color='black'/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.dateposted}</span></h3>
          <h2>{props.role}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div className='botag'>
            <h3>{props.pay}</h3>
            <p>{props.loc}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card