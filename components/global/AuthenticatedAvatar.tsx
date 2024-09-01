/** @format */
"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { links } from "@/components/utils/links";
import getInitials from "@/lib/generateInitials";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LogoutBtn from "./LogoutBtn";
// import UserIcon from './UserIcon';
// import { links } from '@/utils/links';

export const AuthenticatedAvatar = ({session}:{session:Session |null }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className=" dark:bg-slate-500   bg-slate-950  cursor-pointer"
      >
        <Image
          src="/images/profile.JPG"
          alt="profile"
          className="w-8 h-8   rounded-full "
          width={200}
          height={200}
              />
              <Avatar>
                  <AvatarImage src={""} alt={""} />
                  <AvatarFallback>
                      {getInitials(session?.user?.name)}
                  </AvatarFallback>
                      
              </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-58" align="start" sideOffset={10}>
        <DropdownMenuLabel className="pl-4  font-semibold text-lg">
                  <p>{session?.user?.name }</p>
                  <p   className="text-xs text-muted-foreground">{session?.user?.email }</p>
        </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
              <Link   href="/dashboard">
              Dashboard</Link>
              </DropdownMenuItem>
       <DropdownMenuItem>Services</DropdownMenuItem>
       <DropdownMenuItem><LogoutBtn/></DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default AuthenticatedAvatar;
