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
          <div className="text-ui-editer-text">
            <span className="animate-blink">_</span>
          </div>
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
        <div className="text-ui-editer-import">@import "koharu";</div>
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
  return (
    <>
      <div className="text-xs font-mono">
        {/* "use strict"; */}
        <div className="flex">
          <div className="text-ui-editer-strict">"use strict"</div>
          <div className="text-ui-editer-inequality">;</div>
        </div>
        {/* 改行 */}
        <div className="whitespace-pre">{`\n`}</div>
        {/* const introductionData { */}
        <div className="flex">
          <div className="text-ui-editer-const">const</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-text">introductionData</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-inequality">{"{"}</div>
        </div>
        {/* NAME:"Koharu",*/}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-category">NAME</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-colon">:</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-elem">"Koharu"</div>
          <div className="text-ui-editer-inequality">,</div>
        </div>
        {/* AGE:21, */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-category">AGE</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-colon">:</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-elem">21</div>
          <div className="text-ui-editer-inequality">,</div>
        </div>
        {/* GENDER:"♀", */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-category">GENDER</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-colon">:</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-elem">"♀"</div>
          <div className="text-ui-editer-inequality">,</div>
        </div>
        {/* STATUS:"jub hunt", */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-category">STATUS</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-colon">:</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-elem">"jub hunt"</div>
          <div className="text-ui-editer-inequality">,</div>
        </div>
        {/* NICKNAME:"kuwadayo!", */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-category">NICK_NAME</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-colon">:</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-elem">"kuwadayo!"</div>
          <div className="text-ui-editer-inequality">,</div>
        </div>
        {/* HOBY:"chatting", */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-category">HOBY</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-colon">:</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-elem">"chatting"</div>
          <div className="text-ui-editer-inequality">,</div>
        </div>
        {/* LIKE:"new_technology", */}
        <div className="flex whitespace-pre">
          <div>{"\t"}</div>
          <div className="text-ui-editer-category">LIKE</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-colon">:</div>
          <div>&nbsp;</div>
          <div className="text-ui-editer-elem">"new_technology"</div>
          <div className="text-ui-editer-inequality">,</div>
        </div>
        {/* }; */}
        <div className="flex">
          <div className="text-ui-editer-inequality">{"}"}</div>
          <div className="text-ui-editer-inequality">;</div>
        </div>
        {/* 点滅アニメーション */}
        <div className="text-ui-editer-text">
          <span className="animate-blink">_</span>
        </div>
      </div>
    </>
  );
}

//json風の内容
export function Box4Content() {
  return (
    <>
      <div className="text-white">
        <div>ASCIIアート予定</div>
        <div>
          <span className="animate-blink">_</span>
        </div>
      </div>
    </>
  );
}

//md風の内容
export function Box5Content() {
  return (
    <>
      <div className="text-xs font-mono">
        {/* # 自己紹介ポートフォリオだよ */}
        <div className="text-ui-editer-mdaccent">
          # 自己紹介ポートフォリオだよ
        </div>
        {/* Hello... */}
        <div className="text-ui-editer-mdplane">Hello!I'm koharu!</div>
        <div className="text-ui-editer-mdplane">
          I'm currentry studyng web development.
        </div>
        {/* 改行 */}
        <div className="whitespace-pre">{`\n`}</div>
        {/* このサイトの技術仕様一覧だよ */}
        <div className="text-ui-editer-mdaccent">
          # このサイトの技術仕様一覧だよ
        </div>
        <div className="text-ui-editer-mdplane">- Node.js</div>
        <div className="text-ui-editer-mdplane">- React</div>
        <div className="text-ui-editer-mdplane">- Tailwindcss</div>
        <div className="text-ui-editer-mdplane">- HTML/CSS/JavaScript</div>
        <div className="text-ui-editer-mdplane">- vite</div>
        <div className="text-ui-editer-mdplane">- Git</div>
        <div className="text-ui-editer-mdplane">- vscode</div>
        {/* 改行 */}
        <div className="whitespace-pre">{`\n`}</div>
        {/* #コマンド一覧だよ */}
        <div className="text-ui-editer-mdaccent"># コマンド一覧だよ</div>
        <div className="text-ui-editer-mdplane">- date</div>
        <div className="text-ui-editer-mdplane">- message</div>
        <div className="text-ui-editer-mdplane">- seclet</div>
      </div>
    </>
  );
}
