import { includes, orderBy } from 'lodash'

export class SimilarArticlesFactory {
    constructor (articles, currentArticlePath) {
        this.articles = articles.filter(
        (aArticle) => aArticle.fields.slug !== currentArticlePath);
  
        this.currentArticlePath = currentArticlePath;
        this.maxArticles = 4;
        this.category = null;
        this.tags = []

    }
  
    setMaxArticles(m) {
      this.maxArticles = m;
      return this;
    }
  
    setCategory(aCategory) {
      this.category = aCategory;
      return this;
    }

    setTags(tagsArray) {
      this.tags = tagsArray
      return this
    }
  
    getArticles() {
      const {articles, category, tags, maxArticles } = this;
      const identityMap = {};

      if (!!tags === false) {
        console.error("SimilarArticlesFactory: Tags not provided, use setTags()")
        return []
      }

      if(!!category === false ) {
        console.error('SimilarArticlesFactory: Category not provided, use setCategory().');
        return [];
      }

      function getPath(article) {
        return article.slug;
      }
  
      function addToMap(article) {
        const path = getPath(article);
  
        if (!identityMap.hasOwnProperty(path)) {
          identityMap[path] ={
            article: article,
            points: 0
          }
        }
      }
  
      function addCategoryPoints(article, category) {
        const points = 3;
        const path = getPath(article);

        if (article.frontmatter.category === category) {
          identityMap[path].points += points;
        }
      }

      function addTagsPoints(article, tags) {
        const tagPoint = 1;
        const path = getPath(article);

        article.frontmatter.tags.forEach((aTag) => {
          if (includes(tags, aTag)) {
            identityMap[path].points += tagPoint;
          }
        })
      }
  
  
      function getIdentityMapAsArray() {
        return Object.keys(identityMap).map((path) => identityMap[path]);
      }
  
      for (let article of articles) {
        addToMap(article);
        addCategoryPoints(article, category);
        addTagsPoints(article, tags)
      }
  
      const arrayIdentityMap = getIdentityMapAsArray();
  
      const similarArticles = orderBy(
        arrayIdentityMap, ['points'], ['desc']
      )
      
      return similarArticles.splice(0, maxArticles);
    }
}