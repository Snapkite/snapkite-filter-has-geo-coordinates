function isValid(tweet) {
  // This filter has no power
  if (CONFIG.content.with && CONFIG.content.without) {
    return true;
  }

  // This filter blocks everything
  if (!CONFIG.content.with && !CONFIG.content.without) {
    return false;
  }

  // Show only with this content
  if (CONFIG.content.with && !CONFIG.content.without) {
    if (
      tweet.geo
      && tweet.geo.coordinates
      && tweet.geo.coordinates[0]
      && tweet.geo.coordinates[1]
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Show only without this content
  if (!CONFIG.content.with && CONFIG.content.without) {
    if (!tweet.geo) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {
  isValid: isValid
};
