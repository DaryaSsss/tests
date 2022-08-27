let Lines = [
  "00000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000",
]
const Instructions = [
  "rect 1x1", 
"rotate row y=0 by 7", 
"rect 1x1", 
"rotate row y=0 by 5", 
"rect 1x1", 
"rotate row y=0 by 5", 
"rect 1x1", 
"rotate row y=0 by 2", 
"rect 1x1", 
"rotate row y=0 by 3", 
"rect 1x1", 
"rotate row y=0 by 5", 
"rect 1x1", 
"rotate row y=0 by 3", 
"rect 1x1", 
"rotate row y=0 by 2", 
"rect 1x1", 
"rotate row y=0 by 3", 
"rect 2x1", 
"rotate row y=0 by 7", 
"rect 6x1", 
"rotate row y=0 by 3", 
"rect 2x1", 
"rotate row y=0 by 2", 
"rect 1x2", 
"rotate row y=1 by 10", 
"rotate row y=0 by 3", 
"rotate column x=0 by 1", 
"rect 2x1", 
"rotate column x=20 by 1", 
"rotate column x=15 by 1", 
"rotate column x=5 by 1", 
"rotate row y=1 by 5", 
"rotate row y=0 by 2", 
"rect 1x2", 
"rotate row y=0 by 5", 
"rotate column x=0 by 1", 
"rect 4x1", 
"rotate row y=2 by 15", 
"rotate row y=0 by 5", 
"rotate column x=0 by 1", 
"rect 4x1", 
"rotate row y=2 by 5", 
"rotate row y=0 by 5", 
"rotate column x=0 by 1", 
"rect 4x1", 
"rotate row y=2 by 10", 
"rotate row y=0 by 10", 
"rotate column x=8 by 1", 
"rotate column x=5 by 1", 
"rotate column x=0 by 1", 
"rect 9x1", 
"rotate column x=27 by 1", 
"rotate row y=0 by 5", 
"rotate column x=0 by 1", 
"rect 4x1", 
"rotate column x=42 by 1", 
"rotate column x=40 by 1", 
"rotate column x=22 by 1", 
"rotate column x=17 by 1", 
"rotate column x=12 by 1", 
"rotate column x=7 by 1", 
"rotate column x=2 by 1", 
"rotate row y=3 by 10", 
"rotate row y=2 by 5", 
"rotate row y=1 by 3", 
"rotate row y=0 by 10", 
"rect 1x4", 
"rotate column x=37 by 2", 
"rotate row y=3 by 18", 
"rotate row y=2 by 30", 
"rotate row y=1 by 7", 
"rotate row y=0 by 2", 
"rotate column x=13 by 3", 
"rotate column x=12 by 1", 
"rotate column x=10 by 1", 
"rotate column x=7 by 1", 
"rotate column x=6 by 3", 
"rotate column x=5 by 1", 
"rotate column x=3 by 3", 
"rotate column x=2 by 1", 
"rotate column x=0 by 1", 
"rect 14x1", 
"rotate column x=38 by 3", 
"rotate row y=3 by 12", 
"rotate row y=2 by 10", 
"rotate row y=0 by 10", 
"rotate column x=7 by 1", 
"rotate column x=5 by 1", 
"rotate column x=2 by 1", 
"rotate column x=0 by 1", 
"rect 9x1", 
"rotate row y=4 by 20", 
"rotate row y=3 by 25", 
"rotate row y=2 by 10", 
"rotate row y=0 by 15", 
"rotate column x=12 by 1", 
"rotate column x=10 by 1", 
"rotate column x=8 by 3", 
"rotate column x=7 by 1", 
"rotate column x=5 by 1", 
"rotate column x=3 by 3", 
"rotate column x=2 by 1", 
"rotate column x=0 by 1", 
"rect 14x1", 
"rotate column x=34 by 1", 
"rotate row y=1 by 45", 
"rotate column x=47 by 1", 
"rotate column x=42 by 1", 
"rotate column x=19 by 1", 
"rotate column x=9 by 2", 
"rotate row y=4 by 7", 
"rotate row y=3 by 20", 
"rotate row y=0 by 7", 
"rotate column x=5 by 1", 
"rotate column x=3 by 1", 
"rotate column x=2 by 1", 
"rotate column x=0 by 1", 
"rect 6x1", 
"rotate row y=4 by 8", 
"rotate row y=3 by 5", 
"rotate row y=1 by 5", 
"rotate column x=5 by 1", 
"rotate column x=4 by 1", 
"rotate column x=3 by 2", 
"rotate column x=2 by 1", 
"rotate column x=1 by 3", 
"rotate column x=0 by 1", 
"rect 6x1", 
"rotate column x=36 by 3", 
"rotate column x=25 by 3", 
"rotate column x=18 by 3", 
"rotate column x=11 by 3", 
"rotate column x=3 by 4", 
"rotate row y=4 by 5", 
"rotate row y=3 by 5", 
"rotate row y=2 by 8", 
"rotate row y=1 by 8", 
"rotate row y=0 by 3", 
"rotate column x=3 by 4", 
"rotate column x=0 by 4", 
"rect 4x4", 
"rotate row y=4 by 10", 
"rotate row y=3 by 20", 
"rotate row y=1 by 10", 
"rotate row y=0 by 10", 
"rotate column x=8 by 1", 
"rotate column x=7 by 1", 
"rotate column x=6 by 1", 
"rotate column x=5 by 1", 
"rotate column x=3 by 1", 
"rotate column x=2 by 1", 
"rotate column x=1 by 1", 
"rotate column x=0 by 1", 
"rect 9x1", 
"rotate row y=0 by 40", 
"rotate column x=44 by 1", 
"rotate column x=35 by 5", 
"rotate column x=18 by 5", 
"rotate column x=15 by 3", 
"rotate column x=10 by 5", 
"rotate row y=5 by 15", 
"rotate row y=4 by 10", 
"rotate row y=3 by 40", 
"rotate row y=2 by 20", 
"rotate row y=1 by 45", 
"rotate row y=0 by 35", 
"rotate column x=48 by 1", 
"rotate column x=47 by 5", 
"rotate column x=46 by 5", 
"rotate column x=45 by 1", 
"rotate column x=43 by 1", 
"rotate column x=40 by 1", 
"rotate column x=38 by 2", 
"rotate column x=37 by 3", 
"rotate column x=36 by 2", 
"rotate column x=32 by 2", 
"rotate column x=31 by 2", 
"rotate column x=28 by 1", 
"rotate column x=23 by 3", 
"rotate column x=22 by 3", 
"rotate column x=21 by 5", 
"rotate column x=20 by 1", 
"rotate column x=18 by 1", 
"rotate column x=17 by 3", 
"rotate column x=13 by 1", 
"rotate column x=10 by 1", 
"rotate column x=8 by 1", 
"rotate column x=7 by 5", 
"rotate column x=6 by 5", 
"rotate column x=5 by 1", 
"rotate column x=3 by 5", 
"rotate column x=2 by 5", 
"rotate column x=1 by 5"

]
let s = [];
let helper = [];
let stash = [];
let help1 = "";
let help2 = "";
let help3 = "";
let result = 0;

const Pixel = () => {
  for (i = 0; i < Instructions.length; i++) {
    helper = [];
    s = Instructions[i].split(" ");
    if (s.includes("rect")) {
      helper = s[1].split("x");
      help3 = "";
      for (m = 0; m < +helper[0]; m++) {
        help3 = help3 + "1";
      }
      for (j = 0; j < +helper[1]; j++) {
        Lines[j] = help3 + Lines[j].slice(helper[0])
      }
    }
    if (s.includes("row")) {
      helper = s[2].split("=");
      Lines[helper[1]] = Lines[helper[1]].slice(-s[4]) + Lines[helper[1]].slice(0, -s[4])
    }
    if (s.includes("column")) {
      helper = s[2].split("=");
      for (g = 0; g < s[4]; g++) {
        stash = [];
        stash.push(Lines[0][helper[1]])
        for (k = 1; k < Lines.length; k++) {
          stash.push(Lines[k][helper[1]]);
          help1 = stash[stash.length - 2];
          Lines[k] = Lines[k].substring(0, +helper[1]) + help1 + Lines[k].substring(+helper[1] + 1)
        }
        help2 = stash[stash.length - 1]
        Lines[0] = Lines[0].substring(0, +helper[1]) + help2 + Lines[0].substring(+helper[1] + 1)
      }
    } 
  }
  console.log(Lines)
  for (x = 0; x < Lines.length; x++) {
    for (y = 0; y < Lines[x].length; y++) {
      if (Lines[x][y] === "1") {
        result++;
      }
    }
  };
  console.log("RESULT", result)
}

Pixel();