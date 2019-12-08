import React from 'react';
import hallowleen  from '../images/Hallowleen.jpeg';
import War from '../images/War.jpeg';
import starwars from '../images/Starwars.jpeg';
import Movies from '../components/Movies'
export default function Moviesposter(props){
    return(
       <div className='movies'>
          <div className='continerdiv'>
            <Movies id ="movie1" title="hallowleen" src={hallowleen}></Movies>
            <Movies id ="movie2" title="War" src={War}></Movies> 
            <Movies id ="movie3" title="StarWar" src={starwars}></Movies>
        </div>
        <div className='continerdiv'>
            <Movies id ="movie4" title="hallowleen NEW" src={hallowleen}></Movies>
            <Movies id ="movie5" title="War NEW" src={War}></Movies>
            <Movies id ="movie6" title="StarWar NEW" src={starwars}></Movies>
        </div>
    </div>
    );
  }