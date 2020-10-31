import { includes, orderBy } from "lodash"

export class SimilarEpisodesFactory {
  constructor(episodes, currentEpisodePath) {
    this.episodes = episodes.filter(
      aEpisode => aEpisode.fields.slug !== currentEpisodePath
    )

    this.currentEpisodePath = currentEpisodePath
    this.maxEpisodes = 4
    this.job = null
    this.tags = []
  }

  setMaxEpisodes(m) {
    this.maxEpisodes = m
    return this
  }

  setJob(job) {
    this.job = job
    return this
  }

  setTags(tagsArray) {
    this.tags = tagsArray
    return this
  }

  getEpisodes() {
    const { episodes, tags, job, maxEpisodes } = this
    const identityMap = {}

    if (!!tags === false) {
      console.error("SimilarEpisodesFactory: Tags not provided, use setTags()")
      return []
    }

    if (!!job === false) {
      console.error("SimilarEpisodesFactory: Job not provided, use setJob()")
      return []
    }

    function getPath(episode) {
      return episode.fields.slug
    }

    function addToMap(episode) {
      const path = getPath(episode)

      if (!identityMap.hasOwnProperty(path)) {
        identityMap[path] = {
          episode: episode,
          points: 0,
        }
      }
    }

    function addJob(episode, job) {
      const points = 1
      const path = getPath(episode)

      if (episode.frontmatter.job === job) {
        identityMap[path].points += points
      }
    }

    function addTagsPoint(episode, tags) {
      const tagPoint = 1
      const path = getPath(episode)

      episode.frontmatter.tags.forEach(aTag => {
        if (includes(tags, aTag)) {
          identityMap[path].points += tagPoint
        }
      })
    }

    function getIdentityMapAsArray() {
      return Object.keys(identityMap).map(path => identityMap[path])
    }

    for (let episode of episodes) {
      addToMap(episode)
      addTagsPoint(episode, tags)
      addJob(episode, job)
    }

    const arrayIdentityMap = getIdentityMapAsArray()

    const similarEpisodes = orderBy(arrayIdentityMap, ["points"], ["desc"])

    return similarEpisodes.splice(0, maxEpisodes)
  }
}
