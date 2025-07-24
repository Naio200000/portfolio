import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import Links from "../Links/Links";
import P from "../../labels/P";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuRef = useRef(); // Reference to the menu

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeOpenMenus = useCallback((e) => {
        if (mobileMenuRef.current && // Check if ref exists
            isMenuOpen && // Check if the menu is open
            !mobileMenuRef.current.contains(e.target) ) { // Check if the click is outside the menu
            setIsMenuOpen(false);
        }
    },[isMenuOpen]);

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus); // Add event listener
        return () => {
            document.removeEventListener("mousedown", closeOpenMenus); // Cleanup listener
        };
    }, [closeOpenMenus]);

    return (
        <div className="h-full flex justify-between items-center relative">
            <div className="px-8">
                <Link to={"/"}>
                    <P className={"text-3xl font-MonomaniacOne uppercase"}>Naio</P>
                </Link>
            </div>
            <div ref={mobileMenuRef}>
                <Links className={`px-8 text-lg ${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:items-center absolute lg:static py-8 lg:py-0 right-0 top-16 z-10 bg-black rounded-bl-3xl shadow-shadowSkillCV lg:shadow-none`} onLinkClick={() => setIsMenuOpen(false)} />
            </div>
            <div className="px-8 lg:hidden">
                <span onClick={toggleMenu} className="text-5xl cursor-pointer">{isMenuOpen ? "" : "≡"}</span>
            </div>

        </div>
    );
};

export default Nav;