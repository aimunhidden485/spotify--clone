import PlayPause from "./PlayPause";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
const SongCard = ({ song, i , isPlaying, activeSong, data}) => {
  const dispatch=useDispatch()
        const handlePauseClick = () => {
          dispatch(playPause(false))
        };
        const handlePlayClick = () => {
          dispatch(setActiveSong({song, i, data}))
          dispatch(playPause(true))
         
        };
        
       console.log(song.images);
        return (
                <>
                {
                        (song?.images) && <section className="flex flex-col w-[250px] animate-slideup bg-white/30 p-3 bg-opacity-80 backdrop-blur-sm">
                        <div className="w-full h-56 relative group">
                                <div
                                        className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
                                                activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"
                                        }`}
                                >
                                        <PlayPause activeSong={activeSong} isPlaying={isPlaying} song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick} />
                                </div>
                                <img src={song.images?.coverart} alt="song-cover" />
                        </div>
                        <div className="flex flex-col mt-4 ">
                                <p className="text-white font-semibold text-lg truncate cursor-pointer">
                                        <Link to={`/songs/${song?.key}`}>{song?.title}</Link>
                                </p>
                                <p className="text-gray-300 text-sm font-semibold  truncate cursor-pointer">
                                        <Link to={`/songs/${song?.key}`}>{song?.subtitle}</Link>
                                </p>
                        </div>
                </section>
                }
                </>
        );
};
export default SongCard;
