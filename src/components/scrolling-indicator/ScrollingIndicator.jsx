const ScrollingIndicator = () => {
  return (
    <div className="scrolling-indicator-wrapper flex flex-col gap-3 items-center justify-center min-h-[100px]">
      <div className="scrolling-indicator h-9 w-6 border-2 border-primary rounded-[2rem] flex justify-center">
        <span className="w-0.5 h-2 bg-primary inline-block rounded-full mt-2"></span>
      </div>
      <div className='w-0.5 h-16 border-r border-dashed border-white relative after:content-[""] after:w-2.5 after:h-2.5 after:bg-white after:rounded-full after:absolute after:bottom-0 after:translate-x-[-3px] after:translate-y-[50%]'></div>
    </div>
  );
};

export default ScrollingIndicator;
