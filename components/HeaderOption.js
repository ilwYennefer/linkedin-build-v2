import Image from "next/image";

function HeaderOption({ Icon, title, avatar, onClick }) {
  return (
    <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-black">
      {Icon && <Icon className="h-6" />}
      {/* {avatar && (
          <Image src=""/>
        )} */}
      <h3 className="text-xs">{title}</h3>
    </div>
  );
}

export default HeaderOption;
