import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.scss';

const MovieDetail = () => {
  const param = useParams();
  console.log('param', param, Number(param.id));

  const [dataDetail, setDataDetail] = useState([]);
  const [filterDataDetail, setFilterDataDetail] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  };

  const fetchData = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
      config
    );
    setDataDetail(data.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const newdetailData = dataDetail?.filter(
      (el, id) => el?.id === Number(param.id)
    );
    setFilterDataDetail(newdetailData);
    console.log(newdetailData);
  }, [dataDetail, param]);

  console.log('dataDetail', dataDetail);

  return (
    <>
      {dataDetail.length === 0 ? (
        <div className='flexbox'>
          <div>
            <div class='reverse-spinner'></div>
          </div>
        </div>
      ) : (
        <div className='movie-detail-wrapper'>
          <div className='container'>
            {filterDataDetail.map((el, id) => (
              <div key={el.title} className='content-wrapper'>
                <div className='content'>
                  <div className='left'>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                      alt='imagePoster'
                    />
                  </div>
                  <div className='right'>
                    <div className='title'>{el.title}</div>
                    <p>Overview: {el.overview}</p>
                    <p>Release Date: {el.release_date}</p>
                    <p>Popularity: {el.popularity}</p>
                    <p>Vote: {el.vote_average}</p>
                    <p>Vote Count: {el.vote_count}</p>
                    <p>Lang: {el.original_language}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
