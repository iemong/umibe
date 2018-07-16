import qs from 'querystring';

/**
 * Twitterシェア用のリンクをつくる
 * @param {String} opts.url シェアしたいURL
 * @param {String} opts.text シェア文言
 * @param {String} opts.hashtags ハッシュタグ
 * @return {String}
 */
export function createTwitterIntent(opts = {}) {
  return `http://twitter.com/share?${qs.stringify(opts)}`;
}

/**
 * Facebookシェア用のリンクをつくる
 * @param {String} u シェアしたいURL
 * @return {String}
 */
export function createFacebookIntent(u) {
  return `http://www.facebook.com/share.php?${qs.stringify({ u })}`;
}

/**
 * LINEシェア用のリンクをつくる
 * @param {String} url シェアしたいURL
 * @return {String}
 */
export function createLineIntent(url) {
  return `https://social-plugins.line.me/lineit/share?${qs.stringify({ url })}`;
}
