import { ImLocation2 } from "react-icons/im";

const Destination = (props: {
  src: any;
  shortDisc: any;
  country: string;
  city: string;
  disc: any;
  price: any;
}) => {
  return (
    <div className="card w-[400px] mx-auto max-h-[650px] border shadow-lg shodow-black rounded-lg">
      <img
        className="h-[200px] w-full object-cover rounded-lg"
        src={props.src}
        alt="Islamabad"
      />
      {/* location */}
      <div className="m-2">
        <h1 className="font-bold text-xl text-blue">{props.city}</h1>
        <div className="flex items-center gap-x-1 text-grayishTxt">
          <ImLocation2 className="text-[15px]" />
          <h2>{props.country}</h2>
        </div>
      </div>
      {/* short description */}
      <div className="border-grayish py-3 m-2  px-2 border-y flex items-center justify-between">
        <h3 className="text-md text-grayHover">{props.shortDisc}</h3>
        <p className="font-bold text-2xl">{props.price}</p>
      </div>
      <p className="m-2 text-grayishTxt">{props.disc}</p>
      <button className="m-2 main-gradient py-2 px-5 rounded-lg text-white text-sm">
        Details
      </button>
    </div>
  );
};

export default Destination;
