import Header from "../../../components/layout/header";

export default function Test() {
  return (
    <div>
      <Header getGenreTab={true} getLanguage={true} getSearch={true} />
    </div>
  );
}
