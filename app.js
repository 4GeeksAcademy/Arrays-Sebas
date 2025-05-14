let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', 'net', '.us']

for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
        for (let z = 0; z < noun.length; z++) {
            for (let e = 0; e < extensions.length; e++) {
                let dominio = pronoun[i] + adj[x] + noun[z] + extensions[e];
                console.log(dominio);

            }
        }
    }
}
