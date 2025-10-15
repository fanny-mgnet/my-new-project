"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            Web Starter
          </span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button className="hidden md:flex" variant="outline">Sign In</Button>
          <Button className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">Sign Up</Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 flex flex-col">
              <Link href="/" className="mr-6 flex items-center space-x-2 px-6">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Web Starter</span>
              </Link>
              <div className="flex flex-col space-y-3 px-6 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 px-6 mt-auto pb-6">
                 <Button variant="outline">Sign In</Button>
                 <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
