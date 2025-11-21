import GenreTab from "./genre-tab";
import Language from "./language";
import Search from "./search";

function Header() {
  return (
    <div className="w-full h-[248px] flex items-start justify-center bg-green py-2 rounded-b-[18px] drop-shadow">
      <div className="w-fit h-fit flex flex-col gap-2 items-end">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/break-spot-sagoya.png"
            alt="break-spot-nagoya"
            className="w-15 h-15"
          />
        </div>
        <Search />
        <GenreTab />
        <Language />
      </div>
    </div>
  );
}

export default Header;
