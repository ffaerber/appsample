const index = async ctx => {
  let title = 'appsample'
  await ctx.render('user.ejs', {
    title,
  })
}

module.exports = {
  index
}