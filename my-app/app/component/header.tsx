import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="flex items-center gap-4">
        <Link href="/homePage">
          <h1 className="text-3xl text-cyan-500">Shopping Site</h1>
        </Link>{" "}
      </div>
    </header>
  );
};

export default Header;
