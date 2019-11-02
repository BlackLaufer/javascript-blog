const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');
        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        }
    /* get 'href' attribute from the clicked link */
    
    const clikedElementHref = clickedElement.getAttribute('href');
    /* find the correct article using the selector (value of 'href' attribute) */

    const correctArticle = document.querySelector(clikedElementHref);
    /* add class 'active' to the correct article */
    correctArticle.classList.add('active');
}


const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',
optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(customSelector = '') {
    let html = '';
    const emptyList = document.querySelector(optTitleListSelector);

    function clearContent(content) {
        content.innerHTML = '';
    }
    clearContent(emptyList);
    /* remove contents of titleList */
      /* for each article */
        const articles = document.querySelectorAll(optArticleSelector + customSelector);
            for (let article of articles) {
                const articleId = article.getAttribute('id');
                const articleTitle = article.querySelector(optTitleSelector).innerHTML;
                const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      
                html = html + linkHTML;
          }
  
        emptyList.innerHTML = html;
  
        const links = document.querySelectorAll('.titles a');
            for (let link of links) {
                link.addEventListener('click', titleClickHandler);  
            }
    
}

generateTitleLinks();

function generateTags() {
      /* OK make html variable with empty string */
    let html = '';
      /* OK find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
      /*OK START LOOP: for every article: */
        for (let article of articles) {
          /* find tags wrapper wrapperList?*/
            const wrappersList = article.querySelector(optArticleTagsSelector);
            /* get tags from data-tags attribute */
            const articleTags = article.getAttribute('data-tags');
       //     console.log(articleTags);
        
    
        /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
        /* START LOOP: for each tag */
        for (let tag of articleTagsArray) {
      //   /* generate HTML of the link */
            const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
       //    console.log(linkHTML)        
      //     /* add generated code to html variable */
            html = html + linkHTML;
      //      /* END LOOP: for each tag */
        }
      //  /* insert HTML of all the links into the tags wrapper ! */ 
        console.log(wrappersList);
        wrappersList.innerHTML = html; 
         
        html = '';
    }
    /* END LOOP: for every article: */
}  

generateTags();
     
function tagClickHandler(event) {
       /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
    const links = document.querySelectorAll('a.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
        for (let activeLink of activeLinks) {
      /* remove class active */
        activeLink.classList.remove('active');
      /* END LOOP: for each active tag link */
        }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const linkstag = document.querySelectorAll('a.[href="+ href +"]');
    /* START LOOP: for each found tag link */
        for (let tagLink of tagLinks) {
    /* add class active */
        tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
        }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
}
    
function addClickListenersToTags() {
    /* find all links to tags */
    const links = document.querySelectorAll('.tags');
    /* START LOOP: for each link */
        for (let link of links) {
    /* add tagClickHandler as event listener for that link */
            link.addEventListener('click', tagClickHandler);  
    /* END LOOP: for each link */
        }
}
    
addClickListenersToTags();
