import Ui_header from "./ui_header";
import Ui_sideber from "./ui_sideber";
import Ui_editer from "./ui_editer";
import Ui_terminal from "./ui_terminal";

function EditerUi() {
  return (
    <>
      <div className="h-full w-full grid grid-rows-[6%_1fr_30%] grid-cols-[24%_1fr] bg-white">
        <div className="col-span-2 bg-amber-200">
          <Ui_header />
        </div>
        <div className="row-span-1 bg-pink-300">
          <Ui_sideber />
        </div>
        <div className="bg-blue-300">
          <Ui_editer />
        </div>
        <div className="bg-pink-300"></div>
        <div className="bg-gray-900">
          <Ui_terminal />
        </div>
      </div>
    </>
  );
}

export default EditerUi;
