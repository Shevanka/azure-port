const FloatingElements = () => {
  const elements = [
    { size: "w-16 h-16", delay: "0s", duration: "20s", left: "10%", blur: "blur-sm" },
    { size: "w-20 h-20", delay: "2s", duration: "25s", left: "80%", blur: "blur-md" },
    { size: "w-12 h-12", delay: "4s", duration: "18s", left: "60%", blur: "blur-sm" },
    { size: "w-24 h-24", delay: "1s", duration: "22s", left: "30%", blur: "blur-lg" },
    { size: "w-14 h-14", delay: "3s", duration: "24s", left: "70%", blur: "blur-md" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} ${element.blur} rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-float`}
          style={{
            left: element.left,
            bottom: "-10%",
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
