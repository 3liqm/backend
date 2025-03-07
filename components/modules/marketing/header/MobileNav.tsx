import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function MobileNav({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={32} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-12">
            <ul className="flex flex-col gap-4 ">
              {/* <li>
                <Link
                  className="text-h6 text-heading hover:text-primary-500 dark:text-white dark:hover:text-primary-500"
                  href="/"
                >
                  Features
                </Link>
              </li>
              */}
              <li>
                <Link
                  className="text-h6 text-heading hover:text-primary-500 dark:text-white dark:hover:text-primary-500"
                  href="/"
                >
                  Docs
                </Link>
              </li> 
              <li>
                <Link
                  className="text-h6 text-heading hover:text-primary dark:text-white dark:hover:text-primary-500"
                  href="/"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            <div className="flex">
              <SocialMedia className="" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
