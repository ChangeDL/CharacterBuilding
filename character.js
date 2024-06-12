class Character {
    constructor(name, subClass, str = Math.floor(Math.random() * 99), magic = Math.floor(Math.random() * 99), def = Math.floor(Math.random() * 99)) {
        this.name = name
        this.str = str
        this.magic = magic
        this.def = def

        if (str > magic && str > def) this.subClass = "Fighter"
        else if (str < magic && magic > def) this.subClass = "Wizard"
        else if (def > magic && str < def) this.subClass = "Defnder"
    }

}

const p1 = new Character("Douglas")

const p2 = new Character("Nick")

const p3 = new Character("Eddy")

const combat = (f1, f2) => {
    var f1Count = 0
    var f2Count = 0
    if (f1.str > f2.def) f1Count++
    else f2Count++
    if (f1.mag > f2.def) f1Count++
    else f2Count++
    if (f2.str > f1.def) f2Count++
    else f1Count++
    if (f2.mag > f1.def) f2Count++
    else f1Count++

    if (f1Count > f2Count) return `Winner is ${f1.name} the ${f1.subClass} by a score of ${f1Count} to ${f2Count}`
    else if (f2Count > f1Count) return `Winner is ${f2.name} the ${f2.subClass} by a score of ${f2Count} to ${f1Count}`
    else return "This fight is draw"
}

console.log(combat(p1, p2))
