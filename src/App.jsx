import EditerUi from "./components/editerui";
import Musicplayer from "./components/musicplayer";

function App() {
  return (
    <>
      <div className="bg-black flex justify-center items-center h-screen w-screen">
        <div className=" bg-[url(bgimg.png)] relative aspect-video w-full max-w-screen-xl bg-cover bg-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-[5%]"></div>
            <div className="h-[80%] w-[40%] bg-blue-100">
              <EditerUi />
            </div>
            <div className="h-[100%] w-[30%]  ml-4 flex items-end justify-center">
              <img
                src="named.png"
                alt="キャラ"
                className="h-[85%] object-cover bottom-0"
              />
            </div>
            <div className="h-[38%] w-[20%] ml-6">
              <Musicplayer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
