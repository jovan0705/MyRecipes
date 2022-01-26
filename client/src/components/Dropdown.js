import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  IoPersonOutline,
  IoPerson,
  IoBookmark,
  IoBookmarkOutline,
  IoVideocamOutline,
  IoVideocam,
  IoHeart,
  IoHeartOutline,
  IoNewspaper,
  IoNewspaperOutline,
  IoWallet,
  IoWalletOutline,
} from "react-icons/io5";
import DropdownIcon from "./DropdownIcon";
import { Link } from "react-router-dom";

function Dropdown({ name }) {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left z-10 shadow">
        <div>
          <Menu.Button className="text-lg  inline-flex justify-center w-full px-4 py-4 font-medium bg-primary rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-base-content">
            Welcome, {name}
            <ChevronDownIcon
              className="w-7 h-7 ml-2 -mr-1 text-base-content "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95 duration-300"
          enterTo="transform opacity-100 scale-100 duration-300"
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 scale-100 duration-300"
          leaveTo="transform opacity-0 scale-95 duration-300"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-1 ">
              <Link to="/userProfile">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-primary text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DropdownIcon icon={<IoPerson size="26" />} />
                      ) : (
                        <DropdownIcon icon={<IoPersonOutline size="26" />} />
                      )}
                      <span className="text-lg"> My Profile</span>
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
            <div className="px-2 py-1">
              <Link to="/favourite">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-primary text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DropdownIcon icon={<IoHeart size="26" />} />
                      ) : (
                        <DropdownIcon icon={<IoHeartOutline size="26" />} />
                      )}
                      <span className="text-lg">Favourite</span>
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
            <div className="px-2 py-1">
              <Link to="/myclasses">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-primary text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DropdownIcon icon={<IoVideocam size="26" />} />
                      ) : (
                        <DropdownIcon icon={<IoVideocamOutline size="26" />} />
                      )}
                      <span className="text-lg">My Classes</span>
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
            <div className="px-2 py-1">
              <Link to="/myrecipes">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-primary text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DropdownIcon icon={<IoNewspaper size="26" />} />
                      ) : (
                        <DropdownIcon icon={<IoNewspaperOutline size="26" />} />
                      )}
                      <span className="text-lg">My Recipes</span>
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
            <div className="px-2 py-1">
              <Link to="/wallet">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-primary text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DropdownIcon icon={<IoWallet size="26" />} />
                      ) : (
                        <DropdownIcon icon={<IoWalletOutline size="26" />} />
                      )}
                      <span className="text-lg">Wallet</span>
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Dropdown;
