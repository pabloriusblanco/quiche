import { SimpleSearchResults } from "../../../../api/search";
import Skeleton from "../../../molecules/Skeleton/Skeleton";

interface ModalSearchResultsProps {
  showingResults: boolean;
  results: SimpleSearchResults | null;
  isLoading: boolean;
}

const ModalSearchResults = ({
  showingResults,
  results,
  isLoading,
}: ModalSearchResultsProps) => {
  return (
    <div
      className={`fade-in-bottom ${
        !showingResults ? "hidden" : ""
      } shadow-light absolute top-[95px] w-full rounded-2xl bg-white p-5`}
    >
      {isLoading && <Skeleton rows={6} />}
      {!isLoading &&
        results?.posts.length === 0 &&
        results?.categories.length === 0 &&
        results?.ingredients.length === 0 && <div>No hay resultados</div>}
    </div>
  );
};

export default ModalSearchResults;
