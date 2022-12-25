import { links } from "../assets/constants";
import spotify from "../assets/spotifyLogo.png";
import {Link} from "react-router-dom"

const Sidebar = () => (
        <nav className="bg-[#191624]  backdrop-blur-lg md:px-8 px-4 flex flex-col items-center gap-4 md:py-8 py-4 md:gap-8">
                <div className="flex text-gray-400 items-center gap-3 ">
                        <img className="w-8 " src={spotify} alt="" />
                        <span className="hidden md:block uppercase">Spotify</span>
                </div>
                <div className="text-gray-400  flex flex-col md:gap-4 gap-8 mt-4">
                 {
                  links.map((link, i)=><div key={i} className='flex items-center gap-2 hover:text-cyan-600 transition-all'>
                    <link.icon  className="text-2xl"/>
                    <Link to={link.to} className="hidden md:block">{link.name}</Link>
                  </div>)
                 }
                </div>
        </nav>
);

export default Sidebar;
