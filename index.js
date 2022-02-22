function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log(`My name is ${this.name}, i like ${this.tech}`);
    }
}

class Developer2 {
    constructor(name, tech) {
        this.name = name;
        this.tech = tech;
    }
    
    introduction() {
        console.log(`My name is ${this.name} and my favourite tech is ${this.tech}`)
    }
}

const akash = new Developer('akash', 'wordPress');
const simba = new Developer('simba', 'buffalo tech');

[akash, simba].forEach(it => it.introduction())
