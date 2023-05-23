import Destination from "./Destination";
import { touristDestinations } from "../constants/constants";

const Destinations = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="w-11/12 md:w-10/12 mx-auto my-20 mb-4">
        <h1 className="text-grayishTxt font-bold text-3xl text-center md:text-left mb-8">
          Most Visited{" "}
          <span className="md:border-b-[0.25rem] border-cyan-900">
            Destinations
          </span>
        </h1>
        <div className="grid md:grid-cols-3 gap-y-8 mb-10">
          {touristDestinations.map((value) => (
            <Destination
              key={value.id}
              src={value.src}
              city={value.placeName}
              shortDisc={value.shortDesc}
              country={value.country}
              disc={value.description}
              price={value.budget}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
