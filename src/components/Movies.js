import React from 'react';
import {Link} from 'react-router-dom';
export default function Movies(props){
    return(
      <Link to = {`/${props.id}`} className='item'>
          <h1 className='overlay'>{props.title}</h1>
          <img src={props.src} alt='poster'></img>
        </Link>
    );
  }