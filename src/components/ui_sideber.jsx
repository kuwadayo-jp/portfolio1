function Ui_sideber() {
  return (
    <>
      <div className="text-ui-sideber-text w-full h-full bg-ui-sidebar-bk-main">
        <div className="w-full h-1/30"></div>
        <div className="flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="html5のアイコン"
            className="w-1/8 h-1/8"
          />
          <div className="text-sm">index.html</div>
        </div>
        <div className="w-full h-1/30"></div>
        <div className="flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="cssのアイコン"
            className="w-1/8 h-1/8"
          />
          <div className="text-sm">main.css</div>
        </div>
        <div className="w-full h-1/30"></div>
        <div className="flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="javascriptのアイコン"
            className="w-1/8 h-1/8"
          />
          <div className="text-sm">main.js</div>
        </div>
        <div className="w-full h-1/30"></div>
        <div className="flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg"
            alt="jsonのアイコン"
            className="w-1/8 h-1/8"
          />
          <div className="text-sm">package.json</div>
        </div>
        <div className="w-full h-1/30"></div>
        <div className="flex">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg"
            alt="markdownのアイコン"
            className="w-1/8 h-1/8"
          />
          <div className="text-sm">README.md</div>
        </div>
      </div>
    </>
  );
}

export default Ui_sideber;
