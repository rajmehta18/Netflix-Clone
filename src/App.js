import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      {/* <h1>Hello world</h1> */}

      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true} ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} ></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} ></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} ></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} ></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} ></Row>
      <Row title="Thrillers" fetchUrl={requests.fetchThrillers} ></Row>



    </div>
  );
}

export default App;
