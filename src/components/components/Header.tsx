"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconDiscountFilled,
  IconMapPinFilled,
  IconTruckFilled,
  IconShoppingCart,
  IconUserCircle,
} from "@tabler/icons-react";

import logo from "../../assets/shopping-cart.png";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import { useCartStore } from "@/stores/useCartStore";
import SearchBar from "../../../ui/SearchBar";
import CTAButtonLight from "../../../ui/CTAButtonLight";

const Header = () => {
  const { openSignIn, openSignUp } = useClerk();

  const totalItems = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <div className="h-auto">
      <div className="bg-gray-200 text-gray-700 text-xs sm:text-sm py-2 px-4 sm:px-8 md:px-16 flex flex-wrap items-center justify-between">
        <p className="hidden lg:block">Welcome to worldwide PrimeBasket</p>
        <div className="flex flex-wrap justify-between gap-4 w-full sm:w-auto text-center lg:w-[30%]">
          <p className="flex items-center gap-x-0.5">
            <IconMapPinFilled size={14} className="text-primary" />
            Deliver to 403602
          </p>
          <p className="flex items-center gap-x-0.5">
            <IconTruckFilled size={14} className="text-primary" />
            Track your order
          </p>
          <p className="flex items-center gap-x-0.5">
            <IconDiscountFilled size={14} className="text-primary" />
            All offers
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 py-3 flex-wrap">
        <div className="flex items-center gap-x-3 w-full sm:w-auto mb-4 sm:mb-0 justify-center sm:justify-start">
          <Link href="/" className="flex items-center gap-x-3">
            <Image src={logo} alt="logo" height={40} width={40} />
            <p className="text-2xl sm:text-3xl font-bold">
              Prime<span className="text-primary">Basket</span>
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-x-4 sm:gap-x-5 w-full sm:w-auto justify-center sm:justify-end">
          <SearchBar />

          <SignedOut>
            <CTAButtonLight
              text="Sign In"
              icon={<IconUserCircle />}
              className="bg-primary text-white hover:bg-green-600 sm:hidden md:flex"
              onClick={() => openSignIn()}
            />
            <CTAButtonLight
              text="Sign Up"
              icon={<IconUserCircle />}
              className="bg-primary text-white hover:bg-green-600 sm:hidden md:flex"
              onClick={() => openSignUp()}
            />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <Link href="/cart">
            <CTAButtonLight
              text=""
              icon={<IconShoppingCart />}
              badgeCount={totalItems}
              badgeColor="bg-red-600"
              className="bg-primary text-white hover:bg-green-600 sm:hidden md:flex"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
