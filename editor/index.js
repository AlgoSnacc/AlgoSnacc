const editor = ace.edit("editor");
var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
editor.session.setMode(new JavaScriptMode());
editor.setTheme("ace/theme/dracula");
editor.setOptions({
  highlightActiveLine: true,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
});
