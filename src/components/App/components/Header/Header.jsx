import Actions from "./components/Actions";
import Logo from "./components/Logo";

const Header = () => (
  <header className="border-b-[2px] border-solid border-black pr-[16px] pl-[16px]">
    <div className="flex items-center justify-between">
      <Logo />
      <Actions />
    </div>
  </header>
);

export default Header;
