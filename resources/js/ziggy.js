const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"health.check":{"uri":"up","methods":["GET","HEAD"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"about":{"uri":"about","methods":["GET","HEAD"]},"projects":{"uri":"projects","methods":["GET","HEAD"]},"contact":{"uri":"contact","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
