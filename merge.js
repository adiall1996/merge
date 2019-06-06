//'codewars' is a merge from 'cdw' and 'oears':

//    s:  c o d e w a r s   = codewars
//part1:  c   d   w         = cdw
//part2:    o   e   a r s   = oears



function isMerge(s, part1, part2) {
  if(s.length !== part1.length + part2.length) {
    return false; 
  } else {
    if(s.length === 0) {
      return true; 
    } else if(s[0] === part1[0] && s[0] === part2[0]) {
      return isMerge(s.slice(1), part1.slice(1), part2) || isMerge(s.slice(1), part1, part2.slice(1))
    } else if(s[0] === part1[0]) {
      return isMerge(s.slice(1), part1.slice(1), part2);
    } else if(s[0] === part2[0]) {
      return isMerge(s.slice(1), part1, part2.slice(1));
    }
  }

console.log(isMerge('codewars', 'code', 'wars')); 
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(isMerge('codewars', 'cod', 'wars')); 