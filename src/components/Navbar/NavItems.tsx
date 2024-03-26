"use client";
import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/config";
import NavItem from "./NavItem";
import { PopupButton } from "react-calendly";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [rootElement, setRootElement] = useState<HTMLElement>();

  useEffect(() => {
    const rootEl = document.getElementById("root");
    if (rootEl) {
      setRootElement(rootEl);
    }
  }, []);

  return (
    <div className="flex gap-6 h-full">
    
          {NAV_ITEMS.map((item, index) => {
            const setActive = (index: number) => {
              if (activeIndex !== index) {
                setActiveIndex(index);
              }
            };
            return (
              <NavItem
                navitems={item}
                key={item.value}
                activeIndex={() => setActive(index)}
              />
            );
          })}
          
       
      <div className="flex items-center ">
        {/* <PopupButton
          url="https://calendly.com/bittu-ad"
          rootElement={rootElement!}
          text="Book Demo"
          className="font-semibold relative hover:after:w-[100%] after:absolute after:content-[''] after:h-[3px] after:w-[100%] after:bg-[#FB9100] after:bottom-[-5px] after:left-0 after:transition-all after:rounded-2xl"
        /> */}
        <Link
          href="/contact"
          className="font-semibold relative hover:after:w-[100%] after:absolute after:content-[''] after:h-[3px] after:w-[100%] after:bg-[#FB9100] after:bottom-[-5px] after:left-0 after:transition-all after:rounded-2xl"
        >
          Book demo
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
