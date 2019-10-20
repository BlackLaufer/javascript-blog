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
optArticleTagsSelector = '.post-tags .list';

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
        console.log(linkHTML);
    html = html + linkHTML;
    }

    emptyList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);  }

    }

    generateTitleLinks();

    function generateTags(){
      /* find all articles */
      const articles = document.querySelectorAll(optArticleSelector);
      /* START LOOP: for every article: */
      for(let article of articles){
        /* find tags wrapper */
          const wrappersList = article.querySelector(optArticleTagsSelector);
      }
  /* make html variable with empty string */
      let html = '';
    
        /* get tags from data-tags attribute */
        
        const articleTags = articles.getAttribute('data-tags');
        console.log(articleTags);
        /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
        /* START LOOP: for each tag */
        for(let tag of articleTagsArray){
        /* generate HTML of the link */
          const linkHTML = '<li><a href="#tag-' + articleTags + '"><span>' + articleTags + '</span></a></li>';
        /* add generated code to html variable */
      html = html + linkHTML;
        }
      
        wrappersList.innerHTML = html;
        
      }
          
    
          
        /* END LOOP: for each tag */
    
        /* insert HTML of all the links into the tags wrapper */
    
      /* END LOOP: for every article: */
    
    generateTags();
  }