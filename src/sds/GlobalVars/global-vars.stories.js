import { fragmentFrom } from 'elix/src/core/htmlLiterals'

export default {
  title: 'SDS Elements/Global CSS Variables'
}

export const Intro = () => {
  return fragmentFrom.html`
    <h1>Global CSS Variables</h1>
    <p>This section is a guide to help document our global CSS Variables that are available for use within your component CSS files.</p>
    <p>Each section has a list of tokens, their values, and a visual representation of that value.</p>
  `
}

export const SpacingVars = () => {
  return fragmentFrom.html`
    <h1>Spacing Vars</h1>
    <table>
      <thead>
        <tr>
          <th>Var Name</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--sds-g-spacing-xxx-small</td>
          <td>0.125rem</td>
          <td>
            <div class="example_spacing" style="height:0.125rem;width:0.125rem;" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-spacing-xx-small</td>
          <td>0.25rem</td>
          <td>
            <div class="example_spacing" style="height:0.25rem;width:0.25rem;" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-spacing-x-small</td>
          <td>0.5rem</td>
          <td>
            <div class="example_spacing" style="height:0.5rem;width:0.5rem;" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-spacing-small</td>
          <td>0.75rem</td>
          <td>
            <div class="example_spacing" style="height:0.75rem;width:0.75rem;" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-spacing-medium</td>
          <td>1rem</td>
          <td>
            <div class="example_spacing" style="height:1rem;width:1rem;" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-spacing-large</td>
          <td>1.5rem</td>
          <td>
            <div class="example_spacing" style="height:1.5rem;width:1.5rem;" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-spacing-x-large</td>
          <td>2rem</td>
          <td>
            <div class="example_spacing" style="height:2rem;width:2rem;" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-spacing-xx-large</td>
          <td>3rem</td>
          <td>
            <div class="example_spacing" style="height:3rem;width:3rem;" />
          </td>
        </tr>
      </tbody>
    </table>
    <style>
      .example_spacing {
        background-color: var(--sds-g-color-brand-base-contrast-3);
      }
    </style>
  `
}

export const FontSizingVars = () => {
  return fragmentFrom.html`
    <h1>Font Sizing Vars</h1>
    <table>
      <thead>
        <tr>
          <th>Var Name</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--sds-g-font-size-1</td>
          <td>0.625rem</td>
          <td style="font-size: 0.625rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-2</td>
          <td>0.75rem</td>
          <td style="font-size: 0.75rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-3</td>
          <td>0.8125rem</td>
          <td style="font-size: 0.8125rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-4</td>
          <td>0.875rem</td>
          <td style="font-size: 0.875rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-5</td>
          <td>1rem</td>
          <td style="font-size: 1rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-6</td>
          <td>1.125rem</td>
          <td style="font-size: 1.125rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-7</td>
          <td>1.25rem</td>
          <td style="font-size: 1.25rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-8</td>
          <td>1.5rem</td>
          <td style="font-size: 1.5rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-9</td>
          <td>1.75rem</td>
          <td style="font-size: 1.75rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-10</td>
          <td>2rem</td>
          <td style="font-size: 2rem">Aa</td>
        </tr>
        <tr>
          <td>--sds-g-font-size-11</td>
          <td>2.625rem</td>
          <td style="font-size: 2.625rem">Aa</td>
        </tr>
      </tbody>
    </table>
  `
}

export const RadiusSizingVars = () => {
  return fragmentFrom.html`
    <h1>Radius Vars</h1>
    <table>
      <thead>
        <tr>
          <th>Var Name</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--sds-g-radius-small</td>
          <td>0.125rem</td>
          <td>
            <div class="example_radius" style="border-radius:0.125rem" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-radius-medium</td>
          <td>0.25rem</td>
          <td>
            <div class="example_radius" style="border-radius:0.25rem" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-radius-large</td>
          <td>0.5rem</td>
          <td>
            <div class="example_radius" style="border-radius:0.5rem" />
          </td>
        </tr>
      </tbody>
    </table>
    <style>
      .example_radius {
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid #888;
      }
    </style>
  `
}

export const ColorVars = () => {
  return fragmentFrom.html`
    <h1>Brand Color Vars</h1>
    <table>
      <thead>
        <tr>
          <th>Var Name</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--sds-g-color-brand-base-1</td>
          <td>#fff</td>
          <td>
            <div class="example_color" style="background-color:#fff" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-brand-base-2</td>
          <td>#f1f3fd</td>
          <td>
            <div class="example_color" style="background-color:#f1f3fd" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-brand-base-3</td>
          <td>#dee5fc</td>
          <td>
            <div class="example_color" style="background-color:#dee5fc" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-brand-base-4</td>
          <td>#b8c8f9</td>
          <td>
            <div class="example_color" style="background-color:#b8c8f9" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-brand-base-contrast-1</td>
          <td>#5693f5</td>
          <td>
            <div class="example_color" style="background-color:#5693f5" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-brand-base-contrast-2</td>
          <td>#2b74d0</td>
          <td>
            <div class="example_color" style="background-color:#2b74d0" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-brand-base-contrast-3</td>
          <td>#1e5ca7</td>
          <td>
            <div class="example_color" style="background-color:#1e5ca7" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-brand-base-contrast-4</td>
          <td>#051732</td>
          <td>
            <div class="example_color" style="background-color:#051732" />
          </td>
        </tr>
      </tbody>
    </table>

    <h1>Neutral Vars</h1>
    <table>
      <thead>
        <tr>
          <th>Var Name</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--sds-g-color-neutral-base-1</td>
          <td>#fff</td>
          <td>
            <div class="example_color" style="background-color:#fff" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-neutral-base-2</td>
          <td>#f3f3f3</td>
          <td>
            <div class="example_color" style="background-color:#f3f3f3" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-neutral-base-3</td>
          <td>#e5e5e5</td>
          <td>
            <div class="example_color" style="background-color:#e5e5e5" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-neutral-base-4</td>
          <td>#c9c9cb</td>
          <td>
            <div class="example_color" style="background-color:#c9c9cb" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-neutral-base-contrast-1</td>
          <td>#929398</td>
          <td>
            <div class="example_color" style="background-color:#929398" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-neutral-base-contrast-2</td>
          <td>#737479</td>
          <td>
            <div class="example_color" style="background-color:#737479" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-neutral-base-contrast-3</td>
          <td>#5a5c61</td>
          <td>
            <div class="example_color" style="background-color:#5a5c61" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-neutral-base-contrast-4</td>
          <td>#181818</td>
          <td>
            <div class="example_color" style="background-color:#181818" />
          </td>
        </tr>
      </tbody>
    </table>
    
    <h1>Destructive Vars</h1>
    <table>
      <thead>
        <tr>
          <th>Var Name</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--sds-g-color-destructive-base-1</td>
          <td>#fff</td>
          <td>
            <div class="example_color" style="background-color:#fff" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-destructive-base-2</td>
          <td>#fef1ee</td>
          <td>
            <div class="example_color" style="background-color:#fef1ee" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-destructive-base-3</td>
          <td>#feded8</td>
          <td>
            <div class="example_color" style="background-color:#feded8" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-destructive-base-4</td>
          <td>#feb8ab</td>
          <td>
            <div class="example_color" style="background-color:#feb8ab" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-destructive-base-contrast-1</td>
          <td>#fe5c4c</td>
          <td>
            <div class="example_color" style="background-color:#fe5c4c" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-destructive-base-contrast-2</td>
          <td>#ea001e</td>
          <td>
            <div class="example_color" style="background-color:#ea001e" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-destructive-base-contrast-3</td>
          <td>#ba0517</td>
          <td>
            <div class="example_color" style="background-color:#ba0517" />
          </td>
        </tr>
        <tr>
          <td>--sds-g-color-destructive-base-contrast-4</td>
          <td>#640103</td>
          <td>
            <div class="example_color" style="background-color:#640103" />
          </td>
        </tr>
      </tbody>
    </table>

    <style>
      .example_color {
        width: 100px;
        height: 30px;
        border: 1px solid rgba(0,0,0,0.3);
      }
    </style>
  `
}
