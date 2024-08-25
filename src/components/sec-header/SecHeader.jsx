
const SecHeader = ({title,subTitle}) => {
  return (
    <div className="sec-header mb-8 flex flex-col items-center justify-center">
      <div className="title inline-block">
        <h2 className="text-3xl sm:text-4xl text-primary">{title}</h2>
        <div className="w-full h-0.5 mt-1 rounded relative bg-primary before:content-[''] before:w-2 before:h-2 before:bg-primary before:rounded-full before:absolute before:top-[50%] before:left-0 before:translate-x-[-50%] before:translate-y-[-50%] after:content-[''] after:w-2 after:h-2 after:bg-primary after:rounded-full after:absolute after:top-[50%] after:left-[100%] after:translate-x-[-50%] after:translate-y-[-50%]"></div>
      </div>

      <p className="sub-title font-light mt-3 text-center">{subTitle}</p>
    </div>
  );
}

export default SecHeader