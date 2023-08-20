let openPackage = new Set();

function showDetails(packageNro) {
    const packageList = document.getElementById(`${packageNro}`);
    const packageItem = packageList.parentElement;

    if (openPackage.has(packageList)) {
        packageList.classList.add('hidden-container');
        packageItem.style.height = '230px';
        openPackage.delete(packageList)
    } else {
        packageList.classList.remove('hidden-container');
        packageItem.style.height = `auto`;
        openPackage.add(packageList);
    }
}