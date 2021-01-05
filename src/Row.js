import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
import YT from 'react-youtube'
import movieTrailer from 'movie-trailer'
import YTsearch from "youtube-api-search";

const base_url = "https://image.tmdb.org/t/p/original/"
let API_KEY = 'AIzaSyAiPvlncrjRK6Hs6EI1Gf9doqHIc6H_6aw'
function Row({title,fetchUrl,isLargeRow}) {
    const[movies,setMovies] = useState([])
    const[trailerUrl,setTrailerUrl] = useState('')    
    
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData();
    },[fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        }
        else
        {
            //const query = {`${ytsearch "the beatles" -p -l 5}`}
            //console.log(query);
            // console.log(movie)
            let videoSearch = (movie) => {
                YTsearch({key:API_KEY,term:movie},(videos) => {
                    //console.log(videos)
                    setTrailerUrl(videos[0].id.videoId)
                })
            }
            let movieName = (movie?.title || movie?.name || movie?.original_name)
            console.log(movie)
            videoSearch(movieName)
            // movieTrailer(movie?.name)
            // .then((url) => {
            //     // console.log(url)
            //    const urlParams = new URLSearchParams(new URL(url).search)
            //    //setTrailerUrl(urlParams.get('v'))
            // })
            // .catch((error) => console.log(error))
        }
    }
    return(
        <div className="row">
            {/* title */}
            <h2 className='row_title'>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img onClick={()=>handleClick(movie)}  key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                ))}
            </div>  

            {/* container ---> posters */}
           {trailerUrl && <YT videoId={trailerUrl} opts={opts}></YT>}
        </div>
    )
}

export default Row