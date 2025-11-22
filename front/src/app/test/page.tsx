import Header from "../../../components/layout/header";


import Page from "../top-page/page";
import LoginModal from "../../../components/modal/loginModal";
import TabBar from "../../../components/layout/navbar";

export default function TestPage() {
  return (
    <div>
      <LoginModal></LoginModal>
      <TabBar></TabBar>
    </div>
  );
}
