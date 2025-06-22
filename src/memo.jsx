import Contentsarea from "./components/contentsarea";
import Musicplayer from "./components/musicplayer";

function App() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <div className="h-full">
          <img
            src="bgimg.png"
            alt="背景"
            className="absolute top-0 left-0 object-contain w-full h-full"
          />
          <div className=" h-full w-full flex items-center justify-center bg-amber-100 z-10">
            <Contentsarea />
            <img
              src="charactor.png"
              alt="キャラ"
              className="absolute top-0 left-0 object-contain w-full h-full"
            />
            <Musicplayer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
