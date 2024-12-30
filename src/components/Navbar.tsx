import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Ana Sayfa", href: "/" },
    { title: "Hakkımızda", href: "/about" },
    {
      title: "Faaliyet Alanlarımız",
      href: "#",
      submenu: [
        { title: "Pamuk Çırçır", href: "/activities/cotton" },
        { title: "Akaryakıt İstasyonu", href: "/activities/fuel" },
        { title: "Mısır Ticareti", href: "/activities/corn" },
        { title: "Tohum ve Gübre", href: "/activities/seeds" },
        { title: "Büyükbaş Hayvancılık", href: "/activities/cattle" },
        { title: "Zeytinyağı Üretimi", href: "/activities/olive-oil" },
      ],
    },
    { title: "İletişim", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-playfair font-bold text-primary-DEFAULT">
                LOGO
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.submenu ? (
                    <button className="text-gray-700 hover:text-primary-DEFAULT px-3 py-2 rounded-md text-sm font-medium font-inter">
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-primary-DEFAULT px-3 py-2 rounded-md text-sm font-medium font-inter"
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.title}
                            to={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-bg hover:text-primary-DEFAULT font-inter"
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-DEFAULT"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <button className="text-gray-700 hover:text-primary-DEFAULT block px-3 py-2 rounded-md text-base font-medium font-inter w-full text-left">
                    {item.title}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-primary-DEFAULT block px-3 py-2 rounded-md text-base font-medium font-inter"
                  >
                    {item.title}
                  </Link>
                )}
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        to={subitem.href}
                        className="text-gray-600 hover:text-primary-DEFAULT block px-3 py-2 rounded-md text-sm font-inter"
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;