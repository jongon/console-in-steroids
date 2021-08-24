import columns from "cli-columns";

const values = [
  "blue" + "berry",
  "笔菠萝" + "苹果笔",
  "apple",
  "pomegranate",
  "durian",
  "star fruit",
  "パイナップル",
  "apricot",
  "banana",
  "pineapple",
  "orange",
];

console.log(columns(values));
