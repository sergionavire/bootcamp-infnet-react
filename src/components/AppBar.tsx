import { Link } from "react-router-dom";
import { Button } from "./Button";
import { LinkButton } from "./LinkButton";
import logo from "../image/logo-icon.svg";
import toast from "react-simple-toasts";
import { Mesage } from "./Mesage";

export function AppBar() {
  return (
    <div className="flex flex-row align-middle h-30 shadow-lg mb-4 px-5">
      <Link to={"/"}>
        <img src={logo} />
      </Link>
      <h1 className="h-full align-middle m-auto p-7 text-2xl font-bold">
        Note Pad
      </h1>
      <LinkButton to={"/notepad-new/"}>Adicionar novo</LinkButton>
    </div>
  );
}
