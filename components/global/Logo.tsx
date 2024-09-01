import Link from "next/link";



type  LogoProps= {
    title: string;
    href: string;
    labelShown: boolean;
}
const Logo = ({title,href,labelShown}:LogoProps) => {
  return (
      <div>
          <Link href={href} className="">
              {labelShown && <span className="sr-only">{title}</span>}
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-6 w-auto"
            />
          </Link>
      </div>
  )
}

export default Logo