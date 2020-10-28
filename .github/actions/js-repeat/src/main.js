const core = require('@actions/core')

const inputText = core.getInput('input_text');
const numOfRepeats = parseInt(core.getInput('num_of_repeats'));

let outputText = ""
let i;
for (i = 0; i < numOfRepeats; i++) {
    outputText += inputText;
}

core.setOutput('output_text', outputText)