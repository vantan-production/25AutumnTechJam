import GenreTab from "./genre-tab";
import Language from "./language";
import Search from "./search";
import BackButton from "../ui/backButton";
import { FilterConditions } from "./filter";

type HeaderProps = {
  getGenreTab?: boolean;
  getLanguage?: boolean;
  getSearch?: boolean;
  getBackButton?: boolean;
  onFilterOpen?: (isOpen: boolean) => void;
  className?: string;
};

function Header({
  getGenreTab,
  getLanguage,
  getSearch,
  getBackButton,
  onFilterOpen,
  className,
}: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`w-full h-fit max-h-[248px] items-start justify-center bg-green py-2 rounded-b-[18px] box-shadow z-10 ${className}`}
      >
        <div className="w-full h-fit flex flex-col gap-2 items-end">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/break-spot-nagoya.png"
              alt="break-spot-nagoya"
              className="w-15 h-15"
            />
          </div>
          {getSearch && (
            <Search
              onFilteredShopsChange={onFilteredShopsChange}
              filteredShops={filteredShops}
            />
          )}
          {getGenreTab && (
            <GenreTab
              onFilterOpen={onFilterOpen}
              onGenreChange={onGenreChange}
              onFilterApply={onFilterApply}
            />
          )}
          {getLanguage && <Language />}
        </div>
      </div>
      <div className="py-2">{getBackButton && <BackButton />}</div>
    </div>
  );
}

export default Header;
