function SectionHeading({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-2">
        {title}
      </h2>
      <h3 className="text-[#A3A3A3] mb-2">
        {subtitle}
      </h3>
      <div className="w-[100px] border border-[2px] border-red-600 mb-2"></div>
    </div>
  );
}

export default SectionHeading;