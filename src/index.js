import "./styles.css";

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

let longestWord = () => {
  /* Kilder:
        https://www.codegrepper.com/code-examples/javascript/split+string+into+array+of+words+javascript
        https://stackoverflow.com/questions/3278556/for-loop-with-if-else-statement/3278686 */

  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  let textArr = text.split(" ");
  console.log(textArr);
  //console.log(textArr[1].length);

  // TODO: Velg første ord så du har noe å sammenlikne med
  console.log(textArr[0]);

  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  // textArr.forEach(findLongestWord);

  for (let i = 0; i < 80; i++) {
    if (textArr[0].length < textArr[i].length) {
      let longestWord = textArr[i];
    }
    /*else {
              console.log("...");
            }*/
  }
};
console.log(longestWord());
