
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('.', true, /.*\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.'))
    )
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
