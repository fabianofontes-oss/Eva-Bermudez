interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  variant?: 1 | 2 | 3;
}

const paths = {
  1: 'M0,40 C180,100 360,0 540,60 C720,120 900,20 1080,60 C1200,80 1320,40 1440,50 L1440,120 L0,120 Z',
  2: 'M0,60 C120,10 300,100 480,50 C660,0 840,90 1020,40 C1200,0 1380,70 1440,40 L1440,120 L0,120 Z',
  3: 'M0,30 C200,90 400,10 600,70 C800,130 1000,0 1200,50 C1300,75 1380,30 1440,60 L1440,120 L0,120 Z',
};

const WaveDivider = ({
  topColor,
  bottomColor,
  variant = 1,
}: WaveDividerProps) => {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0] -mt-[2px]"
      style={{ backgroundColor: topColor }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] sm:h-[70px] lg:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} fill={bottomColor} />
      </svg>
    </div>
  );
};

export default WaveDivider;
