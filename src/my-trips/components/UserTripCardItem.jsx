import React from 'react'
import { Link } from 'react-router-dom'

function UserTripCardItem({trip}) {

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
    <Link to={`/view-trip/${trip?.id}`}>
    <div className='border-black shadow-xl hover:scale-105 transition-all'>
        <img /*{src=photoUrl?photoUrl:'/island.jpg' }*/ 
        src='/island.jpg' 
        className='object-cover rounded-xl h-[220px]'/>
        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} days trip with {trip?.userSelection?.budget} budget</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem