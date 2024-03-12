export function add (a,b) {
    return a+b;
}

export const getMaxValue = (t) => {return Math.max(...t)}

export const getConsonnant = (string) => {return string.replace (/[a,e,i,o,u]/gi, "")}

function compareNombres(a, b) {
    return b - a;
  }

export const numsort = (number) => {return number.sort(compareNombres)}

export const conversion = (conversionArray) => {return conversionArray(conversionArray.num === 6)}

export const getCapitalVowel = (otherString) => {return otherString.replace (/[a,e,i,o,u]/gi,function(l){
    return l.toUpperCase();
})}
export const getCapitalConsonant = (anOtherString) => {return anOtherString.replace (/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,z]/gi,function(l){
    return l.toUpperCase();
})}

export function vowelsCount(sentence) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    let letters = Array.from(sentence);
    letters.forEach(function (value) {
     if (vowels.includes(value)) {
      count++
       }
    })
     return count;
    }
    
    

