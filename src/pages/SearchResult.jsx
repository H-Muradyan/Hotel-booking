import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { searchListings } from '../api/datas/allHotels';
import SearchForm from '../components/home/hero/SearchForm';
import HotelCard from '../components/home/hotels/HotelCard';

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const [hotels, setHotels] = useState();
  
    const location = searchParams.get('location');
    const date = searchParams.get('date');
    const bed = searchParams.get('bed');
  
    useEffect(() => {
      searchListings({ location, date, bed }).then((res) => {
        setHotels(res.data);
      });
    }, [window.location.search]);
  
    return (
      <>
        <div>
          <SearchForm locationProps={location} dateProps={date} bedProps={bed} />
        </div>
        <div>
          <div>
            {hotels && (
              <h4>
                {hotels.length}
                {hotels.length === 1 ? 'hotel' : 'hotels'} found
              </h4>
            )}
          </div>
        </div>
        <div className='md:grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 md:col-start-2 max-w-screen-2xl m-auto'>
          {hotels && hotels.length ? (
            hotels.map((hotel) => (
                <div
                className="col-span-4 shadow-lg shadow-neutral-900/90 rounded-2xl relative md:h-72 mb-5 group md:overflow-hidden"
                key={hotel._id}
                md={3}
              >
                <Link to={`/hotels/${hotel._id}`} className="">
                  <HotelCard hotel={hotel} />
                </Link>
              </div>
            ))
          ) : (
            <span>no hotels found</span>
          )}
        </div>
      </>
    );
  };
  
  export default SearchResult;
  