
const HeadingPage = ({ title, className }: { title: string; className :string}) => {
  return (
    <h2
      className={`p-4 text-2xl text-black   dark:text-white font-semibold ml-4  ${className}`}
    >
      {title}
    </h2>
  );
};

export default HeadingPage
