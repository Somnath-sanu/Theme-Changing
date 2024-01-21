import { useEffect } from "react";

import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";
import { useSelector } from "react-redux";

function App() {
  const themeMode = useSelector((state) => state.theme.themeMode);
  // console.log(themeMode)

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
