import React from 'react'
import CardAnime from './CardAnime'
import Card from '@mui/material/Card';

function MainContent(props) {
  return (
    <div className='mainContent'>
      <aside>
        <Card>
          <h1>Top 1 Animes</h1>
          <hr/>
          {props.topAnime.map(anime => (
            <a
              href={"/details/" + anime.mal_id}
              key={anime.mal_id}
            >
              {anime.title}
            </a>
        ))}
        </Card>
      </aside>
      <div>
        <form className='buscar' onSubmit={props.HandleSearch}>
          <input type="search" placeholder="Procure por um anime..." value={props.search} onChange={e => props.SetSearch(e.target.value)}/>
        </form>
        <main>
          {props.animeList.map(anime => (
            <CardAnime anime={anime} key={anime.mal_id}/>
          ))}
        </main>
      </div>
    </div>
  )
}

export default MainContent