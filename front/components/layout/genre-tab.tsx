function GenreTab() {
  const genre = [
    "sweets",
    "sweets",
    "sweets",
    "sweets",
    "sweets",
    "sweets",
  ].map((item) => (
    <div className="w-14 h-11 bg-white radius-1 box-shadow flex items-center justify-center flex-shrink-0">
      {item}
    </div>
  ));
  return (
    <div className="w-[382px] h-13 mx-auto bg-beige radius-2 box-shadow flex items-center gap-2 px-2.5 left-1">
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="w-[0.7px] h-8 bg-black flex-shrink-0"></div>
      <div className="flex gap-2 overflow-x-auto flex-1 min-w-0">{genre}</div>
    </div>
  );
}

export default GenreTab;
