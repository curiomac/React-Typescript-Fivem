import * as React from "react";
import "./styles.css";

const Home = () => {
  React.useEffect(() => {
    const handleMessage = (e: any) => {
      const { action, data } = e.data;

      if (action === "something") {
        console.log("UI has been called!");
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col cmac-inst">
        <span className="text-5xl">Curiomac Engine</span>
      </div>
    </div>
  );
};

export default Home;
