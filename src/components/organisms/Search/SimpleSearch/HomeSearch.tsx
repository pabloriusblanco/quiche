import React, { useRef, useState } from "react";
import { simpleSearch } from "../../../../api/search";
import { SimpleSearchResponse } from "../../../../types/Api";
import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import Input from "../../../atoms/Inputs/Input";
import ModalSearchResults from "./ModalSearchResults";
import { useNavigate } from "react-router-dom";

interface HomeSearchProps {
  id?: string;
}

const HomeSearch = ({ id }: HomeSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showingResults, setShowingResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SimpleSearchResponse | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const searchRef = useRef<HTMLDivElement>(null);
  const navigator = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchQuery(value);
    clearTimeout(timeoutId);

    if (value.length > 3) {
      setIsLoading(true);
      showResults();
      const timeout = setTimeout(() => {
        simpleSearch(value)
          .then((res) => {
            setIsLoading(false);
            setResults(res);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      }, 750);
      setTimeoutId(timeout);
    } else {
      setIsLoading(false);
      hiddeResults();
    }
  };

  const showResults = () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);
    setShowingResults(true);
  };

  const hiddeResults = () => {
    document.removeEventListener("mousedown", handleClickOutside);
    setShowingResults(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      hiddeResults();
    }
  };

  return (
    <>
      <section
        ref={searchRef}
        className="shadow-light container relative z-[35] flex -translate-y-10 justify-center gap-5 rounded-2xl bg-white p-5"
      >
        <Input
          placeholder="Escribe el nombre de una receta, ingrediente o categoría"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => {
            !showingResults ? handleInputChange : "";
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigator("/search?name=" + searchQuery);
            }
          }}
        />
        <Button
          color="primary"
          extraClasses="rounded-lg py-0 px-0 flex items-center justify-center"
          onClick={() => {
            navigator("/search?name=" + searchQuery);
          }}
        >
          <Icon name="search" className="w-4 fill-white" />
        </Button>
        <ModalSearchResults
          results={results}
          showingResults={showingResults}
          isLoading={isLoading}
        />
      </section>
      {showingResults && (
        <div className="fade-in fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-[65%]"></div>
      )}
    </>
  );
};

export default HomeSearch;
