const relations = {
  methionine: ["AUG"],
  phenylalanine: ["UUU", "UUC"],
  leucine: ["UUA", "UUG"],
  serine: ["UCU", "UCC", "UCA", "UCG"],
  tyrosine: ["UAU", "UAC"],
  cysteine: ["UGU", "UGC"],
  tryptophan: ["UGG"],
  stop: ["UAA", "UAG", "UGA"],
};

const trimTranslation = (translation) => {
  translation = translation.trim();
  return translation.substring(0, translation.length - 1);
};

const translate = (input) => {
  const codons = [];
  let translation = "";

  for (let i = 0; i < input.length; i += 3) {
    codons.push(input.substring(i, i + 3));
  }

  for (const codon of codons) {
    if (!Object.values(relations).flat().includes(codon))
      throw new Error(`Invalid codon ${codon}`);
    for (const prop in relations) {
      const relationIncludesCodon = relations[prop].includes(codon);
      if (prop === "stop" && relationIncludesCodon)
        return trimTranslation(translation);
      if (relationIncludesCodon)
        translation += prop[0].toUpperCase() + prop.substring(1) + ", ";
    }
  }

  return trimTranslation(translation);
};

console.log(translate("AUGUUUUCUUAAAUG"));
