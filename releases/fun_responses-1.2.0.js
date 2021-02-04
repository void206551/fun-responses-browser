import ky from "https://unpkg.com/ky@0.26.0/index.js"
const url = 'https://void206551.dev/projects/fun/fun.json'
async function jokeUpdate() {
    if (!document.getElementById('joke')) return
    const body = await ky(url).json()
        let joke = body[0].joke
        let resJoke = joke[Math.floor(Math.random() * joke.length)]
    document.getElementById('joke').innerHTML = resJoke
    document.getElementById('joke').id = 'p-joke'
    return await jokeUpdate()

}
async function topicUpdate() {
    if (!document.getElementById('topic')) return
    const body = await ky(url).json()
        let topic = body[0].topic
        let resTopic = topic[Math.floor(Math.random() * topic.length)]
    document.getElementById('topic').innerHTML = resTopic
    document.getElementById('topic').id = 'p-topic'
    return await topicUpdate()
}
async function pickUpdate() {
    if (!document.getElementById('pickup')) return
    const body = await ky(url).json()
        let pickup = body[0].pickup
        let resPick = pickup[Math.floor(Math.random() * pickup.length)]
    document.getElementById('pickup').innerHTML = resPick
    document.getElementById('pickup').id = 'p-pickup'
    return await pickUpdate()
}
async function toastUpdate() {
    if (!document.getElementById('toast')) return
    const body = await ky(url).json()
        let toast = body[0].toast
        let resToast = toast[Math.floor(Math.random() * toast.length)]
    document.getElementById('toast').innerHTML = resToast
    document.getElementById('toast').id = 'p-toast'
    return await toastUpdate()
}
async function roastUpdate() {
    if (!document.getElementById('roast')) return
    const body = await ky(url).json()
        let roast = body[0].roast
        let resRoast = roast[Math.floor(Math.random() * roast.length)]
    document.getElementById('roast').innerHTML = resRoast
    document.getElementById('roast').id = 'p-roast'
    return await roastUpdate()
}

jokeUpdate().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});
topicUpdate().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});
pickUpdate().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});
toastUpdate().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});
roastUpdate().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});