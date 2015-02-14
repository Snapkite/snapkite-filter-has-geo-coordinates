var CONFIG = require('./config.json');

function isValid(tweet) {
  // This filter doesn't block anything
  if (CONFIG.content.with && CONFIG.content.without) {
    return true;
  }

  // This filter blocks all tweets
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
    }

    return false;
  }

  // Show only without this content
  if (!CONFIG.content.with && CONFIG.content.without) {
    if (
      tweet.geo
      && tweet.geo.coordinates
      && tweet.geo.coordinates[0]
      && tweet.geo.coordinates[1]
    ) {
      return false;
    }

    return true;
  }
}

module.exports = {
  isValid: isValid
};
