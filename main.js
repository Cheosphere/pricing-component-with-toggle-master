const switchBtn = document.getElementById('switch')
const basicPlan = document.getElementById('basic')
const proPlan = document.getElementById('pro')
const masterPlan = document.getElementById('master')

switchBtn.addEventListener('click', () => {
    if (!basicPlan.classList.contains('plan')) {
        basicPlan.innerHTML = '199.99'
        proPlan.innerHTML = '249.99'
        masterPlan.innerHTML = '399.99'
        basicPlan.classList.add('plan')
        proPlan.classList.add('plan')
        masterPlan.classList.add('plan')
    } else {
        basicPlan.innerHTML = '19.99'
        proPlan.innerHTML = '24.99'
        masterPlan.innerHTML = '39.99'
        basicPlan.classList.remove('plan')
        proPlan.classList.remove('plan')
        masterPlan.classList.remove('plan')
    }
    anime({
        targets: '.card_price',
        opacity: [0,1],
        scale: [1.5,1],
        translateY: [-30,0],
        duration: 300,
        easing: 'easeInOutQuad'
    })
    anime({
        targets: '.card_price_symbol',
        opacity: [0,1],
        translateX: [-10,0],
        duration: 300,
        delay: 260,
        easing: 'easeInOutQuad'
    })
})