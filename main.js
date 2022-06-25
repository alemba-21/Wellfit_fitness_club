const main = () => {
	getCurrent()
}
fetch('https://alemba-21.github.io/json_file/')
	.then(response => response.json())
	.then(response => getExercise(response))
	.catch(err => console.error(err));

    const getCurrent = () => {
        fetch('https://alemba-21.github.io/json_file/')
        .then(response => response.json())
        .then(resp => {
            for(const key of resp){
                const train = document.querySelector('.categ')
                const newOne = document.createElement("li")
    
                newOne.innerText = key.name
                train.appendChild(newOne)
                newOne.style.cursor = "pointer"
                newOne.addEventListener('click', () => searchExercies(key.instructions))
            }
        })
        .catch(err => console.error(err));
    }
    const searchExercies = (nameId) => {
    
        fetch(`https://alemba-21.github.io/json_file/${nameId}`)
        .then(response => response.json())
        .then(recv => {
    })
}
const getExercise = (response) => {
	const exer = response
	for(const key of exer){
		let cat = key.category
	}
}

main()