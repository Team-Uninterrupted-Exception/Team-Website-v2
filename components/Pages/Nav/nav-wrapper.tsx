"use client";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavItems = [
    {name: "About", link: "/#" },
    // {name: "resources", link: "/resources" },
    {name: "Docs", link: "https://docs.uninterruptedexception.team/"}
]

export default function NavMenu ()
{
    return (
        <div className="width-full bg-[#454ADE]">
            <NavigationMenu className="ml-2">
                <NavigationMenuList>
                    {NavItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink className="bg-white text-dark-blue my-4 mx-2 py-2 px-4 text-2xl font-inter font-semibold hover:bg-dark-blue hover:text-white" render={<Link href={item.link}/>}>
                                {item.name}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
