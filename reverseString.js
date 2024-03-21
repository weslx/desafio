var reverseString = (s) => {
  let i = s.length - 1;
  let ReverseStr = "";
  for (i; i >= 0; --i) {
    ReverseStr += s[i];
  }
  console.log(ReverseStr);
};

reverseString("abcde");
