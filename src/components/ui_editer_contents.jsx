//html風の内容
export function Box1Content() {
  return (
    <>
      <div className="text-xs font-mono">
        {/* <!DOCTYPE html> */}
        <div className="flex">
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">!DOCTYPE</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-html">html</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        {/* <html lang ="ja"> */}
        <div className="flex">
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">html</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-html">lang</div>
          <div className="text-ui-editer-inequality">=</div>
          <div className="text-ui-editer-container">"</div>
          <div className="text-ui-editer-container">ja</div>
          <div className="text-ui-editer-container">"</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        {/* <head> */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">head</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        {/* <meta charset="utf-8"> */}
        <div className="flex whitespace-pre">
          <div>
            {"\t"}
            {"\t"}
          </div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">meta</div>
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
        {/* <title>自己紹介</title> */}
        <div className="flex whitespace-pre">
          <div>
            {"\t"}
            {"\t"}
          </div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">title</div>
          <div className="text-ui-editer-inequality">&gt;</div>
          <div className="text-ui-editer-text">自己紹介</div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-inequality">/</div>
          <div className="text-ui-editer-doctipe">title</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        {/* </head> */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-inequality">/</div>
          <div className="text-ui-editer-doctipe">head</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        {/* <body> */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">body</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        {/* <div id="root"></div> */}
        <div className="flex whitespace-pre">
          <div>
            {"\t"}
            {"\t"}
          </div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">div</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-html">id</div>
          <div className="text-ui-editer-inequality">=</div>
          <div className="text-ui-editer-container">"</div>
          <div className="text-ui-editer-container">root</div>
          <div className="text-ui-editer-container">"</div>
          <div className="text-ui-editer-inequality">&gt;</div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-inequality">/</div>
          <div className="text-ui-editer-doctipe">div</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        <div className="flex whitespace-pre">
          <div>
            {"\t"}
            {"\t"}
          </div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-doctipe">div</div>
          <div className="text-ui-editer-inequality">&gt;</div>
          <div className="text-ui-editer-text">■_点滅アニメーション</div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-inequality">/</div>
          <div className="text-ui-editer-doctipe">div</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        {/* </body> */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-inequality">/</div>
          <div className="text-ui-editer-doctipe">body</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
        {/* </html> */}
        <div className="flex">
          <div className="text-ui-editer-inequality">&lt;</div>
          <div className="text-ui-editer-inequality">/</div>
          <div className="text-ui-editer-doctipe">html</div>
          <div className="text-ui-editer-inequality">&gt;</div>
        </div>
      </div>
    </>
  );
}

//css風の内容
export function Box2Content() {
  return (
    <>
      <div className="text-xs font-mono">
        {/* @import "kuwa" */}
        <div className="text-ui-editer-import">@import "kuwa";</div>
        {/* 改行 */}
        <div className="whitespace-pre">{`\n`}</div>
        {/*@skills { */}
        <div className="flex">
          <div className="text-ui-editer-import">@skills</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-inequality">{"{"}</div>
        </div>
        {/* --skill-some-confidence */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-some-confidence</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">DTM</div>
        </div>
        {/* --skill-learning-old */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-learning-old</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">HTML/CSS</div>
        </div>
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-learning-old</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">JavaSciript</div>
        </div>
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-learning-old</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">C_Lang,Linux</div>
        </div>
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-learning-old</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">Powerpoint</div>
        </div>
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-learning-old</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">Word,Excel</div>
        </div>
        {/* --skill-learning-now */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-learning-now</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">React,Tailwindcss</div>
        </div>
        {/* --skill-interesting-now */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-interesting-now</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">Hono</div>
        </div>
        {/* --skill-interesting-now */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-interesting-now</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">Unity,UE5</div>
        </div>
        {/* --skill-wantstudy-someday */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-wontstudy-someday</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">TypeScript</div>
        </div>
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-skills">--skill-wontstudy-someday</div>
          <div className="text-ui-editer-text">:</div>
          <div className="text-ui-editer-text">EN,KR</div>
        </div>
        {/* } */}
        <div className="text-ui-editer-inequality">{"}"}</div>
      </div>
    </>
  );
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
