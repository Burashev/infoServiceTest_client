import {createStore} from 'vuex'
import notification from './modules/notification';
import user from './modules/user'

export default createStore({
    modules: {notification, user}
})
