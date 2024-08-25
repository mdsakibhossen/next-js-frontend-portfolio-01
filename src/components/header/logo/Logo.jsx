import Link from 'next/link';

const Logo = () => {
  return (
    <div className="logo">
      <Link href={"/"} className="sm:text-lg" data-abc={true}>
        <code className="text-primary sm:text-xl">{"<C/>"}</code> SinanTokmak
      </Link>
    </div>
  );
}

export default Logo