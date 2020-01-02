import { Component } from '@angular/core';

@Component({
  selector: "life-page",
  templateUrl: "./life.component.html",
  styleUrls:["./life.css"],
})

export class LifePage{
  title = 'This is section';
  detail = `They got there early, and they got really good seats.
  She works two jobs to make ends meet; at least, that was her reason for not having time to join us.
I am happy to take your donation; any amount will be greatly appreciated.
She advised him to come back at once.
We need to rent a room for our party.`;

  sectionDetail = `The work described in the present paper represents a
  combination of two widely different approaches to the
study of language.The first of these, the automatic generation
of sentences by computer, is recent and highly
specialized: Yngve(1962), Sakai and Nagao(1965),
  Arsent'eva (1965), Lomkovskaja (1965), Friedman (1967),
and Harper(1967) have applied a sentence generator to the
study of syntactic and semantic problems of the level of
the(isolated) sentence.The second, the study of units
of discourse larger than the sentence, is as old as rhetoric,
  and extremely broad in scope; it includes, in one way
or another, such diverse fields as beyond--the sentence
analysis(cf.Hendricks, 1967) and the linguistic study of
literary texts(Bailey, 1968, 53--76).The present study
is an application of the technique of sentence generation
to an analysis of the paragraph; the latter is seen as a
unit of discourse composed of lower - level units(sentences),
  and characterized by some kind of structure.To repeat:
the object of our investigation is the paragraph; the
technique is analysis by synthesis, i.e.via the automatic
generation of strings of sentences that possess the
properties of paragraphs.';`;
  constructor() {
    
  }
}
