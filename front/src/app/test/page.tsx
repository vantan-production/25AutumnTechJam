import Header from "../../../components/layout/header";


import Page from "../top-page/page";
import LoginModal from "../modal/loginModal";
import TabBar from "../../../components/layout/navbar";
import LoginAttention from "../modal/loginattention-modal";

export default function TestPage() {
  return (
    <div>
      <LoginModal></LoginModal>
      <TabBar></TabBar>
      <LoginAttention />
    </div>
  );
}
