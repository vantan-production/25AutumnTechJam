import GenreTab from "./genre-tab";
import Language from "./language";
import Search from "./search";
import BackButton from "../ui/backButton";

type HeaderProps = {
  getGenreTab: boolean;
  getLanguage: boolean;
  getSearch: boolean;
  getBackButton: boolean;
};

function Header({
  getGenreTab,
  getLanguage,
  getSearch,
  getBackButton,
}: HeaderProps) {
  return (
    <>
      <div className="w-full h-fit max-h-[248px] flex items-start justify-center bg-green py-2 rounded-b-[18px] box-shadow z-10">
        <div className="w-full h-fit flex flex-col gap-2 items-end">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/break-spot-nagoya.png"
              alt="break-spot-nagoya"
              className="w-15 h-15"
            />
          </div>
          {getSearch && <Search />}
          {getGenreTab && <GenreTab />}
          {getLanguage && <Language />}
        </div>
      </div>
      <div className="py-2">{getBackButton && <BackButton />}</div>
    </>
  );
}

export default Header;
