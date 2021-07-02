class pet {
    constructor(species, name, trick, love) {
        this.introduce = `my ${species} name is ${name},
        ${name} doing ${trick} so well.
        and ${name} love ${love}`
    }
}

Archimedes = new pet('owl',  'Archimedes', 'send a message', 'rat');
console.log(Archimedes.introduce); 