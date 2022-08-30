import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import DetailsAnime from "./components/DetailsAnime";
import Container from '@mui/material/Container';
import { Routes, Route } from "react-router-dom";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=favorite`)
      .then(res => res.json());
      SetTopAnime(temp.data.slice(0, 10));
  }

  const GetInicialAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?&limit=10`)
      .then(res => res.json());
      SetAnimeList(temp.data);
  }

  const HandleSearch = e =>{
    e.preventDefault();
    FetchAnime(search)
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json());
      SetAnimeList(temp.data);
  }

  useEffect(() => {
    GetTopAnime();
    GetInicialAnime();
  }, [])

  return (
      <Container maxWidth="xl" className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<MainContent animeList={animeList} topAnime={topAnime} search={search} HandleSearch={HandleSearch} SetSearch={SetSearch}/>} />
          <Route path="/details/:id" element={<DetailsAnime />} />
        </Routes>
      </Container>
  );
}

export default App;
