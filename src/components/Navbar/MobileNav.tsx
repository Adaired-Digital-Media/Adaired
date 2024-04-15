"use client";
import { NAV_ITEMS } from "@/config";
import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig, stagger } from "framer-motion";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Icons } from "../Icons/Icons";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

// Define the type for a single menu item
type MenuItem = {
  value: string;
  label: string;
  href: string;
  subItems?: { name: string; href: string }[];
  childrens?: { name: string; href: string }[];
};

const MobileNav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<MenuItem | null>(null);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
    setActiveMenuItem(null);
    setActiveSubMenu(null);

    const body = document.querySelector("#root");
    if (body !== null) {
      body.classList.toggle("overflow-hidden");
    }

    document.documentElement.classList.toggle("overflow-hidden");
  };

  const handleMenuItemClick = (item: MenuItem) => {
    if (activeMenuItem === item) {
      setActiveMenuItem(null);
      setActiveSubMenu(null);
    } else {
      setActiveMenuItem(item);
      setActiveSubMenu(item);
    }
  };

  return (
    <>
      <div className="lg:hidden">
        {" "}
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className={cn(
            "flex flex-col space-y-1.5 relative z-10 p-2 border rounded-lg mr-3 sm:mr-5",
            {
              "bg-white": !mobileNav,
              "bg-[#1B5A96]": mobileNav,
            }
          )}
          aria-label="Toggle Mobile Nav"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 8,
              },
            }}
            className={cn("w-6 bg-[#1B5A96] h-0.5 block rounded-full", {
              "bg-white": mobileNav,
            })}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className={cn("w-6 bg-[#1B5A96] h-0.5 block rounded-full", {
              "bg-white": mobileNav,
            })}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -8,
              },
            }}
            className={cn("w-6 bg-[#1B5A96] h-0.5 block rounded-full", {
              "bg-white": mobileNav,
            })}
          ></motion.span>
        </motion.button>
      </div>
      <AnimatePresence>
        {mobileNav && (
          // <MotionConfig
          //   transition={{
          //     type: "spring",
          //     bounce: 0.1,
          //   }}
          // >
          //   <motion.div
          //     key="mobile-nav"
          //     variants={{
          //       hide: {
          //         y: "-100%",
          //         transition: {
          //           type: "spring",
          //           bounce: 0.1,
          //           when: "afterChildren",
          //           staggerChildren: 0.25,
          //         },
          //       },
          //       show: {
          //         y: "0%",
          //         transition: {
          //           type: "spring",
          //           bounce: 0.1,
          //           when: "beforeChildren",
          //           staggerChildren: 0.25,
          //         },
          //       },
          //     }}
          //     initial="hide"
          //     animate="show"
          //     exit="hide"
          //     className="fixed inset-0 bg-white text-black p-6 flex flex-col  space-y-10 lg:hidden"
          //   >
          //     <motion.ul
          //       variants={{
          //         hide: {
          //           y: "25%",
          //           opacity: 0,
          //         },
          //         show: {
          //           y: "0%",
          //           opacity: 1,
          //         },
          //       }}
          //       className="mt-32 list-none space-y-2"
          //     >
          //       {NAV_ITEMS.map((item, index) => {
          //         return (
          //           <>
          //             <motion.li
          //               variants={{
          //                 hide: {
          //                   y: "25%",
          //                   opacity: 0,
          //                 },
          //                 show: {
          //                   y: "0%",
          //                   opacity: 1,
          //                 },
          //               }}
          //               key={item.value}
          //               className="flex items-center justify-between"
          //             >
          //               <Link
          //                 href={item.href}
          //                 className="text-xl font-semibold"
          //               >
          //                 {item.label}
          //               </Link>
          //               {(item.subItems || item.childrens) && (
          //                 <Icons.IcBaselineArrowDropDown
          //                   className={cn(
          //                     "h-4 w-4 transition-all text-muted-foreground group-hover:rotate-180"
          //                   )}
          //                 />
          //               )}
          //             </motion.li>
          //             <Separator />
          //           </>
          //         );
          //       })}
          //     </motion.ul>
          //     <motion.div
          //       variants={{
          //         hide: {
          //           y: "25%",
          //           opacity: 0,
          //         },
          //         show: {
          //           y: "0%",
          //           opacity: 1,
          //         },
          //       }}
          //       className="w-full h-px bg-white/30"
          //     ></motion.div>
          //     <motion.ul
          //       variants={{
          //         hide: {
          //           y: "25%",
          //           opacity: 0,
          //         },
          //         show: {
          //           y: "0%",
          //           opacity: 1,
          //         },
          //       }}
          //       className="list-none flex justify-center gap-x-4"
          //     >
          //       <li>
          //         <div className="bg-black rounded-lg w-8 h-8"></div>
          //       </li>
          //       <li>
          //         <div className="bg-black rounded-lg w-8 h-8"></div>
          //       </li>
          //       <li>
          //         <div className="bg-black rounded-lg w-8 h-8"></div>
          //       </li>
          //     </motion.ul>
          //   </motion.div>
          // </MotionConfig>

          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: "100%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "afterChildren",
                    duration: 0.3,
                    // staggerChildren: 0.10,
                  },
                },
                show: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    when: "beforeChildren",
                    duration: 0.3,
                    // staggerChildren: 0.10,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="absolute top-full bg-white w-full lg:hidden"
            >
              <motion.ul
                variants={{
                  hide: {
                    x: "-100%",
                    opacity: 0,
                  },
                  show: {
                    x: "0%",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="list-none space-y-2"
              >
                <Separator className="h-0.5" />
                {NAV_ITEMS.map((item) => {
                  return (
                    <>
                      <MaxWidthWrapper>
                        <motion.li
                          variants={{
                            hide: {
                              y: "-25%",
                              opacity: 0,
                            },
                            show: {
                              y: "0%",
                              opacity: 1,
                            },
                          }}
                          key={item.value}
                          className="flex items-center justify-between"
                          onClick={() => {
                            handleMenuItemClick(item);
                            !item.subItems &&
                              !item.childrens &&
                              toggleMobileNav();
                          }}
                        >
                          <Link
                            href={item.href}
                            className="text-xl font-semibold"
                          >
                            {item.label}
                          </Link>
                          {(item.subItems || item.childrens) && (
                            <Icons.IcBaselineArrowDropDown
                              className={cn(
                                "h-4 w-4 transition-all text-muted-foreground group-hover:rotate-180",
                                {
                                  "rotate-180": activeSubMenu === item,
                                }
                              )}
                            />
                          )}
                        </motion.li>
                      </MaxWidthWrapper>
                      {activeSubMenu === item && (
                        <ul>
                          {item.subItems &&
                            item.subItems.map((subItem) => (
                              <Link
                                href={subItem.href}
                                onClick={() => toggleMobileNav()}
                                key={subItem.name}
                              >
                                <li>
                                  <MaxWidthWrapper className="flex items-center gap-2 py-1">
                                    <div className="w-3 h-3 rounded-full bg-[#ddd]"></div>
                                    <span className="text-base">
                                      {subItem.name}
                                    </span>
                                  </MaxWidthWrapper>
                                </li>
                              </Link>
                            ))}
                          {item.childrens &&
                            item.childrens.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => toggleMobileNav()}
                              >
                                <MaxWidthWrapper>
                                  <li className="flex items-center gap-2 py-1">
                                    <div className="w-3 h-3 rounded-full bg-[#ddd]"></div>
                                    <span className="text-base">
                                      {subItem.name}
                                    </span>
                                  </li>
                                </MaxWidthWrapper>
                              </Link>
                            ))}
                        </ul>
                      )}

                      <Separator className="h-0.5" />
                    </>
                  );
                })}
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
