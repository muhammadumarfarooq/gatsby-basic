exports.createPages = async function({ actions }) {
  actions.createPage({
    path: "my-dynamic-page",
    component: require.resolve("./src/templates/dynamic-page.jsx"),
    context: {
      myTeacher: "Sir Zia",
      myName: "Muhammad Umar Farooq"
    }
  })
  
  actions.createPage({
    path: "my-new-dynamic-page",
    component: require.resolve("./src/templates/dynamic-page.jsx"),
    context: {
      myTeacher: "New teacher name",
      myName: "New student"
    }
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if ( page.path.match(/^\/contactUs/) ) {
    page.matchPath = "/contactUs/*"
    
    createPage(page)
  }
}
