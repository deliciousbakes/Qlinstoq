/** @format */

import HeadingPage from "./Heading";

const FormPageHeader = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <div>
      <div className="flex justify-between  items-center  mr-5">
        <HeadingPage title={title} className={""} />
      </div>
    </div>
  );
};

export default FormPageHeader;
{
  /*   */
}
