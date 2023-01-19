import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieList from '../../Components/MovieList/MovieList';
import TitleWrapper from '../../Components/TitleWrapper/TitleWrapper';
import './Home.scss';

const Home = () => {
  // axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setData(data.data.results);
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <div className='home-wraapper'>
        <div className='container'>
          <TitleWrapper title='Movie List' subTitle='List of the movie'>
            <div className='pera'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </div>
          </TitleWrapper>
          <div className='movie-list-wrapper'>
            {loading ? (
              <div className='flexbox'>
                <div>
                  <div class='reverse-spinner'></div>
                </div>
              </div>
            ) : (
              data.map((list) => <MovieList key={list.id} data={list} />)
            )}
          </div>
          <div>Pagination</div>
        </div>
      </div>
    </>
  );
};

export default Home;
