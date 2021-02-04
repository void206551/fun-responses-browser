import ky from "https://unpkg.com/ky@0.26.0/index.js"
const url = 'https://void206551.dev/projects/fun/fun.json'
async function joke() {
    if (!document.getElementById('joke')) return
    const body = await ky(url).json()
        let joke = body[0].joke
        let resJoke = joke[Math.floor(Math.random() * joke.length)]
        return document.getElementById('joke').innerHTML = resJoke
}
async function topic() {
    if (!document.getElementById('topic')) return
    const body = await ky(url).json()
        let topic = body[0].topic
        let resTopic = topic[Math.floor(Math.random() * topic.length)]
        return document.getElementById('topic').innerHTML = resTopic
}
async function pick() {
    if (!document.getElementById('pickup')) return
    const body = await ky(url).json()
        let pickup = body[0].pickup
        let resPick = pickup[Math.floor(Math.random() * pickup.length)]
        return document.getElementById('pickup').innerHTML = resPick
}
async function toast() {
    if (!document.getElementById('toast')) return
    const body = await ky(url).json()
        let toast = body[0].toast
        let resToast = toast[Math.floor(Math.random() * toast.length)]
        return document.getElementById('toast').innerHTML = resToast
}
async function roast() {
    if (!document.getElementById('roast')) return
    const body = await ky(url).json()
        let roast = body[0].roast
        let resRoast = roast[Math.floor(Math.random() * roast.length)]
        return document.getElementById('roast').innerHTML = resRoast
}

joke().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});
topic().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});
pick().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});
toast().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});
roast().then().catch((error) => {
    console.error("Fun Responses Error: " + error);
});