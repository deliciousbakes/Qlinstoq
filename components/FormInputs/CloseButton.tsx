 import Link from "next/link";
import { Button } from "../ui/button";
 
export default function CloseButton({
href,
parent = "products",
}: {
href: string,
parent?: string,
}) {
return (
  <Button type="button" variant="outline" asChild>
    <Link href={parent === "" ? `/dashboard${href}` : `/dashboard/${parent}`}>
      Close
    </Link>
  </Button>
);
}
 