/** @format */

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function ImageContainer({
  mainImage,
  name,
}: {
  mainImage: string  | StaticImport;
  name: string;
}) {
  return (
    <div className="relative w-[70px] aspect-square">
      <Image src={mainImage} fill alt={name} className="object-contain" />
    </div>
  );
}
export default ImageContainer;
