import router from './router'

// const whiteList = []

router.beforeEach(async (to, from, next) => {
  const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  if (flag) {
    if (!to.meta.isMobile) {
      next('/phone/category')
    } else {
      next()
    }
  } else {
    if (to.meta.isMobile) {
      next('/dashboard')
    } else {
      next()

    }
  }
})