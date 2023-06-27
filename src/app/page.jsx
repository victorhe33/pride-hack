import styles from './page.module.css'
import DataList from './components/DataList';

const API_URL= process.env.API_URL;
  //Hardcoded fetchData to test DataList component
  //fetch API works but it is not connected to DataList component yet
const fetchData = [
  {
      "id": 66373,
      "name": "eyedrum",
      "street": "515 ralph david abernathy blvd",
      "city": "Atlanta",
      "state": "Georgia",
      "accessible": false,
      "unisex": true,
      "directions": "straight back from door",
      "comment": "art venue",
      "latitude": 33.7371979,
      "longitude": -84.40504030000001,
      "created_at": "2023-06-26T02:27:36.601Z",
      "updated_at": "2023-06-26T02:27:36.692Z",
      "downvote": 0,
      "upvote": 0,
      "country": "GB",
      "changing_table": false,
      "edit_id": 66373,
      "approved": true
  },
  {
      "id": 66372,
      "name": "Minnesota Marine and Art Museum",
      "street": "800 Riverview Dr",
      "city": "Winona",
      "state": "MN",
      "accessible": true,
      "unisex": true,
      "directions": "You need to pay to enter the museum ($10, June 2023)",
      "comment": "It's not right on the front, but but near the middle of the small museum. There are 2 single stall restrooms. ",
      "latitude": 44.0596068,
      "longitude": -91.6574725,
      "created_at": "2023-06-26T01:30:54.606Z",
      "updated_at": "2023-06-26T01:30:54.692Z",
      "downvote": 0,
      "upvote": 1,
      "country": "US",
      "changing_table": false,
      "edit_id": 66372,
      "approved": true
  },
  {
      "id": 66371,
      "name": "Joe Jr",
      "street": "167 3rd Ave",
      "city": "New York",
      "state": "NY",
      "accessible": false,
      "unisex": true,
      "directions": "Directly in the back, through the orange door",
      "comment": "Very tiny bathroom, definitely not accessible. Bathroom is only for paying customers ",
      "latitude": 40.8294702,
      "longitude": -73.9066398,
      "created_at": "2023-06-26T00:25:20.662Z",
      "updated_at": "2023-06-26T00:25:20.709Z",
      "downvote": 0,
      "upvote": 0,
      "country": "US",
      "changing_table": false,
      "edit_id": 66371,
      "approved": true
  },
  {
      "id": 66370,
      "name": "Safeway Grocery ",
      "street": "757 E 20th Ave",
      "city": "Denver",
      "state": "Colorado",
      "accessible": false,
      "unisex": true,
      "directions": "Once you get in the lobby and  on your left. You’ll have to ask someone present for a key. ",
      "comment": "Paying customers usually, but the guard on weekends will let you in without questioning you. ",
      "latitude": 39.7477101,
      "longitude": -104.977904,
      "created_at": "2023-06-26T00:21:33.076Z",
      "updated_at": "2023-06-26T00:21:33.162Z",
      "downvote": 0,
      "upvote": 0,
      "country": "US",
      "changing_table": false,
      "edit_id": 66370,
      "approved": true
  },
  {
      "id": 66369,
      "name": "Prédio Administrativo IFSC - Banheiro Acessível",
      "street": "Prédio Administrativo I.F.S.C - R. Miguel Petroni, 116-144, Jardim Bandeirantes",
      "city": "São carlos",
      "state": "São Paulo",
      "accessible": true,
      "unisex": false,
      "directions": "Passar pelas catracas na secretaria. Por trás da estrutura vermelha, na frente da sala dos sofás pretos.",
      "comment": "Precisa ter qualquer cartão de estudante da USP, não apenas do IFSC. Aberto 24 horas. Há secretária que também pode te deixar passar.",
      "latitude": -22.0091594,
      "longitude": -47.896953,
      "created_at": "2023-06-25T21:56:36.462Z",
      "updated_at": "2023-06-25T21:56:36.547Z",
      "downvote": 0,
      "upvote": 0,
      "country": "BR",
      "changing_table": false,
      "edit_id": 66369,
      "approved": true
  },
  {
      "id": 66366,
      "name": "Indianapolis Public Library - West Perry Branch",
      "street": "S Harding St",
      "city": "Indianapolis",
      "state": "Indiana",
      "accessible": true,
      "unisex": true,
      "directions": "Once you enter, just head left towards the check-out station, there's a hallway with two gendered bathrooms and one unisex.",
      "comment": "",
      "latitude": 39.7113241,
      "longitude": -86.1869267,
      "created_at": "2023-06-25T19:16:44.507Z",
      "updated_at": "2023-06-25T19:16:44.597Z",
      "downvote": 0,
      "upvote": 0,
      "country": "US",
      "changing_table": true,
      "edit_id": 66366,
      "approved": true
  },
  {
      "id": 66365,
      "name": "Bento Kitchen Cravings",
      "street": "310 N Clippert St, Unit 6",
      "city": "Lansing",
      "state": "Michigan",
      "accessible": true,
      "unisex": true,
      "directions": "When you face the cashier, it will be right behind you",
      "comment": "Clean, very spacious, gender neutral bathroom",
      "latitude": 42.7373233,
      "longitude": -84.50755339999999,
      "created_at": "2023-06-25T18:30:10.029Z",
      "updated_at": "2023-06-25T18:30:10.114Z",
      "downvote": 0,
      "upvote": 1,
      "country": "US",
      "changing_table": false,
      "edit_id": 66365,
      "approved": true
  },
  {
      "id": 66364,
      "name": "Race street cafe",
      "street": "208 Race street",
      "city": "Philadelphia ",
      "state": "PA",
      "accessible": false,
      "unisex": false,
      "directions": "Basement",
      "comment": "Great food and service too ",
      "latitude": 39.953651,
      "longitude": -75.1434501,
      "created_at": "2023-06-25T18:24:05.712Z",
      "updated_at": "2023-06-25T18:24:05.796Z",
      "downvote": 0,
      "upvote": 0,
      "country": "US",
      "changing_table": false,
      "edit_id": 66364,
      "approved": true
  },
  {
      "id": 66363,
      "name": "Chocolat Hillcrest ",
      "street": "3896 5th Ave",
      "city": "San Diego 92103",
      "state": "CA",
      "accessible": true,
      "unisex": false,
      "directions": "",
      "comment": "",
      "latitude": 32.7481582,
      "longitude": -117.1606145,
      "created_at": "2023-06-25T15:44:51.213Z",
      "updated_at": "2023-06-25T15:44:51.312Z",
      "downvote": 0,
      "upvote": 1,
      "country": "US",
      "changing_table": false,
      "edit_id": 66363,
      "approved": true
  },
  {
      "id": 66362,
      "name": "Caffè Calabria",
      "street": "3933 30th St",
      "city": "San Diego 92104",
      "state": "CA",
      "accessible": false,
      "unisex": true,
      "directions": "",
      "comment": "",
      "latitude": 32.7492063,
      "longitude": -117.1297383,
      "created_at": "2023-06-25T15:42:13.161Z",
      "updated_at": "2023-06-25T15:42:13.241Z",
      "downvote": 0,
      "upvote": 1,
      "country": "US",
      "changing_table": false,
      "edit_id": 66362,
      "approved": true
  }
]

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      <DataList dataList={fetchData}/>
      <button> button </button>
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

async function getRestroomsByDate(year, month, day, pageNum, filterForADA=undefined, filterForUnisex=undefined, filterForUpdated=undefined) {
  const res = await fetch(API_URL + '/api/restrooms/by_date' + `/${year}/${month}/${day}/${pageNum}/${filterForADA}/${filterForUnisex}/${filterForUpdated}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

async function getRestroomsByLocation(lat, lng, pageNum, filterForADA=undefined, filterForUnisex=undefined) {
  const res = await fetch(API_URL + '/api/restrooms/by_location' + `/${lat}/${lng}/${pageNum}/${filterForADA}/${filterForUnisex}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

async function getRestroomsBySearch(searchQuery, pageNum, filterForADA=undefined, filterForUnisex=undefined) {
  const res = await fetch(API_URL + '/api/restrooms/search' + `/${searchQuery}/${pageNum}/${filterForADA}/${filterForUnisex}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}