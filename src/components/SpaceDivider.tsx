const SpaceDivider = ({ variant = 'orbit' }: { variant?: 'orbit' | 'constellation' | 'planet' }) => {
  return (
    <div className="relative py-16 md:py-20 flex items-center justify-center overflow-hidden section-padding">
      <div className="max-w-6xl mx-auto w-full">
        <div className="h-[3px] w-full bg-foreground" />
      </div>
    </div>
  );
};

export default SpaceDivider;
