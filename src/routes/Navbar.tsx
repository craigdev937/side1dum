import React from "react";
import classes from "./Navbar.module.css";
import { IoSearch, IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { UAS, UAD } from "../global/Hooks";
import { toggleTheme } from "../global/ThemeSlice";

export const Navbar = () => {
    const dispatch = UAD();
    const mode = UAS((state) => state.theme.mode);

    return (
        <React.Fragment>
            <header className={classes.nav__header}>
                <section className={classes.nav__search}>
                    <IoSearch 
                        className={classes.search__icon}
                        aria-hidden="true"
                        focusable="false"
                    />
                    <input 
                        className={classes.nav__input}
                        type="search" 
                        name="search"
                        id="navbar-search"
                        aria-label="Search"
                        placeholder="Search..."
                    />
                </section>
                {/* THEME TOGGLE */}
                <section>
                    <button
                        className={classes.nav__theme}
                        type="button"
                        aria-label={mode === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                        }
                        title={mode === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                        }
                        onClick={() => dispatch(toggleTheme())}
                    >
                        {mode === "dark" ? (
                            <IoSunnySharp className={classes.nav__icon} />
                        ) : (
                            <FaRegMoon className={classes.nav__icon} />
                        )}
                    </button>
                </section>
            </header>            
        </React.Fragment>
    );
};



