import Ui_header from "./ui_header";
import Ui_sideber from "./ui_sideber";
import Ui_editer from "./ui_editer";
import Ui_terminal from "./ui_terminal";
import { useState } from "react";

function EditerUi() {
  const [selectedBox, setSelectedBox] = useState("box1");
  return (
    <>
      <div className="h-full w-full grid grid-rows-[6%_1fr_30%] grid-cols-[24%_1fr] bg-white">
        <div className="col-span-2">
          <Ui_header />
        </div>
        <div className="row-span-1">
          <Ui_sideber selectedBox={selectedBox} onSelect={setSelectedBox} />
        </div>
        <div>
          <Ui_editer selectedBox={selectedBox} />
        </div>
        <div className="bg-ui-sidebar-bk-main"></div>
        <div>
          <Ui_terminal />
        </div>
      </div>
    </>
  );
}

export default EditerUi;
