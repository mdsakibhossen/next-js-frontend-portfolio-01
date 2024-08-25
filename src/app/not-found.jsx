import Link from "next/link";

const NotFound = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-black ">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl">
          Page Not Found!!
        </h1>
        <Link href={"/"} className="text-white hover:underline">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound