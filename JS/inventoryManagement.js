window.inventoryManagement = {};
window.inventory = {};

inventoryManagement.maxInventorySpace = 5;
inventoryManagement.itemsInInventoryAmount = 0;

// inventoryManagement.addItemToInventory = function (item){
//     if (this.itemsInInventoryAmount === this.maxInventorySpace){
//         console.log("Inventory full");
//     } else {
//         inventory[item] = 1;
//         this.itemsInInventoryAmount ++;
//         console.log(`${item} added to Inventory.`);
//     }
// };

inventoryManagement.addItemToInventory = function (){
    if (this.itemsInInventoryAmount === this.maxInventorySpace){
        return false;
    } else {
        return true;
    }
};

inventoryManagement.removeItemFromInventory = function (item){
    inventory[item] = 0;
    inventoryManagement.itemsInInventoryAmount --;
    console.log(`${item} removed from Inventory.`)
}




//// test button adding items

const dummyArray = ["hi", "Saori", "I", "Love", "you"];
const inventoryBoxDiv = document.querySelector('.inventoryBox');

const addItemButton = document.querySelector('.addItemButton');
const removeItemButton = document.querySelector('.removeItemButton');

addItemButton.addEventListener('click', function(){
    if (inventoryManagement.addItemToInventory()){
        const itemToInventory = document.createElement('div');
        itemToInventory.classList.add('inventoryItem');
        itemToInventory.classList.add(dummyArray[0]);



        const itemNameInInventory = document.createElement('p');
        itemNameInInventory.className = 'inventoryItemText';
        itemNameInInventory.textContent = dummyArray[0];
        itemToInventory.append(itemNameInInventory);
    
        dummyArray.push(dummyArray[0]);
        dummyArray.splice(dummyArray[0], 1);
    
        inventoryBoxDiv.append(itemToInventory);

        inventory[dummyArray[0]] = 1;         
        inventoryManagement.itemsInInventoryAmount ++;
        console.log(`${dummyArray[0]} added to Inventory.`);

            const itemButtonContainer = document.createElement('div');
            itemButtonContainer.className = 'inventoryItemButtonContainer';
            itemToInventory.append(itemButtonContainer);

                const inspectButton = document.createElement('button');
                inspectButton.className = 'inventoryInspectButton';
                inspectButton.textContent = 'Inspect';
                itemButtonContainer.append(inspectButton);

                const dropButton = document.createElement('button');
                dropButton.className = 'inventoryDropButton';
                dropButton.textContent = 'Drop';
                itemButtonContainer.append(dropButton);

        dropButton.addEventListener('click', function(event){
            const elementToRemove = event.target.parentElement.parentElement;
            inventoryManagement.itemsInInventoryAmount --;
            console.log(`${elementToRemove.textContent} removed from Inventory.`);
            elementToRemove.remove();
        })

    }

});

removeItemButton.addEventListener('click', function(){

    const elementToRemove = document.getElementsByClassName('inventoryItem')[0];
    console.log(elementToRemove);
    if (inventoryManagement.itemsInInventoryAmount > 0){
        inventoryManagement.itemsInInventoryAmount --;
        console.log(`${elementToRemove.textContent} removed from Inventory.`);
        elementToRemove.remove();
    }

});