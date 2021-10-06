Number.prototype.add = function(number){return this.valueOf() + number};
Number.prototype.subtract = function(number){return this.valueOf() - number};
Number.prototype.multiply = function(number){return this.valueOf() * number};
Number.prototype.divide = function(number){return this.valueOf() / number};
Number.prototype.modulo = function(number){return this.valueOf() % number};
Number.prototype.isEven = function(){ return this.valueOf().modulo(2) === 0 };

Object.prototype.IF = (condition, T=()=>{}, F=()=>{}) => {
    [F, T][+!condition^1]();
};

Object.prototype.FOR = (array, cb, i=0) => {
    this.IF(i < array.length, () =>{ cb(array[i], i); this.FOR(array, cb, ++i)});
};

String.prototype.border = (count) => {
    let res = "";
    for(let i = 0; i < count; i++)
        res += "-"
    return res;
}

String.prototype.getLength = (string) => string.length;

String.prototype.tableView = (a, b) => {
    console.log("".border("".getLength(`${a} ${":"} ${b}`)));
    console.log(`${a} ${":"} ${b}`);
    console.log("".border("".getLength(`${a} ${":"} ${b}`)));
}

