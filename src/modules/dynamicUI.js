
const dynamicLI = () => {
    const taskList = document.querySelectorAll('.li'); 
    const bin = document.querySelectorAll('.icon');    
    const ellipsis = document.querySelectorAll('.icon2');     
    for (let i = 0; i < bin.length; i+=1){
        taskList[i].addEventListener('click', () => {
            taskList[i].classList.toggle('highlight');
        });       
        taskList[i].addEventListener('click', () => {
            ellipsis[i].classList.toggle('hidden');
            bin[i].classList.toggle('hidden')
        });
    }
};

export default dynamicLI;