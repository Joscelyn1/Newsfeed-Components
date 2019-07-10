// // Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement = domElement;
//     // create a reference to the ".expandButton" class. 
//     this.expandButton = document.querySelectorAll('.expandButton');
//     // Using your expandButton reference, update the text on your expandButton to say "expand"

//     this.expandButton.forEach((button) => {
//       button.textContent = "expand";
//     })
//     this.expandButton.forEach((button) => {
//       button.addEventListener('click', () => this.expandArticle());
//     })

//     this.domElement.addEventListener('click', () => this.expandArticle())

//   }

//   expandArticle() {
//     // Using our reference to the domElement, toggle a class to expand or hide the article.
//     this.domElement.classList.toggle('article-open');

//   }
// }

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/


// let articles = document.querySelectorAll('.article');

// articles = [...articles].map(article => new Article(article));











// <div class="articles">
// <div class="article">
//   {/* <h2>Lambda School Students: "We're the best!"</h2>
//   <p class="date">Nov 5th, 2017</p>

//   <p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura
//     skywalker lando
//     moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth
//     baba skywalker
//     watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau
//     darth calamari.
//     Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine
//     skywalker. Qui-gonn
//     jar twi'lek jinn leia jango skywalker mon. </p>

//   <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
//     windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff
//     chewbacca palpatine
//     mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando
//     dantooine moff
//     k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth
//     darth. Moff
//     solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto.
//     Yavin jawa sebulba
//     owen jinn tatooine sith organa.</p>

//   <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
//     naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff
//     baba wicket
//     han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé
//     wookiee. Leia
//     moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p> */}
//   <span class='expandButton'></span>
// </div>
// {/* <div class="article">
//   <h2>Javascript and You, ES6</h2>
//   <p class="date">Nov 7th, 2017</p>
//   <p>Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur
//     portkey ghost
//     Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus.
//     Padfoot
//     snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell
//     lies. Mudbloods
//     yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus
//     mimbletonia Pigwidgeon
//     knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders
//     You-Know-Who cursed.
//     Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.</p>

//   <p>Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of
//     Glory elder
//     wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider
//     Slytherin’s Heir
//     mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second
//     bedroom. Padma
//     and Parvati Sorting Hat Minister of Magic blue turban remember my last.</p> */}
//   <span class='expandButton'></span>
// </div>
// <div class="article">
//   <h2>React vs Angular vs Vue</h2>
//   <p class="date">Nov 7th, 2017</p>

//   {/* <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet,
//     consectetur
//     adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor
//     sit amet,
//     consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem
//     ipsum dolor
//     sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     Caterpie Lorem
//     ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing
//     elit. Butterfree
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur
//     adipiscing elit.
//     Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur
//     adipiscing
//     elit.</p>

//   <p>Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet,
//     consectetur
//     adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor
//     sit amet,
//     consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem
//     ipsum dolor
//     sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum</p> */}
//   <span class='expandButton'></span>
// </div>
// <div class="article">
//   <h2>Professional Software Development in 2018</h2>
//   <p class="date">Nov 7th, 2017</p>
//   {/* <p>Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor
//     hodor, hodor, hodor
//     hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor
//     hodor, hodor.
//     Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? </p>

//   <p>Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor
//     hodor, hodor;
//     hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor.
//     Hodor, HODOR
//     hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor
//     hodor?! Hodor
//     hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? </p>

//   <p>Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor
//     hodor? Hodor!
//     Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor,
//     hodor.
//     Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor
//     hodor. Hodor.
//   </p>

//   <p>Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor
//     hodor, hodor;
//     hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor.
//     Hodor, HODOR
//     hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor
//     hodor?! Hodor
//     hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? </p> */}
//   <span class='expandButton'></span>
// </div>
// <div class="article">
//   <h2>Top Used Algorithms in JavaScript</h2>
//   <p class="date">April 25th, 2019</p>
//   {/* <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet,
//     consectetur
//     adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor
//     sit amet,
//     consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem
//     ipsum dolor
//     sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     Caterpie Lorem
//     ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing
//     elit. Butterfree
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur
//     adipiscing elit.
//     Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur
//     adipiscing
//     elit.</p>

//   <p>Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet,
//     consectetur
//     adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor
//     sit amet,
//     consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem
//     ipsum dolor
//     sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum</p> */}
//   <span class='expandButton'></span>
// </div>
// <div class="article">
//   <h2>JavaScript Modules for the Web</h2>
//   <p class="date">June 19th, 2019</p>
//   {/* <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet,
//     consectetur
//     adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor
//     sit amet,
//     consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem
//     ipsum dolor
//     sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     Caterpie Lorem
//     ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing
//     elit. Butterfree
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur
//     adipiscing elit.
//     Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur
//     adipiscing
//     elit.</p>

//   <p>Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet,
//     consectetur
//     adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor
//     sit amet,
//     consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem
//     ipsum dolor
//     sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum</p> */}
//   <span class='expandButton'></span>
// </div>
// <div class="article">
//   <h2>Asynchronous Programming Basics Using JavaScript</h2>
//   <p class="date">August 6th, 2018</p>
//   <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet,
//     consectetur
//     adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor
//     sit amet,
//     consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem
//     ipsum dolor
//     sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     Caterpie Lorem
//     ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing
//     elit. Butterfree
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur
//     adipiscing elit.
//     Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur
//     adipiscing
//     elit.</p>

//   <p>Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet,
//     consectetur adipiscing
//     elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet,
//     consectetur
//     adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor
//     sit amet,
//     consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem
//     ipsum dolor
//     sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum</p>
//   <span class='expandButton'></span>
// </div>
// </div>



const articleData = [
  {
    title: "Lambda School Students: \"We're the best!\"",
    date: "Nov 5, 2017",
    content: `<p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
      watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau
      darth calamari.
      Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine
      skywalker. Qui-gonn
      jar twi'lek jinn leia jango skywalker mon.</p>
  
    <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
      windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff
      chewbacca palpatine
      mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando
      dantooine moff
      k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth
      darth. Moff
      solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto.
      Yavin jawa sebulba
      owen jinn tatooine sith organa.</p>
  
    <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
      naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff
      baba wicket
      han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé
      wookiee. Leia
      moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>`
  },
  {
    title: "Javascript and You, ES6",
    date: "Nov 7, 2017",
    content: `<p>Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur
    portkey ghost
    Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus.
    Padfoot
    snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell
    lies. Mudbloods
    yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus
    mimbletonia Pigwidgeon
    knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders
    You-Know-Who cursed.
    Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.</p>

  <p>Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of
    Glory elder
    wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider
    Slytherin’s Heir
    mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second
    bedroom. Padma
    and Parvati Sorting Hat Minister of Magic blue turban remember my last.</p>`
  },
  {
    title: "React vs Angular vs Vue",
    date: "Nov 7, 2017",
    content: `<p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet,
    consectetur
    adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor
    sit amet,
    consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem
    ipsum dolor
    sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Caterpie Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Butterfree
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.
    Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur
    adipiscing
    elit.</p>

  <p>Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet,
    consectetur
    adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor
    sit amet,
    consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem
    ipsum dolor
    sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum</p>`
  },
  {
    title: "Professional Software Development in 2018",
    date: "Nov 7th 2017",
    content: `  <p>Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor
    hodor, hodor, hodor
    hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor
    hodor, hodor.
    Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? </p>

  <p>Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor
    hodor, hodor;
    hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor.
    Hodor, HODOR
    hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor
    hodor?! Hodor
    hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? </p>

  <p>Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor
    hodor? Hodor!
    Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor,
    hodor.
    Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor
    hodor. Hodor.
  </p>

  <p>Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor
    hodor, hodor;
    hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor.
    Hodor, HODOR
    hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor
    hodor?! Hodor
    hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? </p>`
  },
  {
    title: "Top Used Algorithms in JavaScript",
    date: "April 25, 2019",
    content: `
    <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet,
    consectetur
    adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor
    sit amet,
    consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem
    ipsum dolor
    sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Caterpie Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Butterfree
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.
    Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur
    adipiscing
    elit.</p>

  <p>Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet,
    consectetur
    adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor
    sit amet,
    consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem
    ipsum dolor
    sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum</p>
    `
  },
  {
    title: "JavaScript Modules for the Web",
    date: "June 19, 2019",
    content: `
    {/* <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet,
      consectetur adipiscing
      elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet,
      consectetur
      adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor
      sit amet,
      consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem
      ipsum dolor
      sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Caterpie Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Butterfree
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
      Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur
      adipiscing
      elit.</p>
  
    <p>Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet,
      consectetur adipiscing
      elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet,
      consectetur adipiscing
      elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet,
      consectetur adipiscing
      elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet,
      consectetur adipiscing
      elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet,
      consectetur adipiscing
      elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet,
      consectetur adipiscing
      elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet,
      consectetur
      adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor
      sit amet,
      consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem
      ipsum dolor
      sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum</p>
    `
  },
  {
    title: "Asynchronous Programming Basics Using JavaScript",
    date: "August 6, 2018",
    content: `  <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet,
    consectetur
    adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor
    sit amet,
    consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem
    ipsum dolor
    sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Caterpie Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Butterfree
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.
    Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur
    adipiscing
    elit.</p>

  <p>Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet,
    consectetur adipiscing
    elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet,
    consectetur
    adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor
    sit amet,
    consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem
    ipsum dolor
    sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum</p>
    `

  }
]



const accordion = document.querySelector('.accordion')

accordion.classList.add('articles');
articleData.forEach(event => {
  accordion.appendChild(createPanel(event.title, event.date, event.content))
})

function createPanel(title, date, content) {
  //define new elements
  const panel = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
  const articleContent = document.createElement('div');
  const expandButton = document.createElement('span');

  panel.appendChild(articleTitle);
  panel.appendChild(articleDate);
  panel.appendChild(articleContent);
  panel.appendChild(expandButton);

  panel.classList.add('article');
  expandButton.classList.add('expandButton');

  expandButton.textContent = "expand";
  articleContent.textContent = content;
  articleDate.textContent = date;
  articleTitle.textContent = title;

  expandButton.addEventListener('click', event => {
    console.log('button clicked', event.target)
    // 1. toggle hide-btn on BOTH buttons
    panel.classList.toggle('article-open');

    // 2. Change visibility of the content w/ 'toggle-on'
  })
  return panel;
}

// function createPanel(title, content) {
//   // define new elements
//   const panel = document.createElement('div');
//   const panelBar = document.createElement('div');
//   const panelTitle = document.createElement('h3');
//   const buttonPanel = document.createElement('div');
//   const buttonOpen = document.createElement('button');
//   const buttonClose = document.createElement('button');
//   const panelContent = document.createElement('div');
  
//   // Setup structure of elements
//   panel.appendChild(panelBar)
//   panel.appendChild(panelContent)
//   panelBar.appendChild(panelTitle)
//   panelBar.appendChild(buttonPanel)
//   buttonPanel.appendChild(buttonOpen)
//   buttonPanel.appendChild(buttonClose)
  
//   // set class names
//   panel.classList.add('panel')
//   panelBar.classList.add('panel-bar')
//   buttonPanel.classList.add('panel-buttons')
//   buttonOpen.classList.add('panel-btn-open')
//   buttonClose.classList.add('panel-btn-close', 'hide-btn')
//   panelContent.classList.add('panel-content')
  
//   // set text content
//   buttonOpen.textContent = 'Open'
//   buttonClose.textContent = 'Close'
//   panelContent.textContent = content
//   panelTitle.textContent = title
  
//   // button events
//   // ❌ buttonPanel.querySelectorAll('button').forEach(btn => btn.addEventListener('click', clickHandler))
  // ✅ buttonPanel.addEventListener('click', clickHandler)
  // buttonPanel.addEventListener('click', event => {
  //   console.log('button clicked', event.target)
  //   // 1. toggle hide-btn on BOTH buttons
  //   buttonOpen.classList.toggle('hide-btn')
  //   buttonClose.classList.toggle('hide-btn')
  //   // 2. Change visibility of the content w/ 'toggle-on'
  //   panelContent.classList.toggle('toggle-on')
  // })
  
//   return panel
// }





// Remove panel from HTML
// create new function that will create a panel component exactly as you see it in the HTML
// give the component functionality when the open or closed button is clicked, the content is toggled on/off
// create components for each of the items in the above array.

// write a function 
// use createElement 
// returns a new DOM element

/*
<div class="panel">
  <div class="panel-bar">
    <h3>Title of Panel</h3>
    <div class="panel-buttons">
      <button class="panel-btn-open">Open</button>
      <button class="panel-btn-close hide-btn">Close</button>
    </div>
  </div>
  <div class="panel-content">
    Content of panel
  </div>
</div>
*/
// const accordion = document.querySelector('.accordion')

// accordion.appendChild(createPanel('hi rosie', 'best cat award'))

// panelData.forEach(data => {
//   console.log('creating panel:', data.title)
//   accordion.appendChild(createPanel(data.title, data.content))
// })

// function createPanel(title, content) {
//   // define new elements
//   const panel = document.createElement('div');
//   const panelBar = document.createElement('div');
//   const panelTitle = document.createElement('h3');
//   const buttonPanel = document.createElement('div');
//   const buttonOpen = document.createElement('button');
//   const buttonClose = document.createElement('button');
//   const panelContent = document.createElement('div');
  
//   // Setup structure of elements
//   panel.appendChild(panelBar)
//   panel.appendChild(panelContent)
//   panelBar.appendChild(panelTitle)
//   panelBar.appendChild(buttonPanel)
//   buttonPanel.appendChild(buttonOpen)
//   buttonPanel.appendChild(buttonClose)
  
//   // set class names
//   panel.classList.add('panel')
//   panelBar.classList.add('panel-bar')
//   buttonPanel.classList.add('panel-buttons')
//   buttonOpen.classList.add('panel-btn-open')
//   buttonClose.classList.add('panel-btn-close', 'hide-btn')
//   panelContent.classList.add('panel-content')
  
//   // set text content
//   buttonOpen.textContent = 'Open'
//   buttonClose.textContent = 'Close'
//   panelContent.textContent = content
//   panelTitle.textContent = title
  
//   // button events
//   // ❌ buttonPanel.querySelectorAll('button').forEach(btn => btn.addEventListener('click', clickHandler))
//   // ✅ buttonPanel.addEventListener('click', clickHandler)
//   buttonPanel.addEventListener('click', event => {
//     console.log('button clicked', event.target)
//     // 1. toggle hide-btn on BOTH buttons
//     buttonOpen.classList.toggle('hide-btn')
//     buttonClose.classList.toggle('hide-btn')
//     // 2. Change visibility of the content w/ 'toggle-on'
//     panelContent.classList.toggle('toggle-on')
//   })
  
//   return panel
// }

// function createPanel2(title, content) {
//   const panel = document.createElement('div')
//   panel.innerHTML = `<div class="panel">
//   <div class="panel-bar">
//     <h3>${title}</h3>
//     <div class="panel-buttons">
//       <button class="panel-btn-open">Open</button>
//       <button class="panel-btn-close hide-btn">Close</button>
//     </div>
//   </div>
//   <div class="panel-content">
//     ${content}
//   </div>
// </div>`
//   return panel
// }