const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

translate(text, voice){
  //console.log("TEXT: " + text)
  let end = text.substring(text.length -1, text.length)
  //console.log(end)
  let noend = text.substring(0, text.length-1)
  let spl = noend.split(" ");
  let newlis = []
  if(voice == "american-to-british"){
    for(var i = 0; i < spl.length; i++){
      if(spl[i] in americanOnly){
        newlis.push("<span class=\"highlight\">" + americanOnly[spl[i]] + "</span>")
      }else if(spl[i] in americanToBritishSpelling){
        newlis.push("<span class=\"highlight\">" + americanToBritishSpelling[spl[i]] + "</span>")
      }else if(spl[i] in americanToBritishTitles){
        newlis.push("<span class=\"highlight\">" + americanToBritishTitles[spl[i]] + "</span>")
      } else if(/^(10|11|12|[1-9]):[0-5][0-9]$/.test(spl[i])){
        let [h,m] = spl[i].split(":")
        newlis.push("<span class=\"highlight\">" + h + "." + m + "</span>")
      }else{
        newlis.push(spl[i])
      }
    }
    let s = newlis.join(" ");
    //console.log("Return: " + s)
    return s + end;
  }else{
    for(var i = 0; i < spl.length; i++){
      if(spl[i] in britishOnly){
        newlis.push("<span class=\"highlight\">" + britishOnly[spl[i]] + "</span>")
      }else if(Object.values(americanToBritishSpelling).indexOf(spl[i]) > -1){
        newlis.push("<span class=\"highlight\">" + Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === spl[i]) + "</span>")
      }else if(Object.values(americanToBritishTitles).indexOf(spl[i]) > -1){
        newlis.push("<span class=\"highlight\">" + Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === spl[i]) + "</span>")
      }else if(/^(10|11|12|[1-9]).[0-5][0-9]$/.test(spl[i])){
        let [h,m] = spl[i].split(".")
        newlis.push("<span class=\"highlight\">" + h + ":" + m + "</span>")
      }else{
        newlis.push(spl[i])
      }
    }
    let s = newlis.join(" ");
    //console.log("Return: " + s)
    return s + end;
  }
}
}

module.exports = Translator;