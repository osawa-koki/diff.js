import DiffMatchPatch from "diff-match-patch"

const _DiffMatchPatch: any = DiffMatchPatch;
const dmp = new _DiffMatchPatch();

const A_htmlelement: HTMLElement | null = document.getElementById("diff-compare-A");
const B_htmlelement: HTMLElement | null = document.getElementById("diff-compare-B");

const button: HTMLElement | null = document.getElementById("diff-button");

button?.addEventListener("click", () => {
  const A_value: string = (A_htmlelement as HTMLTextAreaElement)?.value;
  const B_value: string = (B_htmlelement as HTMLTextAreaElement)?.value;

  const diffs = dmp.diff_main(A_value, B_value);
  console.log(diffs);
  
});
