const buttons = document.querySelectorAll('.filter button');
const cards = document.querySelectorAll('.project-container>div');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.filter === 'all') {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        } else {
            button.classList.toggle('active');
            document.querySelector('[data-filter="all"]').classList.remove('active');
        }
        filterCards();
    });
});

function filterCards() {
    const activeButtons = Array.from(buttons)
        .filter(btn => btn.classList.contains('active') && btn.dataset.filter !== 'all');
    if (document.querySelector('[data-filter="all"]').classList.contains('active')
        || activeButtons.length === 0) {
        cards.forEach(crd => crd.removeAttribute('hidden'));
        return;
    }
    const activeFilters = activeButtons.map(btn => btn.dataset.filter);
    cards.forEach(crd => {
        const visible = activeFilters.some(filter => crd.dataset[filter] === 'true');
        visible ? crd.removeAttribute('hidden') : crd.setAttribute('hidden', 'true');
    });
}