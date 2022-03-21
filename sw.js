self.addEventListener('install', event => {
    event.waitUntil(wait(1000 * 10));
})


function wait(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay))
}

self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
});


self.addEventListener('fetch', event => {
    console.log('Got fetch', event);
});
