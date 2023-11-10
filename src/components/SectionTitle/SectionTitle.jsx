const SectionTitle = ({ heading, subHeading, heading_text }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center pt-8">
      <h3 className="text-[#D99904] text-xl pb-4">{subHeading}</h3>
      <h2 className={`text-4xl border-y-4 py-5 ${heading_text}`}>{heading}</h2>
    </div>
  );
};

export default SectionTitle;
