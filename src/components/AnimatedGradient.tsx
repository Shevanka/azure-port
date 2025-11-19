const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl animate-gradient-move-1" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/25 via-primary/15 to-transparent rounded-full blur-3xl animate-gradient-move-2" />
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl animate-gradient-move-3" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
    </div>
  );
};

export default AnimatedGradient;
