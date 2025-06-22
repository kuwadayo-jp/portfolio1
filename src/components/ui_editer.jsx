import {
  Box1Content,
  Box2Content,
  Box3Content,
  Box4Content,
  Box5Content,
} from "./ui_editer_contents";

function Ui_editer({ selectedBox }) {
  return (
    <>
      <div className="w-full h-full pl-1 bg-ui-editer-bk-main">
        <div className="font-sans">
          {selectedBox === "box1" && <Box1Content />}
          {selectedBox === "box2" && <Box2Content />}
          {selectedBox === "box3" && <Box3Content />}
          {selectedBox === "box4" && <Box4Content />}
          {selectedBox === "box5" && <Box5Content />}
        </div>
      </div>
    </>
  );
}

export default Ui_editer;
