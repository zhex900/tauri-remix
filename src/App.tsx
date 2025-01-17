import { listen, TauriEvent } from "@tauri-apps/api/event";
import { Command } from "@tauri-apps/api/shell";

import "./App.css";
import { resourceDir } from "@tauri-apps/api/path";

/**
 * Running NodeJS process as a sidecar
 */
resourceDir().then((resourcePath) => {
  const cmd = Command.sidecar(`binaries/app`, [
    `${resourcePath}binaries/public`,
  ]);

  cmd.spawn().then((child) => {
    /**
     * Killing server process when window is closed. Probably won't
     * work for multi window application
     */
    listen(TauriEvent.WINDOW_DESTROYED, function () {
      child.kill();
    });
  });
});

function App() {
  return (
    <div id="content">
      <iframe
        src="http://localhost:3000"
        allowFullScreen
        style={{ border: "none" }}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default App;
