import styles from './page.module.css'
import DataList from './components/DataList';
const API_URL = process.env.API_URL;
import Tarik from './map/page'

// Hardcoded at this demo point
const sampleData = [
  {
    "id": 35212,
    "name": "Mayday Space",
    "street": "176 St Nicholas Ave",
    "city": "Brooklyn",
    "state": "NY",
    "accessible": false,
    "unisex": true,
    "directions": "This is a building shared between a radical community space and 2 churches. Doors are open, walk in and ask to use the restroom",
    "comment": "All Gender Restrooms with stalls on the 2nd and 3rd floor",
    "latitude": 40.7041612,
    "longitude": -73.9162057,
    "created_at": "2017-05-21T20:53:13.926Z",
    "updated_at": "2017-05-21T20:53:13.926Z",
    "downvote": 0,
    "upvote": 1,
    "country": "US",
    "changing_table": false,
    "edit_id": 35212,
    "approved": true,
    "distance": 0.14351840111781344,
    "bearing": "37.479937558603"
  },
  {
    "id": 50159,
    "name": "Dromedary Urban Tiki Bar",
    "street": "266 Irving Ave",
    "city": "Brooklyn",
    "state": "New York",
    "accessible": false,
    "unisex": false,
    "directions": "All the way in the back to the right. Near the kitchen ",
    "comment": "",
    "latitude": 40.6996134,
    "longitude": -73.9157973,
    "created_at": "2019-06-02T22:48:51.201Z",
    "updated_at": "2019-06-02T22:48:51.221Z",
    "downvote": 0,
    "upvote": 1,
    "country": "US",
    "changing_table": false,
    "edit_id": 50159,
    "approved": true,
    "distance": 0.2118980762159411,
    "bearing": "147.026180982403"
  },
  {
    "id": 24805,
    "name": "Old Stanley's Bar",
    "street": "226 Wyckoff Ave",
    "city": "Brooklyn",
    "state": "NY",
    "accessible": false,
    "unisex": true,
    "directions": "Walk in and straight back. There are two gender neutral single person bathrooms on the left!",
    "comment": "",
    "latitude": 40.7009385,
    "longitude": -73.9139734,
    "created_at": "2016-08-18T23:41:23.137Z",
    "updated_at": "2016-08-18T23:41:23.137Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": false,
    "edit_id": 24805,
    "approved": true,
    "distance": 0.21321828345133165,
    "bearing": "111.570845062769"
  },
  {
    "id": 34029,
    "name": "Sea Wolf",
    "street": "Wycokff Ave ",
    "city": "Brooklyn ",
    "state": "NY",
    "accessible": false,
    "unisex": true,
    "directions": "At the back behind the kitchen ",
    "comment": "Gender neutral.  Door locks from the front.  Urinal and locked stall inside ",
    "latitude": 40.700358,
    "longitude": -73.91256899999999,
    "created_at": "2017-04-13T20:55:33.399Z",
    "updated_at": "2017-04-13T20:55:33.399Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": false,
    "edit_id": 34029,
    "approved": true,
    "distance": 0.2969961990425863,
    "bearing": "111.820312390774"
  },
  {
    "id": 58462,
    "name": "Dweebs",
    "street": "1434 Dekalb Ave",
    "city": "Brooklyn",
    "state": "NY",
    "accessible": false,
    "unisex": true,
    "directions": "",
    "comment": "",
    "latitude": 40.7004407,
    "longitude": -73.92268659999999,
    "created_at": "2021-07-31T15:40:47.127Z",
    "updated_at": "2021-07-31T15:40:47.162Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": false,
    "edit_id": 58462,
    "approved": true,
    "distance": 0.2985960742391553,
    "bearing": "249.338548893164"
  },
  {
    "id": 24252,
    "name": "Dweebs Cafe",
    "street": "1434 Dekalb Ave",
    "city": "Brooklyn",
    "state": "NY",
    "accessible": false,
    "unisex": true,
    "directions": "In the back, a single door marked WC (water closet).",
    "comment": "Cool, quirky cafe with some queer staff & nice staff in general. They'd probably be okay if you really needed to go",
    "latitude": 40.700413,
    "longitude": -73.9226709,
    "created_at": "2016-07-24T15:54:45.090Z",
    "updated_at": "2016-07-24T15:54:45.090Z",
    "downvote": 0,
    "upvote": 1,
    "country": "US",
    "changing_table": false,
    "edit_id": 24252,
    "approved": true,
    "distance": 0.29871941588730616,
    "bearing": "249.007825342241"
  },
  {
    "id": 54075,
    "name": "Mil Mundos Books",
    "street": "323 Linden Street",
    "city": "Brooklyn",
    "state": "New York",
    "accessible": true,
    "unisex": true,
    "directions": "",
    "comment": "SAFE SPACE 💖",
    "latitude": 40.6987114,
    "longitude": -73.9143277,
    "created_at": "2019-11-20T00:22:13.641Z",
    "updated_at": "2020-04-14T21:02:31.591Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": false,
    "edit_id": 54075,
    "approved": true,
    "distance": 0.30464690549170736,
    "bearing": "138.305334646555"
  },
  {
    "id": 16919,
    "name": "Heavy Woods",
    "street": "50 Wyckoff Ave",
    "city": "Brooklyn",
    "state": "NY",
    "accessible": true,
    "unisex": true,
    "directions": "Straight back and to the left, across from the where plates are placed for waitstaff",
    "comment": "Cool bar with food, you should probably buy something though. There's a ramp that goes into the establishment as well",
    "latitude": 40.705535,
    "longitude": -73.9216859,
    "created_at": "2015-03-26T15:29:24.787Z",
    "updated_at": "2015-03-26T15:29:24.787Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": false,
    "edit_id": 16919,
    "approved": true,
    "distance": 0.30684230755687325,
    "bearing": "307.684947646456"
  },
  {
    "id": 17553,
    "name": "Heavy Woods",
    "street": "50 Wyckoff Ave",
    "city": "Brooklyn",
    "state": "NY",
    "accessible": false,
    "unisex": true,
    "directions": "Straight back, across from the kitchen window; a second one around the corner in the Lounge",
    "comment": "This is a bar with Cajun food and a cafe during the day. You should probably make a purchase",
    "latitude": 40.705535,
    "longitude": -73.9216859,
    "created_at": "2015-05-25T23:56:05.138Z",
    "updated_at": "2015-05-25T23:56:05.138Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": false,
    "edit_id": 17553,
    "approved": true,
    "distance": 0.30684230755687325,
    "bearing": "307.684947646456"
  },
  {
    "id": 18684,
    "name": "Owl Juice Cafe",
    "street": "48 Wyckoff",
    "city": "Brooklyn",
    "state": "NY",
    "accessible": false,
    "unisex": true,
    "directions": "Straight in the back. Requires a key.",
    "comment": "This is a cafe/juicery. They have wifi, so its a nice place to hang out if you have time to kill. As mentioned, the bahtroom requires a key - so you should be a paying customer.",
    "latitude": 40.7057222,
    "longitude": -73.9217309,
    "created_at": "2015-09-13T14:11:21.705Z",
    "updated_at": "2015-09-13T14:11:21.705Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": false,
    "edit_id": 18684,
    "approved": true,
    "distance": 0.31781011580200835,
    "bearing": "308.980347326953"
  }
]

export default async function Home() {
  const hardcode = { lat: 40.70236538915158, lng: -73.91758267534527 }
  const restrooms = await getRestroomsByLocation(40.70236538915158, -73.91758267534527, 1)

  return (
    <main className={styles.main}>
      <h1>Gender Neutral Bathroom Finder</h1>
      <Tarik restrooms={restrooms} />
      Details
      <DataList dataList={sampleData}></DataList>
    </main>
  )
}

async function getDefaultRestrooms(pageNum) {
  const res = await fetch(API_URL + `/api/restrooms/${pageNum}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

async function getRestroomsByDate(year, month, day, pageNum, filterForADA = undefined, filterForUnisex = undefined, filterForUpdated = undefined) {
  const res = await fetch(API_URL + '/api/restrooms/by_date' + `/${year}/${month}/${day}/${pageNum}/${filterForADA}/${filterForUnisex}/${filterForUpdated}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

async function getRestroomsByLocation(lat, lng, pageNum, filterForADA = undefined, filterForUnisex = undefined) {
  const res = await fetch(API_URL + '/api/restrooms/by_location' + `/${lat}/${lng}/${pageNum}/${filterForADA}/${filterForUnisex}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

async function getRestroomsBySearch(searchQuery, pageNum, filterForADA = undefined, filterForUnisex = undefined) {
  const res = await fetch(API_URL + '/api/restrooms/search' + `/${searchQuery}/${pageNum}/${filterForADA}/${filterForUnisex}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}