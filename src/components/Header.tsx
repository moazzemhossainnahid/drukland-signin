import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaChevronDown, FaSearch, FaTruck, FaShoppingBasket} from "react-icons/fa";

const Header = () => {



    return (
        <header className="w-full">
            {/* Top Header */}
            <div className="bg-gray-100 py-2 text-sm">
                <div className="container mx-auto flex justify-end space-x-6 px-4">
                    <Link href="/faq" className="hover:underline flex gap-2 items-center">
                        FAQ
                        <Image
                            src="/question.svg"
                            alt="Logo"
                            width={16}
                            height={16}
                            priority
                        />
                    </Link>
                    <Link href="/send-inquiry" className="hover:underline flex gap-2 items-center">
                        Send Inquiry
                        <Image
                            src="/mail.svg"
                            alt="Logo"
                            width={16}
                            height={16}
                            priority
                        />
                    </Link>
                    <Link href="/live-support" className="hover:underline flex gap-2 items-center">
                        Live Support
                        <Image
                            src="/sms.svg"
                            alt="Logo"
                            width={16}
                            height={16}
                            priority
                        />
                    </Link>
                    <Link href="/contact" className="hover:underline flex gap-2 items-center">
                        Contact
                        <Image
                            src="/contact.svg"
                            alt="Logo"
                            width={16}
                            height={16}
                            priority
                        />
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white py-4 border-b shadow-sm">
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Logo */}
                    <div className="w-40">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={300}
                                height={16}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="/business" className="hover:underline flex items-center space-x-2">
                            <span>Business</span>
                            <FaChevronDown size={12} />
                        </Link>
                        <Link href="/products" className="hover:underline flex items-center space-x-2">
                            <span>Products</span>
                            <FaChevronDown size={12} />
                        </Link>
                        <Link href="/about-us" className="hover:underline">
                            About Us
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center border rounded-lg overflow-hidden w-1/3">
                        <div className="px-3 text-gray-500">
                            <FaSearch />
                        </div>
                        <input
                            type="text"
                            className="w-full py-2 outline-none"
                            placeholder="Search"
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex space-x-4 items-center">
                        <Link href="/cart" className="text-gray-600 hover:text-gray-900">
                            <FaTruck size={20} />
                        </Link>
                        <Link href="/account" className="text-gray-600 hover:text-gray-900">
                            <FaUserAlt size={20} />
                        </Link>
                        <Link href="/wishlist" className="text-gray-600 hover:text-gray-900">
                            <FaShoppingBasket size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
