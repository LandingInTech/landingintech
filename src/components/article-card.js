import React from "react"
import { Link } from "gatsby"

const ArticleCard = data => {
  const details = data.details.frontmatter
  const slug = data.details.fields.slug

  return (
    <div className="article-card">
      <Link to={slug}>
        <h3 className="article-title">{details.title}</h3>
        <p>{details.excerpt}</p>
        <div className="flex flex-wrap text-sm mt-2">
          {details.tags.map(tag => (
            <div className="article-tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
