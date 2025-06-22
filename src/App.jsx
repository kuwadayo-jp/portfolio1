import Contentsarea from "./components/contentsarea";
import Musicplayer from "./components/musicplayer";

function App() {
  return (
    <>
      <div className="bg-black flex justify-center items-center h-screen w-screen">
        <div className=" bg-[url(../public/bgimg.png)] relative aspect-video w-full max-w-screen-xl bg-cover bg-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-[5%]"></div>
            <div className="h-[80%] w-[40%] bg-blue-500">要素1</div>
            <div className="h-[100%] w-[30%] bg-amber-200 ml-4">要素2</div>
            <div className="h-[38%] w-[20%] bg-pink-200 ml-6">要素3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
