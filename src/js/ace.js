let editor = document.querySelector('#editor');

ace.edit(editor, {
    theme: "ace/theme/twilight",
    mode: "ace/mode/javascript",
    selectionStyle: "text"
})

var codeEditor = ace.edit("editor");
codeEditor.setValue();