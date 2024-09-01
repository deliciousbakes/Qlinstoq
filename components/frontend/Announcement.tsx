import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
type AnnouncementProps = {
  title: string;
  href: string;
};
export default function Announcement({ title, href }: AnnouncementProps) {
  return (
    <Link
      href={href}
      className="relative rounded-lg bg-emerald-500   dark:bg-indigo-950 dark:text-white px-6 py-1.5 text-lg leading-6 text-zinc-900 ring-1 ring-pink-900/10 hover:ring-pink-900/20 flex items-center font-semibold"
    >
      {title}
      <MoveRight className="w-4 h-4 ml-2" />
    </Link>
  );
}
 