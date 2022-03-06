import { useState, useLayoutEffect } from "react";

const useTheme = () => {
  const [state, setState] = useState(() => {
    // if a user’s default color scheme on OS is set to dark, website will change its color scheme accordingly to it
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    const localTheme = window.localStorage.getItem("theme");
    // if no localTheme set and userPrefersDark return True-match
    if (userPrefersDark && !localTheme) {
      return "dark";
    }
    // otherwise get localTheme from localStorage
    return localTheme ? JSON.parse(localTheme || "{}") : "light";
  });

  useLayoutEffect(() => {
    // HTMLElement type is just a common interface for all the html elements
    const body = window.document.querySelector<HTMLElement>("body");
    // add state(light OR dark) to class of body-element
    body!.setAttribute("class", state);
    // save the theme value in localStorage
    window.localStorage.setItem("theme", JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default useTheme;
