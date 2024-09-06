import React from 'react'

const FooterContac = (props) => {
  return (
    <div>
        <p className='font-bold text-white'>{props.header}</p>
        <ul>
            <a href={props.link}>
            <li>{props.first}</li>
            </a>
            
            <li>{props.second}</li>
            <li>{props.first}</li>
            <li>{props.first}</li>
        </ul>

    </div>
  )
}

export default FooterContac