/** @format */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";

type ImageInputProps = {
  title: string;
  imageUrl: string;
  setImageUrl: any;
  endpoint: any;
};

export default function ImageInput({
  title,
  imageUrl,
  setImageUrl,
  endpoint,
}: ImageInputProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt={title}
            className="h-40 w-50 rounded-md object-cover"
            src={imageUrl}
            height="300"
            width="300"
          />
          <UploadButton
            className="col-span-full"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);

              setImageUrl(res[0].url);
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
