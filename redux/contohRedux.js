//Kode import Redux
const redux = require('redux')

//Import method store
const createStore = redux.createStore

var initialState = {
    loggedIn : false,
    username : null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS' : 
            return {
                ...state,
                loggedIn: true,
                username: action.payload.username
            }
        default: 
            return state
    }

}

//Buat Redux Store
const store = createStore(rootReducer)

store.subscribe( () => {
    console.log('subscription', store.getState())
})

console.log(store.getState())

//Jalankan file contohRedux.js dengan Node JS. Cara nya adalah buka terminal dan masuk ke folder sampleRedux 
//dan jalankan perintah berikut. (Bisa juga menggunakan terminal di dalam VS Code)
//node contohRedux.js

/*Buat variabel action. Action adalah Object. 
Gunakan type untuk mendeskripsikan jenis action, 
dan gunakan payload untuk mengirimkan data berupa username Andrea. 
Isi dari type pada umumnya ditulis dalam huruf kapital.
*/

var actionLoginSuccess = {
    type: 'LOGIN_SUCCESS', 
    payload: {username: 'Andrea'}
}

//Dispatch Action
store.dispatch(actionLoginSuccess)

console.log('after dispatch' , store.getState())

//Reducer tidak boleh melakukan perubahan terhadap state secara langsung (mutate)
//Lakukan perubahan secara immutable, 
//dengan cara mengcopy object state dengan spread syntax, kemudian memodifikasinya.