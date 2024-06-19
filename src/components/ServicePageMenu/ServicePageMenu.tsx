import Link from "next/link";
import React from "react";

interface ServicePageMenuProps {
  data?: string[];
}

const ServicePageMenu: React.FC<ServicePageMenuProps> = ({
  data,
}) => {
  return (
    <div>
      <ul>
        {data &&
          data.map((item: string) => {
            const id = item.replace(/-/g, " ").toLowerCase();

            return (
              <Link href={`/services/${item}`} key={item}>
                <li className="flex items-center relative border p-3 hover:bg-[#bc1d8d] transition-all duration-500 group cursor-pointer">
                  <div className="absolute left-0 w-4 h-3 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-700 bg-white" />
                  <p className="pl-4 group-hover:text-white capitalize">{id}</p>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default ServicePageMenu;
