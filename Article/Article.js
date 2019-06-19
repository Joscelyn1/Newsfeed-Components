/*

class Panel {
  constructor(panel) {
    // Important: don't use document.querySelector, use the panel.
    this.openButton = panel.querySelector('.panel-btn-open')
    this.closeButton = panel.querySelector('.panel-btn-close')
    this.panelContent = panel.querySelector('.panel-content')
    this.open = 0;
    this.openButton.addEventListener('click', () => this.togglePanel());
    this.closeButton.addEventListener('click', () => this.togglePanel());
    return this;
  }
  
  togglePanel() {
    this.panelContent.classList.toggle('toggle-on');
    this.openButton.classList.toggle('hide-btn');
    this.closeButton.classList.toggle('hide-btn');
    this.open = !this.open
    if(this.open) closeActivePanels(this);
  }
}

*/





// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = document.querySelectorAll('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    this.expandButton.forEach( (button) => {
      button.textContent = "expand";
    })
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.forEach( (button) => {
      button.addEventListener('click', () => this.expandArticle());
    })

    this.domElement.addEventListener('click', () => this.expandArticle())

  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/


let articles = document.querySelectorAll('.article');

articles = [...articles].map(article => new Article(article));
