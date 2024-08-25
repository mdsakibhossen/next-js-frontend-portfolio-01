const MenuButton = () => {
  return (
    <button className="menu-btn relative w-[25px] h-[20px] sm:hidden z-50">
      <span className="w-full h-[15%] bg-white/90 inline-block absolute left-0 top-0 rounded"></span>
      <span className="w-full h-[15%] bg-white/90 inline-block absolute left-0 top-[50%] translate-y-[-50%] rounded"></span>
      <span className="w-full h-[15%] bg-white/90 inline-block absolute left-0 bottom-0 rounded"></span>
    </button>
  );
};

export default MenuButton;
