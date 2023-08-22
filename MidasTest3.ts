function getQuestionPart(phrases: string[]): string[] {
  let answer: string[] = [];
  let text = '';

  for (let i = 0; i < phrases[0].length; i++) {
    for (let j = 0; j < phrases[1].length; j++) {
      for (let k = 0; k < phrases[2].length; k++) {
        if (
          phrases[0].charAt(i) == phrases[1].charAt(j) &&
          phrases[0].charAt(i) == phrases[2].charAt(k)
        ) {
          for (let q = 0; q + i < phrases[0].length; q++) {
            if (
              phrases[0].charAt(i + q) == phrases[1].charAt(j + q) &&
              phrases[0].charAt(i + q) == phrases[2].charAt(k + q)
            ) {
              text += phrases[0].charAt(i + q);
            }
          }
          if (text.length > 1) break;
          else text = '';
        }
      }
      if (text.length > 1) break;
      else text = '';
    }
    if (text.length > 1) break;
    else text = '';
  }
  for (let index in phrases) {
    if (phrases[index].startsWith(text)) {
      answer.push(phrases[index].split(text)[1].trim());
    } else {
      let word = '';
      for (let i = 0; i < phrases[index].search(text); i++) {
        word += phrases[index].charAt(i);
      }
      answer.push(word);
    }
  }
  return answer;
}

console.log(getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']));
console.log(getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']));
