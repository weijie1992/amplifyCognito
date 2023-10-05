import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import AmplifyVue from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'

Amplify.configure(awsconfig)
const app = createApp(App)
app.use(AmplifyVue)
app.mount('#app')
