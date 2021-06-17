import React, { useState, useEffect } from "react";

function useToolsModule() {
  const [toolsModules, setToolsModules] = useState();
  useEffect(() => {
    System.import("@study/tools").then(setToolsModules);
  }, []);

  return toolsModules;
}

export default function Home() {
  let back;
  const toolsModule = useToolsModule();
  console.log(toolsModule);
  if (toolsModule) {
    back = toolsModule.RgetData("i am react");
  }

  return (
    <>
      <h2>Home header</h2>
      <span>{back}</span>
    </>
  );
}
