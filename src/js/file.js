document.getElementById('inputfile')
    .addEventListener('change', function () {

        var fr = new FileReader();
        fr.onload = function () {
            document.querySelector('#input-data').value = fr.result;
        }

        fr.readAsText(this.files[0]);
    })

const script = 'src/js/script.js';
var xhr = new XMLHttpRequest();
xhr.open("GET", script, false);
xhr.send();

// if (xhr.status === 200) {
//   console.log(xhr.responseText); // do something with the file contents
// }