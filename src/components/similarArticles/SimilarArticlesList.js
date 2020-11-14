import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { SimilarArticlesFactory } from './SimilarArticlesFactory'

import ArticleCard from "../article-card"


const getPostsFromQuery = (posts) => {
    if (posts) {
        return posts.nodes
            .map(edge => edge)
            .map(node => Object.assign({}, node, node.fields))
    }
    return []
}

const SimilarArticlesComponent = ({ articles }) =>
    articles > 1 &&
        <section className="mt-12">
            <h2>You might also like these articles</h2>
            <div className="grid grid-cols-2 gap-4 my-5">
                {articles.map((article, i) => {
                    return (
                        <ArticleCard  details={article.article} key={i} />  
                    )}
                )}
            </div>
        </section> 

export default (props) => (
    <StaticQuery
        query={
            graphql`
                query {
                    posts: allMdx(filter: { fields: { slug: { regex: "/articles/" } } }) { 
                    nodes {
                    frontmatter {
                        title
                        category
                        tags
                    }
                    fields {
                        slug
                    }
                }
            } }
        `}
        render={data => {
            const {category, tags, currentArticlePath} = props
            
            const articles = getPostsFromQuery(data.posts)

            const SimilarArticles = new SimilarArticlesFactory(
                articles, currentArticlePath
            )
            .setCategory(category)
            .setTags(tags)
            .getArticles()
            
            return (
                <SimilarArticlesComponent articles={SimilarArticles} />
            )
        }}
    />
)