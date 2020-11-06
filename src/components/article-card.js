import React from "react"
import { Link } from "gatsby"

const ArticleCard = data => {
  const details = data.details.frontmatter
  const slug = data.details.fields.slug

  return (
    <div className="article-card my-8">
      <div className="episode-text">
        <Link to={slug}>
          <p className="article-title font-bold">{details.title}</p>
          <p>{details.excerpt}</p>
          <p className="article-read-more">Read more...</p>
          <p className="text-sm mt-2">
          {details.tags.map(tag => (
            <span className="article-tag" key={tag}>{tag}</span>
          ))}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard
