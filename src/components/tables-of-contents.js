import React, { useState, useEffect } from "react"

const getIds = items => {
  return items.reduce((acc, item) => {
    if (item.url) {
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(`test`)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )
    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })
    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [itemIds])
  return activeId
}

const renderItems = (items, activeId) => (
  <ol>
    {items.map(item => (
      <li key={item.url}>
        <a
          href={item.url}
          style={{
            color: activeId === item.url.slice(1) ? "#0EFB69" : "#FC4056",
          }}
        >
          {item.title}
        </a>
        {item.items && renderItems(item.items, activeId)}
      </li>
    ))}
  </ol>
)

const TableOfContents = props => {
  const idList = getIds(props.items)
  const activeId = useActiveId(idList)
  const [hide, setHide] = useState(false)

  const removeComponent = () => {
    localStorage.setItem("toc", "hide")
    setHide(!hide)
  }

  return (
    <details
      className={hide ? "table-of-contents hide-out" : "table-of-contents"}
      open
    >
      <button
        title="Remove Table of Contents"
        className="absolute top-0 right-0 mr-2 mt-2"
        onClick={() => removeComponent()}
      >
        <i className="gg-close-o " />
      </button>
      <summary>Table of Contents</summary>
      {renderItems(props.items, activeId)}
    </details>
  )
}

export default TableOfContents
