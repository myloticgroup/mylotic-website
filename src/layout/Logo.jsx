import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink
      to="/"
      className="flex items-center gap-3 shrink-0"
    >
      <img
        src="/logo.png"
        alt="Mylotic Group"
        className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
      />

      <div className="leading-none">
        <h1 className="text-lg lg:text-xl font-bold text-slate-800">
          Mylotic
        </h1>

        <p className="text-sm lg:text-base text-slate-700 mt-1">
          Group
        </p>
      </div>
    </NavLink>
  );
}
