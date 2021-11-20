import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'

export default {
  title: 'SDS Components/Image'
}

export const RFC = () => {
  return fragmentFrom.html`
    <h1>Image RFC</h1>
    <h2>Goals:</h2>
    <ul>
      <li>Use WebP where possible</li>
      <li>Fall back where unsupported</li>
      <li>Support cropping of image and both responsive and absolute sizing</li>
      <li>Ensure full accessibility adherence on implementations</li>
    </ul>
  `
}
