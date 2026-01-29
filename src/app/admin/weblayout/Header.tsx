"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../../../../public/Layer_1.svg";
import MaxWidthWrapper from "@/src/components/layout/MaxWidthWrapper";
import { routes } from "../../../@core/config/routes";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import img from "../.../../../../../public/assets/triexgagykxxpxhfvx8e.webp";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import SaveAndCancel from "@/src/components/common/SaveAndCancel";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const [hover, setHover] = useState<number | null>(null);
  const { websiteNav } = routes;
  const [level, setLevel] = useState<0 | 1 | 2>(0);
  const [activeMenu, setActiveMenu] = useState<any>(null);
  const [activeGroup, setActiveGroup] = useState<any>(null);

  return (
    <div className="">
      <MaxWidthWrapper>
        <div className="flex w-[100%] items-center rounded-full border-b-[1px] border-[#0000001A] bg-[#FFFFFF]">
          <div className="relative flex w-full justify-between p-[1rem] lg:p-[1%]">
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer pl-3"
            >
              <Image
                src={logo}
                width={132}
                height={50}
                alt="brand logo"
                className="h-[2.125rem] w-[6.25rem] lg:h-[3.125rem] lg:w-[8.25rem]"
              />
            </div>

            <div className="my-auto hidden gap-2 lg:flex">
              <SaveAndCancel
                isIcon={true}
                handleClick={() => router.push("/contact")}
                buttonWidth={"!w-[12rem]"}
                name={"Sign Up"}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
