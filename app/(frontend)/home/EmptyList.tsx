import { Button } from "@/components/ui/button";
import Link from "next/link";

 const EmptyList = ({
    heading="No items in the list",
    message = "Keep exploring our Products",
    btnText="Back Home"
}: { heading?: string; message?: string;  btnText?:string}) => {
  return (
    <div  className="mt-4 ">
          <h2 className=" text-xl font-bold">{heading}</h2>
          <p className="text-lg" >{message}</p>
          <Button 
          variant="link" 
              asChild
              className="mt-4 capitalize"
              size="lg"
          >
              <Link href="/" >{btnText}
              </Link>   
              </Button>
    </div>
  )
}

export default EmptyList
