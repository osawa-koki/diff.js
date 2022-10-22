"use strict";

const DEBUG = true;

const A_htmlelement = document.getElementById("diff-compare-A");
const B_htmlelement = document.getElementById("diff-compare-B");

if (DEBUG) {
  A_htmlelement.value = "Hello world!";
  B_htmlelement.value = "Goodbye world!";
}

const button = document.getElementById("diff-button");

const result = document.getElementById("resultContainer");

button?.addEventListener("click", () => {
  const A_value = A_htmlelement.value;
  const B_value = B_htmlelement.value;

  var dmp = new diff_match_patch();
  var diff = dmp.diff_main(A_value, B_value);

  dmp.diff_cleanupSemantic(diff);

  diff.forEach(unit => {

  });
  
});
