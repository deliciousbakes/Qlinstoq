/** @format */

import AddNewButton from "../FormInputs/AddNewButton";
import HeadingPage from "./Heading";

const PageHeader = ({
  title,
  href,
  toolTipText,
}: {
  toolTipText: string;
  title: string;
  href: string;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center  mr-20">
        <HeadingPage title={title} />
        <AddNewButton toolTipText={toolTipText} href={href} title={title} />
      </div>
    </div>
  );
};

export default PageHeader;
{
  /*   */
}
