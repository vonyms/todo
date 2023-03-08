window.onload = function () {

    const inputTache = document.getElementById('inputTache');
    const addTache = document.getElementById('btnAddTache');
    const li = document.querySelectorAll('li');
    const listTache = document.querySelector('.listTache');
    const hideElt = document.getElementById('hideElt');
    const closedTache = document.querySelector('.closedTache');
    const deleteAll = document.getElementById('deleteAll');
    const seeFinishedTask = document.getElementById('seeFinishedTask');
    const blockFinishedTask = document.querySelector('.blockFinishedTask');
    let checkedTask = document.querySelectorAll('ul.listTache li.checked');
    
    addTacheFunction = () => {
        
        if(inputTache.value === '')  return false;
        
        let li = document.createElement("li");
    
        let spanTitle = document.createElement("span");
        spanTitle.classList.add('title');
        spanTitle.textContent = inputTache.value;
        li.appendChild(spanTitle);
    
        let spanDelete = document.createElement("span");
        spanDelete.classList.add('deleteIcon');
        spanDelete.textContent = 'x';
        li.appendChild(spanDelete);
    
        listTache.appendChild(li);
        inputTache.value = '';
        
    };
    addTache.addEventListener('click', addTacheFunction);
        
    document.addEventListener('click', function(e) {
        if (e.target.tagName == 'SPAN' && e.target.classList.contains('deleteIcon')) {
            listTache.removeChild(e.target.parentElement);
        }
        if (e.target.tagName == 'SPAN' && e.target.classList.contains('title')) {
            if (e.target.parentElement.classList.contains('checked')) {
                e.target.parentElement.classList.remove('checked');
            } else {
                e.target.parentElement.classList.add('checked');
                if (hideElt.checked) {
                    e.target.parentElement.classList.add('hide');
                }
            }
            
        }
    });
    
    hideElt.addEventListener('click', function() {
        if (hideElt.checked) {
            document.querySelectorAll('ul.listTache li.checked').forEach(function(elt) {
                elt.classList.add('hide');
            })
        } else {
            document.querySelectorAll('ul.listTache li.checked').forEach(function(elt) {
                elt.classList.remove('hide');
            })
        }
    });

    seeFinishedTask.addEventListener('click', function () {
        if (seeFinishedTask.checked) {
            blockFinishedTask.classList.remove('hide');
            blockFinishedTask.classList.add('show');
            document.querySelectorAll('ul.listTache li.checked').forEach(function(elt) {
                closedTache.appendChild(elt);
            })
        } else {
            blockFinishedTask.classList.remove('show');
            blockFinishedTask.classList.add('hide');
        }
    })

    deleteAll.addEventListener('click', function () {
        if (deleteAll.checked) {
            listTache.remove(li);
            closedTache.remove(li);
        }
    });
    
}