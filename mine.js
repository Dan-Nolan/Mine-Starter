const fs = require('fs-extra');
const DATA_FOLDER = "./data";

const state = {
  hello: 'world'
}

async function mine() {
    const data = await fs.readFile(`${DATA_FOLDER}/state.json`);

    console.log(data.toString());

    state.blocks = ['blah blah block']

    fs.writeFile(`${DATA_FOLDER}/state.json`, JSON.stringify(state));
}

mine();
