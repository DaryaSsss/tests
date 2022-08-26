let s = "1113222113";
let repeat = 40;
let stash = [];
let result = [];


const ChangeLine = () => {
  for (i = 0; i < repeat; i++) {
    stash = [];
    result = [];
    size = s.length;
    for (j = 0; j < size; j++) {
      stash = [];
      stash.push(s[0]);
      s = s.replace(s[0], "");
      while (stash[0] === s[0]) {
        stash.push(s[0]);
        s = s.replace(s[0], "")
      }
      result.push(stash.length.toString(), stash[0])
      if ( s.length === 0) { break }
  }
  s = result.toString().replaceAll(",", "");
  console.log("LINE RESULT", s.length)
}
}

ChangeLine();