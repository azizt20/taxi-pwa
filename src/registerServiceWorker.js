/* eslint-disable no-console */

import {register} from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log(
                'App is being served from cache by a service worker.\n' +
                'For more details, visit https://goo.gl/AFskqB'
            )
        },
        registered() {
            const websocket = new WebSocket('wss://socketsbay.com/wss/v2/2/demo/');
            websocket.onopen = (e) => {
                console.log(e)
                setInterval(websocket.send('---------------'),1000)
                setInterval(console.log('---------------'),1000)
                setInterval(alert('---------------'),10000)
                console.log('111111111111111111')
            },
                websocket.onmessage = (e) => {
                    console.log(e.data)
                    setInterval(websocket.send('---------------'),1000)


                    // postMessage(e.data)
                }





            console.log('-------------------------------------------------------')
            console.log('Service worker has been registered.')
        },
        cached() {
            console.log('Content has been cached for offline use.')
        },
        updatefound() {
            console.log('New content is downloading.')
        },
        updated() {
            console.log('New content is available; please refresh.')
        },
        offline() {
            console.log('No internet connection found. App is running in offline mode.')
        },
        error(error) {
            console.error('Error during service worker registration:', error)
        }
    })
}
