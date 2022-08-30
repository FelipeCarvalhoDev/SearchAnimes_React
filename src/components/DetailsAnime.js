import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import moment from 'moment';

function DetailsAnime() {
  let id = useParams();

  let [detailAnime, SetDetailAnime] = useState();

  const GetDetailAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime/${id.id}`)
      .then(res => res.json());

      SetDetailAnime(temp.data);
  }

  useEffect(() => {
    GetDetailAnime();
  }, []);

  return (
    <Card className='detailsCard'>
      <aside>
        <img src={detailAnime?.images.jpg.image_url}/>
        <Button variant="contained" href={detailAnime?.url} target="_blank">Mais detalhes</Button>
        <Button variant="outlined" href={detailAnime?.trailer.url ? detailAnime?.trailer.url : "#"} disabled={detailAnime?.trailer.url ? false : true} target="_blank">Trailer</Button>
        <Button variant="outlined" href={"/"}>Voltar</Button>
      </aside>
      <main>
        <h1>
          {detailAnime?.title}
        </h1>
        <p>
          <strong>Período de exibição:</strong><br/>
          De {moment(detailAnime?.aired.from).format("DD/MM/YYYY")} até {detailAnime?.aired.to ? moment(detailAnime?.aired.to).format("DD/MM/YYYY") : "Atualmente"}
        </p>
        <p>
        <strong>Avaliação:</strong> {detailAnime?.score}
        </p>
        <p>
        <strong>Quantidade de episódios:</strong> {detailAnime?.episodes}
        </p>
        <p>
        <strong>Gêneros:</strong>
          <ul>

          {detailAnime?.genres.map(genero => (
            <li key={genero.mal_id}>{genero.name}</li>
          ))}
          </ul>
        </p>
        <p>
        <strong>Sinopse completa:</strong><br/>
          {detailAnime?.synopsis}
        </p>
      </main>
    </Card>
  )
}

export default DetailsAnime