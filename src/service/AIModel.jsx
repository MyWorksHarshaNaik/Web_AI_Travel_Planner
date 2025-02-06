import {
  GoogleGenerativeAI
} from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a affordable budget , Give me a Hotels options list with Hotel Name , Hotel Address, Price , hotel image url, geo coordinates, rating descriptions and suggest itinerary with place Name , Place Details, Place Image URL, Geo Coordinates, ticket Pricing , rating ,Time  travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a affordable budget , Give me a Hotels options list with Hotel Name , Hotel Address, Price , hotel image url, geo coordinates, rating descriptions and suggest itinerary with place Name , Place Details, Place Image URL, Geo Coordinates, ticket Pricing , rating ,Time  travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "tripName": "Las Vegas Budget Getaway for Couples (3 Days)",\n  "budget": "Affordable",\n  "travelers": 2,\n  "duration": 3,\n  "hotels": [\n    {\n      "name": "Circus Circus Hotel & Casino",\n      "address": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "priceRange": "$50-$150/night",\n      "imageUrl": "https://www.circuscircus.com/wp-content/uploads/2023/08/CircusCircus_Hero_Image.jpg", \n      "geoCoordinates": {\n        "latitude": 36.1215,\n        "longitude": -115.1739\n      },\n      "rating": "3.5 stars",\n      "description": "A classic Vegas hotel with a circus theme, affordable prices, and family-friendly amenities.  May be a bit dated but offers good value."\n    },\n    {\n      "name": "Excalibur Hotel & Casino",\n      "address": "3850 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "priceRange": "$60-$180/night",\n      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/12/a5/15/excalibur-hotel-casino.jpg?w=1200&h=-1&s=1",\n      "geoCoordinates": {\n        "latitude": 36.1000,\n        "longitude": -115.1723\n      },\n      "rating": "3.0 stars",\n      "description": "Medieval-themed hotel on the Strip, known for its affordability and convenient location.  Expect a slightly older feel."\n\n    },\n    {\n      "name": "The LINQ Hotel + Experience",\n      "address": "3545 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "priceRange": "$80-$200/night",\n      "imageUrl": "https://www.caesars.com/content/dam/caesars-entertainment/linq/images/hero-image.jpg",\n      "geoCoordinates": {\n        "latitude": 36.1080,\n        "longitude": -115.1716\n      },\n      "rating": "4.0 stars",\n      "description": "Modern hotel with a central location on the Strip, offering a more stylish experience than some budget options. Slightly more expensive but potentially better value for couples."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "theme": "Exploring the Strip & Fremont Street",\n      "plan": [\n        {\n          "name": "Fremont Street Experience",\n          "details": "Vibrant pedestrian mall with light shows, street performers, and casinos.",\n          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Fremont_Street_Experience_at_night.jpg/1280px-Fremont_Street_Experience_at_night.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1699,\n            "longitude": -115.1404\n          },\n          "ticketPrice": "Free",\n          "rating": "4.5 stars",\n          "time": "Evening (7 PM - 10 PM)"\n        },\n        {\n          "name": "Walk the Las Vegas Strip",\n          "details": "See the iconic hotels and casinos, enjoy the atmosphere.",\n          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Las_Vegas_Strip_at_night.jpg/1280px-Las_Vegas_Strip_at_night.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1146,\n            "longitude": -115.1729\n          },\n          "ticketPrice": "Free",\n          "rating": "5 stars",\n          "time": "Afternoon (2 PM - 6 PM)"\n        }\n      ]\n    },\n    "day2": {\n      "theme": "Nature & Affordable Fun",\n      "plan": [\n        {\n          "name": "Red Rock Canyon National Conservation Area",\n          "details": "Stunning desert landscape with hiking trails and scenic drives.",\n          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Red_Rock_Canyon_National_Conservation_Area.jpg/1280px-Red_Rock_Canyon_National_Conservation_Area.jpg",\n          "geoCoordinates": {\n            "latitude": 36.2046,\n            "longitude": -115.6571\n          },\n          "ticketPrice": "$15 per vehicle",\n          "rating": "4.5 stars",\n          "time": "Morning (9 AM - 1 PM)"\n        },\n        {\n          "name": "Downtown Container Park",\n          "details": "Unique shopping and dining area made from repurposed shipping containers.",\n          "imageUrl": "https://www.downtowncontainerpark.com/wp-content/uploads/2021/01/hero-image-desktop.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1645,\n            "longitude": -115.1403\n          },\n          "ticketPrice": "Free (Shopping and dining costs extra)",\n          "rating": "4 stars",\n          "time": "Evening (6 PM - 9 PM)"\n        }\n      ]\n    },\n    "day3": {\n      "theme": "Pool Day & Shows (Optional)",\n      "plan": [\n        {\n          "name": "Pool time at your hotel (or a public pool)",\n          "details": "Relax and enjoy the Las Vegas sun.",\n          "imageUrl": "Generic pool image (replace with a relevant image URL)",\n          "geoCoordinates": {\n            "latitude": "Check your hotel\'s coordinates",\n            "longitude": "Check your hotel\'s coordinates"\n          },\n          "ticketPrice": "Free (or hotel pool fee)",\n          "rating": "Depends on the pool",\n          "time": "Afternoon (12 PM - 4 PM)"\n        },\n        {\n          "name": "Optional: Free Show (Check for free fountain shows or street performances)",\n          "details": "Enjoy a free entertainment option.",\n          "imageUrl": "Placeholder image (replace with the chosen show\'s image)",\n          "geoCoordinates": "Varies based on the show location",\n          "ticketPrice": "Free",\n          "rating": "Varies based on the show",\n          "time": "Evening (8 PM onwards)"\n        }\n      ]\n    }\n  }\n}\n```\n\n\n**Note:**  Image URLs are placeholders in some cases. You should replace them with actual image URLs.  Hotel prices are estimates and will vary depending on the season and availability.  Check for specific showtimes and availability for any shows you choose to attend.  Always confirm ticket pricing and availability before your trip.  Consider using a ride-sharing service or the bus system to get around to save on transportation costs.\n',
        },
      ],
    },
  ],
});

