(function () {
    "use strict";

    document.querySelectorAll('.tabs').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer'),
            first = tabsContainerElement.querySelector('[data-name=first]');

        first.classList.add('tabs-container-tab_selected');

        selectElement.onchange = function () {
            var name = selectElement.value,
                tabs = getTabByName (tabsContainerElement, name),
                div = document.querySelectorAll('div');
            
            div.forEach(function(clearDiv) {
                clearDiv.classList.remove('tabs-container-tab_selected');
            })          
            tabs.classList.add('tabs-container-tab_selected');
        }   
    });

    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    }
})();
