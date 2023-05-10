let editor = document.querySelector('#editor');
const code = xhr.responseText;

ace.edit(editor, {
    theme: "ace/theme/twilight",
    mode: "ace/mode/javascript",
    selectionStyle: "line"
})

var codeEditor = ace.edit("editor");
codeEditor.setValue(code);
codeEditor.clearSelection();
codeEditor.goToLine(0);
// codeEditor.setOption("highlightActiveLine", true);

// codeEditor.on("click", () => {
//     console.log((codeEditor.getSelectionRange()));
// })

// script.onload = function () {
//     var currentLine = 1;
//     debugger;
// };

// window.addEventListener("debuggerStatement", function(event) {
//     var lineNumber = event.detail.sourceLineNumber;
//     editor.gotoLine(lineNumber);
// });