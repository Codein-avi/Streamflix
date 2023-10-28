import './App.css';  // Applies the required CSS to the project
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import requests from './request';



function App() {
  return (
    <div className="app">

      <Navbar />
      
      <Banner />
       
      <Row title="STREAMFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals/*this fetchURL fetches images*/} 
      isLargeRow />

      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

     
    </div>
  );
}

export default App;