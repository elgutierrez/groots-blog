<template>
  <div class="container wrapmain">
    <div id="vuepress-theme-blog__post-layout">
      <article
        class="vuepress-blog-theme-content"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <div class="row">
          <div class="col-md-8">
            <header>
              <span class="text-muted"
                ><PostMeta :date="$frontmatter.date"
              /></span>
              <h1 class="article-head mt-3" itemprop="name headline">
                {{ $frontmatter.title }}
              </h1>
              <p class="lead">{{ $frontmatter.description }}</p>

              <Avatar />
            </header>

            <div class="text-center mt-4 mb-40">
              <img class="featuredimg" :src="$frontmatter.featuredimg" />
            </div>

            <Content itemprop="articleBody" />

            <PostMeta :tags="$frontmatter.tags" />
          </div>
          <div class="col-md-4">
            <div class="sticky-card text-center">
              <div class="card text-center">
                <h2>FREE Growing guide</h2>
                <p>
                  Subscribe out our newsletter and get instant access to it!
                </p>
              </div>
              <div style="width: 200px;" class="mx-auto">
                <div style="width: 200px;">
                  <a :href="$themeConfig.playstoreUrl">
                    <img
                      alt="Get it on Google Play"
                      src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <h2 class="mt-4">Related content</h2>
      <div class="row mt-4">
        <div v-for="page in relatedPosts" :key="page.title" class="col-md-4">
          <BlogPostCard :page="page" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-9">
          <Newsletter v-if="$service.email.enabled" />
          <Comment />
        </div>
      </div>

      <Toc />
    </div>
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import Avatar from '@theme/components/Avatar.vue'
import BlogPostCard from '@theme/components/BlogPostCard.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    Toc,
    PostMeta,
    Avatar,
    Comment,
    BlogPostCard,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },
  computed: {
    relatedPosts() {
      return this.$site.pages
        .filter(
          p =>
            p.title !== this.$frontmatter.title &&
            p.frontmatter.category &&
            p.frontmatter.category === this.$frontmatter.category
        )
        .sort((a, b) => a.frontmatter.date - b.frontmatter.date)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,400i,700&display=swap')
.sticky-card
  position: sticky
  top: 120px
</style>
