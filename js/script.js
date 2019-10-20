const titleClickHandler = function(event){
    event.preventDefault();
      const clickedElement = this;
      console.log('Link was clicked!');
  
    /* [DONE] remove class 'active' from all article links  */
  
      const activeLinks = document.querySelectorAll('.titles a.active');
  
      for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
      }
  
    /* [DONE] add class 'active' to the clicked link */
  
      clickedElement.classList.add('active');
  
      console.log('clickedElement (with plus): ' + clickedElement);
  
    /* [DONE] remove class 'active' from all articles */
      const activeArticles = document.querySelectorAll('.posts article.active');

      for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
      }
    /* get 'href' attribute from the clicked link */
    
      const clikedElementHref = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */

      const correctArticle = document.querySelector(clikedElementHref);
    /* add class 'active' to the correct article */

      correctArticle.classList.add('active');
}
  

{
const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles';

function generateTitleLinks(){
    let html = '';
    const emptyList = document.querySelector(optTitleListSelector);

    function clearContent(content){
    content.innerHTML = '';
    }
    clearContent(emptyList);
  /* remove contents of titleList */
  
  
  /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);

    for(let article of articles){
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML;
    }

    emptyList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);  }

    }

    generateTitleLinks();
}