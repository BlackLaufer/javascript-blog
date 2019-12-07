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
optArticleTagsSelector = '.post-tags .list',
optArticleTagsLinksSelector = '.post-tags .list li',
optArticleAuthorSelector= '.post-author',
optArticleAuthorLinkSelector =  '.post-author a';

function generateTitleLinks(customSelector = '') {
    
    const emptyList = document.querySelector(optTitleListSelector);

    function clearContent(content) {
        content.innerHTML = '';
    }
    clearContent(emptyList);
    /* remove contents of titleList */
      /* for each article */
        let html = '';
        const articles = document.querySelectorAll(optArticleSelector + customSelector);
            for (let article of articles) {
                const articleId = article.getAttribute('id');
                const articleTitle = article.querySelector(optTitleSelector).innerHTML;
                const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
     // console.log(linkHTML);
                emptyList.insertAdjacentHTML('afterbegin', linkHTML);
                html = html + linkHTML;
          }
  
        emptyList.innerHTML = html;
  
        const links = document.querySelectorAll('.titles a');
            for (let link of links) {
                link.addEventListener('click', titleClickHandler);  
            }
    
}

generateTitleLinks();

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function generateTags() {
      /* OK find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
      /*OK START LOOP: for every article: */
        for (let article of articles) {
          /* find tags wrapper wrapperList?*/
            const wrappersList = article.querySelector(optArticleTagsSelector);
            /* OK make html variable with empty string */
            let html = '';
            /* get tags from data-tags attribute */
            const articleTags = article.getAttribute('data-tags');
       //     console.log(articleTags);
        /* split tags into array */
            const articleTagsArray = articleTags.split(' ');
        /* START LOOP: for each tag */
            for (let tag of articleTagsArray) {
          //    console.log(articleTagsArray);
          //   /* generate HTML of the link */
                const linkHTML = '<li><a href="#tag-'+ tag +'">'+ tag +'</a></li>';
          //     console.log(linkHTML)        
          //     /* add generated code to html variable */
                html = html + linkHTML;
                
          //      /* END LOOP: for each tag */
            }
          //  /* insert HTML of all the links into the tags wrapper ! */ 
          
            wrappersList.insertAdjacentHTML('beforeend', html)
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
    const link = clickedElement.quertySelector('a[href^="#tag-"]');
    const href = link.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
    const activeLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
        for (let activeLink of activeLinks) {
      /* remove class active */
        activeLink.classList.remove('active');
      /* END LOOP: for each active tag link */
        }
    /* find all tag links with "href" attribute equal to the "href" constant */
     const tagLinks = document.querySelectorAll('a[href="+ href +"]');
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
    const links = document.querySelectorAll(optArticleTagsLinksSelector);
    /* START LOOP: for each link */
    for (let link of links) {
/* add tagClickHandler as event listener for that link */
        link.addEventListener('click', tagClickHandler);  
/* END LOOP: for each link */
    }
}
    
function generateAutors(){
    const activeArticles = document.querySelectorAll('.post.active');

    for(let activeArticle of activeArticles) {
        activeArticle.classList.add('active');
    }

    const names = document.querySelectorAll(optArticleAuthorSelector);

    for(let name of names) {
        name.innerHTML = '';
    }
    
    const authors = document.querySelectorAll(optArticleSelector);
    
    for(let author of authors) {
        const wraperAuthors = author.querySelector(optArticleAuthorSelector);
        console.log(wraperAuthors);

        let html = '';

        const dataAuthor = author.getAttribute('data-author');

        const linkHTML = '<span>by</span><a href="'+ dataAuthor +'">'+ dataAuthor +'</a>';
        console.log(linkHTML);

        html = html + linkHTML;
        console.log(html);

        wraperAuthors.insertAdjacentHTML('afterbegin', html);
        
    }
}

generateAutors();


function authorClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    generateTitleLinks('[data-author~="' + href + '"]');
}

function addClickListenersToAuthor() {
    const links = document.quertySelectorAll(optArticleAuthorLinkSelector);
    for (let link of links) {
      link.addEventListener('click', authorClickHandler);
    }
}

addClickListenersToAuthor();