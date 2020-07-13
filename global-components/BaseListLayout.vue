<template>
  <div id="">
    <div class="row justify-content-end mb-4 mx-4">
      <BlogSearch />
    </div>
    <div
      class="card-panel-content row"
      itemscope
      itemtype="http://schema.org/Blog"
    >
      <BlogPostCard
        v-for="page in pages"
        :key="page.key"
        :page="page"
        class="col-md-4"
      />
    </div>

    <component
      :is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent"
    />
    <div class="row justify-content-center">
      <div class="col-md-9">
        <Newsletter v-if="$service.email.enabled" />
        <Comment />
      </div>
    </div>
  </div>
</template>
<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */
import Vue from 'vue'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'
import BlogSearch from '@theme/components/BlogSearch.vue'
import BlogPostCard from '@theme/components/BlogPostCard.vue'

export default {
  components: {
    BlogSearch,
    BlogPostCard,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },
  data() {
    return {
      paginationComponent: null,
    }
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent()
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },
  },
}
</script>

<style lang="stylus">
.pagination > li > a, .pagination > li > span
  border:0;
  border-bottom:1px solid #ddd
  font-size:15px
  font-weight:700
.pagination > li:last-child > a, .pagination > li:last-child > span, .pagination > li:first-child > a, .pagination > li:first-child > span
  border-radius:0
.pagination > li > a, .pagination > li > span
  color:inherit
  background:none
.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus
  background:none
  border-bottom: 1px solid
  color: $accentColor
.date
  margin-left: 50px;
  margin-top: -20px;
.username
  margin-top:-10px;
</style>
