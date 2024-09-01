import Image from 'next/image';

function ImageContainer({
  mainImage,
  name,
}: {
  mainImage: string | null | undefined;
  name: string | null | undefined;
}) {
  return (
    <div className="ml-20  relative  max-w-[300px] h-[300px] mb-2 overflow-hidden rounded-lg">
      <Image
        src={mainImage}
        fill
        alt={name}
        className="rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
        priority
      />
    </div>
  );
}
export default ImageContainer;
