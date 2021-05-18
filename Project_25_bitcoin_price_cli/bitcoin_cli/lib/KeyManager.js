const Configstore = import('configstore');
const pkg = import('../package.json');

class KeyManager{
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key){
        this.conf.set('apiKey', key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error ("No API Key Found");
        }
        return key;
    }

    deleteKey(){
        const key = this.conf.get('apiKey');
        this.conf.delete('apiKey');

        if(!key){
            throw new Error ("No API Key Found");
        }
        return ;
    }
}

export default KeyManager;