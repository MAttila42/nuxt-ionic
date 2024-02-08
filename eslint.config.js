import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  vue: true,
  rules: {
    'vue/component-name-in-template-casing': []
  }
})
