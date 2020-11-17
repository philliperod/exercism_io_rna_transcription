const transcription = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = (nucleotide) => {
  const sequenceDNA = nucleotide.split('');

  let sequenceRNA =
    nucleotide === ''
      ? ''
      : sequenceDNA.map((strand) => transcription[strand]).join('');
  return sequenceRNA;
};

// first, we want to transcribe or match the corresponding DNA letter to the RNA letter and put it was an object
// want to create a parameter for the function to accept input(s)
// then that those input(s) and put it into an array and store it into a variable
// create a conditional using ternary operator
// if parameter is an empty string then return an empty string
// if received an array with value(s) then create a new array with map()
// iterate over each value in the array, look for the name/value pair in the transcription object, and join it into a string with no spaces
