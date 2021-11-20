import readme from '../../../README.md'

export default {
  title: 'C360 Test/Welcome'
}

export const Intro = () => {
  // the replace is for updating the url path on static assets
  return readme.replace(/"static\/demo/g, '"demo')
}
