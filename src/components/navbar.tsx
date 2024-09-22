import Image from "next/image";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { useTheme } from "next-themes";

import ThemeToggle from "~/components/theme-toggle";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <Disclosure as="nav" className="bg-gray-200 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {(theme === "light" && (
                <Image
                  src={"/logo.svg"}
                  width={100}
                  height={10}
                  className="h-8 w-auto"
                  alt="Application Logo"
                />
              )) || (
                <Image
                  src={"/logo-dark.svg"}
                  width={100}
                  height={10}
                  className="h-8 w-auto"
                  alt="Application Logo"
                />
              )}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden"></DisclosurePanel>
    </Disclosure>
  );
}
