import Link from "next/link";
import Date from "./Date";


const ResultCard = ({ result }) => {
  
  
  return (
    <div
      
      className="flex justify-around  hover:bg-orange-400 md:text-2xl"
      onClick={() => {
        console.log(result.description);
      }}
    >
      <p>
        {" "}
        <Date dateString={result.init} />
      </p>
      
    </div>
    // </div>
  );
};

export default ResultCard;
