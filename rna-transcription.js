const sequenceDNA = ['A', 'C', 'G', 'T'];
const sequenceRNA = ['A', 'C', 'G', 'U'];

export const toRna = (nucleotide) => {
  if (sequenceDNA[nucleotide] === '') {
    return '';
  }

  return sequenceDNA[nucleotide] === sequenceRNA[]

};
