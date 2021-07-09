import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  ChatIcon,
  BellIcon,
} from "@heroicons/react/solid";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <header className="sticky top-0 flex bg-white justify-evenly items-center border-b-[0.1px] border-gray-300 py-2.5 w-full z-50">
      <div className="flex items-center">
        <Image
          src="https://rb.gy/iepizs"
          width={40}
          height={40}
          objectFit="contain"
          alt=""
        />
        <div className="ml-2.5 p-2.5 flex items-center rounded text-gray-500 bg-[#eef3f8] space-x-1">
          <SearchIcon className="h-6" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={UsersIcon} />
        <HeaderOption title="Jobs" Icon={BriefcaseIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={BellIcon} />
        <HeaderOption avatar />
      </div>
    </header>
  );
}

export default Header;
