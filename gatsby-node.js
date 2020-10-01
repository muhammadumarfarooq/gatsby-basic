exports.createPages = async function({ actions }) {
  actions.createPage({
    path: "my-dynamic-page",
    component: require.resolve("./src/templates/dynamic-page.jsx"),
    context: {
      myTeacher: "Sir Zia",
      myName: "Muhammad Umar Farooq"
    }
  })
}
