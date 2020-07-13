<template>
  <article
    itemprop="blogPost"
    class="ui-post entry card-container"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <meta itemprop="mainEntityOfPage" :content="page.path" />
    <div class="entry card h-100">
      <div class="card-header-image">
        <NavLink :link="page.path">
          <img :src="page.frontmatter.featuredimg" />
        </NavLink>
      </div>

      <div class="card-inside">
        <div class="card-subheading">
          <div
            v-if="page.frontmatter.tags"
            class="ui-post-meta ui-post-tag"
            itemprop="keywords"
          >
            <router-link
              v-for="tag in resolvePostTags(page.frontmatter.tags)"
              :key="tag"
              :to="'/tag/' + tag"
            >
              {{ tag }}
            </router-link>
          </div>
        </div>
        <h2 class="heading" itemprop="name headline">
          <NavLink :link="page.path" class="heading">{{ page.title }}</NavLink>
        </h2>
        <p itemprop="description">
          {{ page.frontmatter.summary || page.summary }}
        </p>
      </div>
      <div class="meta-bottom mt-auto">
        <div v-if="$themeConfig.authors">
          <span
            v-for="author in $themeConfig.authors"
            :key="author.name"
            class="nav-item"
          >
            <div class="d-flex">
              <a class="profile-avatar">
                <img
                  v-if="author.name === page.frontmatter.author"
                  :src="$withBase(author.avatar)"
                  class="avatar-image"
                  :alt="author.name"
                />
              </a>
              <div class="meta">
                <div v-if="author.name === page.frontmatter.author">
                  <span class="username">{{ author.name }}</span> &nbsp;
                </div>
                <div></div>
              </div>
            </div>
          </span>
        </div>

        <div v-if="page.frontmatter.date" class="date">
          <time
            pubdate
            itemprop="datePublished"
            :datetime="page.frontmatter.date"
          >
            {{ resolvePostDate(page.frontmatter.date) }}
          </time>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import dayjs from 'dayjs'

export default {
  name: 'BlogPostCard',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  methods: {
    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>
