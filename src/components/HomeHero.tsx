import video from "../assets/videos/splash_-_23011 (1440p).mp4";
import { FaFilter } from "react-icons/fa";
import Destinations from "./Destinations";

const HomeHero = () => {
  return (
    <div className="relative h-[calc(100vh-60px)]">
      {/* Background Video */}
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source src={video} />
      </video>
      <div className="absolute w-full h-full top-0 bg-[rgba(7,144,241,0.4)]"></div>
      {/* CONTENT */}
      <div className="absolute flex items-center justify-center top-0 z-10 w-full h-full">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="flex flex-col gap-y-2 mb-4 text-white">
            <p className="text-xl">Packages</p>
            <p className="text-4xl font-bold">Search Your Holiday</p>
          </div>
          {/* selection card */}
          <div className="bg-white shadow-md shadow-black relative py-6 px-2 rounded-xl">
            <div className="grid md:grid-cols-3 gap-y-4 md:gap-y-0 gap-x-8 pb-4 px-2 ">
              {/* single selection */}
              <div className="flex flex-col md:gap-y-3">
                <label htmlFor="location" className="text-grayishTxt">
                  Search Your Desination
                </label>
                <input
                  className="bg-grayish rounded-2xl p-2 outline-none"
                  type="text"
                  id="location"
                  placeholder="Pakistan"
                />
              </div>
              <div className="flex flex-col md:gap-y-3">
                <label htmlFor="date">Select Your Date</label>
                <input
                  className="bg-grayish rounded-2xl p-2 outline-none"
                  type="date"
                  id="date"
                />
              </div>
              <div className="flex flex-col md:gap-y-3">
                <label
                  className="flex items-center justify-between"
                  htmlFor="range"
                >
                  <p>Max Price:</p>
                  <span>5000</span>
                </label>
                <div className="bg-grayish rounded-2xl p-2 outline-none">
                  <input
                    className="w-full px-2 my-range"
                    type="range"
                    id="range"
                  />
                </div>
              </div>
            </div>
            <button className="absolute flex items-center justify-center  gap-x-4 bottom-[-20px] px-3 py-2 left-0 right-0 main-gradient rounded-xl text-lg text-white mx-auto w-[200px] text-center">
              <FaFilter /> More Filters
            </button>
          </div>
        </div>
      </div>

      {/* DESTINATIONS */}
      <Destinations />
    </div>
  );
};

export default HomeHero;
