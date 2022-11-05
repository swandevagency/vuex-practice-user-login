import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {userName: 'firstUserName', password: 'firstPassword'},
      {userName: 'secondUserName', password: 'secondPassword'},
      {userName: 'thirdUserName', password: 'thirdPassword'}
    ],
    paragraph: ''
  },
  getters: {
    // getUsers: state => {
    //   if(localStorage.getItem('users')) {
    //     state.users = JSON.parse(localStorage.getItem('users'))
    //   }
    // }
  },
  mutations: {
    initialiseStore(state) {
			if(localStorage.getItem('store')) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('users')))
				);
			}
		},
    userLogin: (state, {userName, password}) => {
    let findObj = state.users.find(function(user) {
      var returnValue = true;
      returnValue &= user.userName == userName;
      returnValue &= user.password == password;
      return returnValue
    })
    var isExist = findObj !== undefined
    if(isExist){
      console.log("mojood ast");
      state.paragraph = 'You have entered the page'
    }
    else{
      console.log("mojood nist");
      state.paragraph = "This user doesn't exist"
    }
   },
   signup: (state, {newUser}) => {
    if(newUser.userName && newUser.password) {
      state.users.push(newUser)
      localStorage.setItem('users', JSON.stringify(state.users))
    }
    console.log(state.users)
   }
  },
  actions: {
    userLogin({commit}, {userName, password}) {
      commit('userLogin', {userName, password})
    },
    signup({commit}, {newUser}) {
      commit('signup', {newUser})
    }
  },
  modules: {
  }
})