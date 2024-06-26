window.globalTracker = {};
globalTracker.isPopupActive = false;

const testButton = document.getElementById("testButton");

const pageTopPositionRelative = document.getElementById("pageTopPositionRelative");



testButton.addEventListener('click', function () {
    if (!globalTracker.isPopupActive){
        const popUpField = document.createElement('div'); //add the popup
        popUpField.id = 'popupDiv';
        popUpField.style.height = document.querySelector('.mainContentContainer').offsetHeight * 0.6 + 'px';
        // popUpField.style.width = document.querySelector('.mainContentContainer').offsetWidth + 'px';
        // popUpField.style.left = getComputedStyle(document.querySelector('.mainContentContainer')).marginLeft;
        pageTopPositionRelative.append(popUpField);
        
        globalTracker.isPopupActive = true;

        const removePop = document.createElement('button');
        removePop.id = 'removePopup';
        removePop.textContent = "Remove me";
        popUpField.append(removePop);

        removePop.addEventListener('click', function () {
            const check = document.getElementById('popupDiv');
            check.remove();
            globalTracker.isPopupActive = false;
        })

        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && globalTracker.isPopupActive){
                const check = document.getElementById('popupDiv');
                check.remove();
                globalTracker.isPopupActive = false;
            }
        })
    }


})

