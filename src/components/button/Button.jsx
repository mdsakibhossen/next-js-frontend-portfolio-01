
const Button = ({isBgFill=false,children="Button"}) => {
  return isBgFill ? (
    <button className="px-10 py-2 bg-primary text-black border-2 border-primary rounded-3xl transition-all duration-300 hover:bg-transparent hover:text-white">
      {children}
    </button>
  ) : (
    <button className="px-10 py-2 bg-transparent text-white border-2 border-primary rounded-3xl transition-all duration-300 hover:bg-primary hover:text-black">
      {children}
    </button>
  );
}

export default Button