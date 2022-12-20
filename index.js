
const lunchList = ["idli", "Dosa"]
const ulListEle = document.getElementById("ulList")
currentIndex = -1;

function showLunchAllEle() {
    ulListEle.innerHTML=""
    lunchList.map((item,index)=>showLunchEle(item,index))
}
function showLunchEle (item,index) {
    const liEle = document.createElement("li")
    liEle.innerHTML=item;
    
    const editBtn = document.createElement("button")
    editBtn.innerHTML="Edit"
    editBtn.onclick=()=>editTask(item, index)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML="Delete"
    deleteBtn.onclick=()=>deleteTask(index,item)

    
    liEle.appendChild(editBtn)
    liEle.appendChild(deleteBtn)
    ulListEle.appendChild(liEle)
    
}

showLunchAllEle();

function addLunchEle() {

    const lunchEle = document.getElementById("lunchName").value
    if(currentIndex === -1) {
        lunchList.push(lunchEle)
        showLunchAllEle();
    } else {
        lunchList[currentIndex] = lunchEle
        showLunchAllEle();
    }
}

function editTask(item,index){
    const lunchEle = document.getElementById("lunchName")
        lunchEle.value= lunchList[index];
        currentIndex = index
}

function deleteTask(item,index) {
    currentIndex = index
    lunchList.splice(currentIndex,1)
    showLunchAllEle();
}