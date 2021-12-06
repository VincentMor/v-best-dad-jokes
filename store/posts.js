export const actions = {
  async getPosts(context) {
    const posts = await this.$axios.$get('posts')
    context.commit('posts', posts)
  },
}

export const mutations = {
  posts(state, data) {
    state.all = data
  },
}

export const state = () => ({
  all: [],
});
