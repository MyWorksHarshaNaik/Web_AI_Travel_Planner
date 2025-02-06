import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { RiSendPlaneFill } from "react-icons/ri";
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';


function InfoSection({trip}) {

   // use this when you have google place api 
/*
  const [photoUrl, setPhotoUrl]=useState();

  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip])

  const GetPlacePhoto= async()=>{
    const data = {
      textQuery:trip?.userSelection?.location
    }
    const result = await GetPlaceDetails().then(resp=>{
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    }) 
  }
*/
  return (
    <div>
        <img src='/island.jpg'/*{photoUrl}*/ className='h-[300px] w-full object-cover rounded-xl'/>

        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-500 text-xs md:textt-md'>📅 {trip?.userSelection?.noOfDays} Day</h2>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-500 text-xs md:textt-md'>💰 {trip?.userSelection?.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-500 text-xs md:textt-md'>🍹 No. of Traveler: {trip?.userSelection?.traveler}</h2>
                </div>
            </div>
            <Button><RiSendPlaneFill /></Button>
        </div>
    </div>
  )
}

export default InfoSection