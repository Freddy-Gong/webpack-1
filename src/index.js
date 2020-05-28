import x from './x.js'

const div = document.getElementById("test")



const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => { })
}
div.appendChild(button)