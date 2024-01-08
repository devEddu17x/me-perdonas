const si = document.querySelector('#si')
const no = document.querySelector('#no')
const modalClose = document.querySelector('.modal')

si.addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal-show')
    no.style.setProperty('opacity', '0')
})

modalClose.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('modal-show')
    no.style.setProperty('opacity', '1')
})

no.addEventListener('mouseover', () => {
    const randomX = parseInt(Math.random()*100)
    const randomY = parseInt(Math.random()*100)
    no.style.setProperty('position','absolute')
    no.style.setProperty('top', randomX + '%')
    no.style.setProperty('left', randomY + '%')
    no.style.setProperty('transform', `translate(-${randomX}%, ${randomY}%)`)
})

no.addEventListener('click', () => {
    const randomX = parseInt(Math.random()*100)
    const randomY = parseInt(Math.random()*100)
    
    no.style.setProperty('position', 'absolute')
    no.style.setProperty('top', randomX + '%')
    no.style.setProperty('left', randomY + '%')
    no.style.setProperty('transform', `translate(-${randomX}%, ${randomY}%)`)
})