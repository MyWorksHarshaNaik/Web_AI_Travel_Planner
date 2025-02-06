import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function PlaceCardItem({place}) {

     // use this when you have google place api 
/*
    const [photoUrl, setPhotoUrl] = useState();
    
      useEffect(() => {
        place && GetPlacePhoto();
      }, [place]);
    
      const GetPlacePhoto = async () => {
        const data = {
          textQuery: place.name,
        };
        const result = await GetPlaceDetails().then((resp) => {
          console.log(resp.data.places[0].photos[3].name);
    
          const PhotoUrl = PHOTO_REF_URL.replace(
            "{NAME}",
            resp.data.places[0].photos[3].name
          );
          setPhotoUrl(PhotoUrl);
        });
      };
*/
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.name} target='_blank'>
        <div className='border-black rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-xl cursor-pointer'>
            <img src='/island.jpg' /*{photoUrl}*/
            className='w-[130px] h-[130px] rounded-xl'
            />
            <div>
                <h2 className='font-bold text-lg'>{place.name}</h2>
                <p className='text-sm text-gray-500'>{place.details}</p>
                <h2 className='mt-2'>🎫Ticket Price: {place.ticketPrice}</h2>
                {/* <Button size='sm'><FaMapLocationDot /></Button> */}
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardItem