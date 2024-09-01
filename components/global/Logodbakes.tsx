import Link from "next/link"
import { GiMatchTip } from "react-icons/gi"

const DbakesLogo = () => {
  return (
    <div>
       <Link href="/" className="bg-inherit hidden lg:flex justify-center items-center p-2 text-white">
           <GiMatchTip  size={40} href="/" className="text-melon" />
          <p className="font-bold text-xl text-melon  flex">DELICIOUS BAKES</p>
   </Link>
    </div>
  )
}

export default DbakesLogo
