/*
Description:

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
    a little
    a lot
    passionately
    madly
    not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

*/

//My solution (i did it as beginner, its really bad-looking XD

function howMuchILoveYou(nbPetals) {
  let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  if(nbPetals%6 == 1){
    return arr[0]
  }else if(nbPetals%6 == 2){
    return arr[1]
  }else if(nbPetals%6 ==3){
    return arr[2]
  }else if(nbPetals%6 ==4){
    return arr[3]
  }else if(nbPetals%6 == 5){
    return arr[4]
  }else{
    return arr[5]
  }
}

//i like it 

const howMuchILoveYou = nbPetals =>
  [`not at all`, `I love you`, `a little`, `a lot`, `passionately`, `madly`][nbPetals % 6];

//funny xDDD

class Flower {
  constructor(numPetals) {
    this._numPetals = numPetals;
  }
  
  hasPetals() {
    return this._numPetals > 0;
  }
  
  takePetal() {
    this._numPetals--;
  }
}

class Girl {
  constructor(flower) {
    this._flower = flower;
    this._lastFlowerGamePhrase = '';
  }
  
  playFlowerGame() {
    const flowerGame = new FlowerGame();
    
    while(this._flower.hasPetals()) {
      this._flower.takePetal();
      const phrase = flowerGame.whatIsNextPhrase();
      this.say(phrase);
      this._lastFlowerGamePhrase = phrase;
    }
  }
  
  say(phrase) {
    console.log(phrase);
  }
  
  whatWasLastFlowerGamePhrase() {
    return this._lastFlowerGamePhrase;
  }
}

const flowerGamePhraseEnum = Object.freeze({
  I_LOVE_YOU: 'I love you',
  A_LITTLE: 'a little',
  A_LOT: 'a lot',
  PASSIONATELY: 'passionately',
  MADLY: 'madly',
  NOT_AT_ALL: 'not at all',
});
  
class FlowerGame {
  constructor() {
    this._nextPhrase = flowerGamePhraseEnum.I_LOVE_YOU
  }
  
  whatIsNextPhrase() {
    const phrase = this._nextPhrase;
    
    let newNextPhrase;
    switch(phrase) {
        case flowerGamePhraseEnum.I_LOVE_YOU:
          newNextPhrase = flowerGamePhraseEnum.A_LITTLE
          break;
        case flowerGamePhraseEnum.A_LITTLE:
          newNextPhrase = flowerGamePhraseEnum.A_LOT
          break;
        case flowerGamePhraseEnum.A_LOT:
          newNextPhrase = flowerGamePhraseEnum.PASSIONATELY
          break;
        case flowerGamePhraseEnum.PASSIONATELY:
          newNextPhrase = flowerGamePhraseEnum.MADLY
          break;
        case flowerGamePhraseEnum.MADLY:
          newNextPhrase = flowerGamePhraseEnum.NOT_AT_ALL
          break;
        case flowerGamePhraseEnum.NOT_AT_ALL:
          newNextPhrase = flowerGamePhraseEnum.I_LOVE_YOU
          break;
    }
    this._nextPhrase = newNextPhrase;
    
    return phrase;
  }
}

const howMuchILoveYou = (numberOfPetals) => {
  const flower = new Flower(numberOfPetals);
  const girl = new Girl(flower);
  
  girl.playFlowerGame();
  
  return girl.whatWasLastFlowerGamePhrase();
};
