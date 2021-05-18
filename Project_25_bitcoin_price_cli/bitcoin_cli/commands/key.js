const KeyManager = import('../lib/KeyManager');
const inquirer = import('inquirer');
const color = import('color')

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name:'key',
                message: 'Enter API Key'.green
            }
        ]);
        const key = keyManager.setKey(input.key);
        if(key){
            console.log('Api key set'.blue);
        }
    },
    show(){
        console.log("Hello from show");
    },
    remove(){
        console.log("Hello from remove");
    }
};

module.exports = key;