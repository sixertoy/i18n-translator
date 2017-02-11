class BrowserUtils {

  static getCurrentUrl () {
    return window.location.href;
  }

  static navigateTo (href) {
    window.location = href;
  }

}

export default BrowserUtils;
