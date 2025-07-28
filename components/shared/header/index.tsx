import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";
import Search from "./search";


const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wraper flex-between px-4 md:px-8 lg:px-16">
        <div className="flex-start">
          <CategoryDrawer/>
          <Link href="/" className="flex-start ml-4">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
              className="mt-1 mb-1"
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search/>
        </div>
        <Menu/>
      </div>
    </header>
  );
};

export default Header;
