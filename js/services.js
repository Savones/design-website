let openPackage = new Set();

function showDetails(packageNro) {
    const packageList = document.getElementById(`${packageNro}`);
    const packageItem = packageList.parentElement;
    let buttonClicked = packageItem.querySelector(`.${packageNro}`);

    if (openPackage.has(packageList)) {
        packageItem.classList.remove('expanded');
        packageList.classList.add('hidden-container');
        packageItem.style.height = '230px';
        openPackage.delete(packageList)
        buttonClicked.innerHTML = 'Details';
    } else {
        packageItem.classList.add('expanded');
        packageList.classList.remove('hidden-container');
        packageItem.style.height = `auto`;
        openPackage.add(packageList);
        buttonClicked.innerHTML = 'Hide';
    }
}
