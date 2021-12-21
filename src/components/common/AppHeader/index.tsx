import { AppLogo } from "../AppLogo";
import AppNavigation from "../AppNavigation";
import "./AppHeader.scss";

export default function AppHeader() {
  return (
    <header className="header">
      <AppLogo />
      <AppNavigation />
    </header>
  );
}
