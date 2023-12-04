import Link from "next/link";
import Date from "./Date";

const ResultCard = ({ result }) => {
  return (
    <Link
      href=""
      // target="_blank"
      // download="01-09-2023.pdf"
      className="flex justify-around  hover:bg-orange-400 md:text-2xl"
      onClick={() => {
        console.log(result.description);
      }}
    >
      <p>
        {" "}
        <Date dateString={result.init} />
      </p>
      <p>Download</p>
    </Link>
    // </div>
  );
};

export default ResultCard;
