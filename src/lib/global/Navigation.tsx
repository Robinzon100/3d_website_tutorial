import Logo from "@/lib/icons/Logo";
import c from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={c.navigation_main}>
            <div className={c.logo}>
                <Logo />                
            </div>
        </nav>
    );
};

export default Navigation;