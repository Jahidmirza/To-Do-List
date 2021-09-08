document.querySelector('#newAdd').onclick = function(){
    if(document.querySelector('#inputTask').value.length== 0){
        alert("Please Enter Your Task")
    }
    else{
        document.querySelector('#addTasks').innerHTML += `
        
    <div class="task">
         <span id="taskName">
               ${document.querySelector
               ('#inputTask').value}
         </span>
         <button class="dalated">
         <i class="far fa-trash-alt icon"></i>
         </button>
    </div>
    
    `;

    let currentTtask = document.querySelectorAll(".dalated");
    for (let i = 0; i < currentTtask.length; i++) {
        currentTtask[i].onclick = function(){
            this.parentNode.remove();
        }
        
    }

    let tasks = document.querySelectorAll('.task');
    for(let i=0; i<tasks.length; i++){
        tasks[i].onclick = function (){
            this.classList.toggle('completed')
        }
    }

    document.querySelector('#inputTask').value = "";

    }
}
