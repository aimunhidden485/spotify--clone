import React from "react";
import { genres } from "../assets/constants";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetTopChartsQuery } from "../redux/services/shazamcore";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
        const { data, isFetching, isError } = useGetTopChartsQuery();

        const {isPlaying, activeSong}=useSelector(state=>state.player)
        if (isFetching) {
                return <Loader />;
        }
        if (isError) {
                return <Error />;
        }
        return (
                <main className="flex flex-col">
                        <section className="flex flex-col md:flex-row w-full justify-between items-center gap-2">
                                <h1 className="text-white  text-3xl font-bold">Discover</h1>
                                <select onClick={() => {}} className="outline-none px-2 py-1 bg-black text-gray-300 cursor-pointer">
                                        {genres.map((genre, i) => (
                                                <option key={i} value={genre.value}>
                                                        {genre.title}
                                                </option>
                                        ))}
                                </select>
                        </section>
                        <section className="flex flex-wrap gap-8 mt-8 md:mt-14 justify-center items-center">
                                {data.tracks.map((song, i) => (
                                        <SongCard key={i} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data.tracks}/>
                                ))}
                        </section>
                </main>
        );
};

export default Discover;
