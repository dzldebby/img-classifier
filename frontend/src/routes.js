import HelloWorld from './components/HelloWorld.vue'
import OwnImg from './components/OwnImg.vue'
import RandomImg from './components/RandomImg.vue'
import About from './components/About.vue'



// route components and routing

export default [

{path: '/',component: HelloWorld},
{path: '/own',component: OwnImg},
{path:'/random',component: RandomImg},
{path:'/about',component: About},

]
