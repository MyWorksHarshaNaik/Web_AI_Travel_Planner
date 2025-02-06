import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to visit</h2>

      <div>
        {trip?.tripData?.itinerary &&
          Object.keys(trip.tripData.itinerary)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true })) // Ensure sorted order
            .map((dayKey) => (
              <div key={dayKey} className='mt-5'>
                <h2 className="font-medium text-lg">{dayKey}</h2>
                <div className='grid md:grid-cols-2 gap-5'>
                {trip.tripData.itinerary[dayKey]?.plan?.map((place, index) => ( // Correct access to `plan`
                  <div key={index} >
                    <h2 className='font-medium text-sm text-orange-500'>{place.time}</h2>
                    <PlaceCardItem place={place}/>
                  </div>
                ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
// 2 hours :30 min
export default PlacesToVisit;
