import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import NavItems from "./NavItems";
import Topbar from "./Topbar";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <Topbar />
      <div className="bg-white sticky z-50 top-0 inset-x-0 h-20 lg:h-24">
        <header className="relative bg-white flex items-center">
          <MaxWidthWrapper>
            <div className="relative">
              <div className="flex h-20 lg:h-24 items-center">
                <div className=" ">
                  <Link
                    href="/"
                    className="flex items-center w-36 sm:w-10/0 lg:w-10/12 xl:w-full"
                  >
                    <Image
                      src="/Logo.svg"
                      width={200}
                      height={50}
                      alt="Logo"
                      priority
                    />
                  </Link>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                    <NavItems />
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <MobileNav />
        </header>
      </div>
    </>
  );
};

export default Navbar;
