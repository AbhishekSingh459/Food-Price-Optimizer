const PlatformBadge = ({ platform, size = "sm" }) => {
  const isSwiggy = platform === "Swiggy";
  return (
    <span
      className={`inline-flex items-center font-heading font-semibold rounded-lg ${
        size === "sm" ? "text-xs px-2.5 py-1" : "text-sm px-3 py-1.5"
      } ${
        isSwiggy
          ? "bg-swiggy/10 text-swiggy"
          : "bg-zomato/10 text-zomato"
      }`}
    >
      {platform}
    </span>
  );
};

export default PlatformBadge;
