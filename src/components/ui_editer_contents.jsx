//html風の内容
export function Box1Content() {
  return (
    <>
      <div className="text-xs font-mono">
        <div className="flex">
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">!DOCTYPE</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-html">html</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        <div className="flex">
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">meta </div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-html">charset</div>
          <div className="text-ui-editer-inequality">=</div>
          <div className="text-ui-editer-container">"</div>
          <div className="text-ui-editer-container">utf-8</div>
          <div className="text-ui-editer-container">"</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-inequality">/</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
      </div>
    </>
  );
}

//css風の内容
export function Box2Content() {
  return <div>📦 Box 2 の詳細内容です</div>;
}

//js風の内容
export function Box3Content() {
  return <div>📦 Box 3 の詳細内容です</div>;
}

//json風の内容
export function Box4Content() {
  return <div>📦 Box 4 の詳細内容です</div>;
}

//md風の内容
export function Box5Content() {
  return <div>📦 Box 5 の詳細内容です</div>;
}
