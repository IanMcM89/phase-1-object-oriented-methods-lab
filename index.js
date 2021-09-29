function BoardMember(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}

BoardMember.prototype.veto = () => 'No, I must disagree';

BoardMember.prototype.approve = () => 'You can do that!';

BoardMember.prototype.doCharity = () => 'I like to help people.';

BoardMember.prototype.releasePressStatement = () => 'You will see great things from Scuber.';

BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}

let polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");

//Test cases:

console.log(polishedBoardMember.name); //=> Mr. Polished
console.log(polishedBoardMember.homeState); //=> New York
console.log(polishedBoardMember.training); //=> law
console.log('');

console.log(polishedBoardMember.veto()); //=> 'No, I must disagree'
console.log(polishedBoardMember.approve()); //=> 'You can do that!'
console.log(polishedBoardMember.doCharity()); //=> 'I like to help people.'
console.log(polishedBoardMember.releasePressStatement()); //=> 'You will see great things from Scuber.'
console.log(polishedBoardMember.sayHi()); //=> 'Hi, my name is Mr. Polished. I am from New York, and I was trained in law.'