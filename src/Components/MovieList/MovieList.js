import React from 'react';
import '../../Pages/Home/Home.scss';
import { ReactComponent as Circle } from '../../assets/images/circle.svg';
import { Link } from 'react-router-dom';

const MovieList = ({ data }) => {
  const title = data?.title;
  const posterImage = data?.poster_path;
  const accualVote = data.vote_average;
  const vote = Math.ceil(data.vote_average);
  const newVal = vote * 15;
  const id = data.id;
  const lang = data.original_language;
  return (
    <Link
      to={`/moviedetail/${id}`}
      className='list-wrapper'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${posterImage})`,
      }}
    >
      <div className='overlay-wrapper'>
        <div className='title'>{title}</div>
        {/* <div className='vote' style={{ width: `${vote}%` }}></div> */}
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{ marginTop: '10px' }}
        >
          <circle
            cx='25'
            cy='25'
            r='24'
            stroke='green'
            strokeWidth='2'
            strokeDasharray={`${newVal} 150`}
          />
        </svg>
        <p style={{ color: '#fff', marginTop: '5px' }}>{accualVote}</p>
        <div className='lang'>
          <span>Lang</span>
          <span>{lang}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieList;
