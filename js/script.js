const menuItems = document.querySelectorAll('.buy_site_box');

let previousSelectedItem = menuItems[0];

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        previousSelectedItem?.classList.remove('buy_site_active')
        previousSelectedItem = item;
        item.classList.add('buy_site_active');
    })
})
