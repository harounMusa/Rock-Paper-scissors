const gameContainer = document.querySelector(".container"),
userInput = document.querySelector(".user_input img"),
cpuInput = document.querySelector(".cpu_input img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// console.log(gameContainer, userInput, cpuInput, result, optionImages)

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active")

        userInput.src = cpuInput.src = "rock.png";
        result.textContent = "Wait..."

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active")
        })

        gameContainer.classList.add("start")
        let timer = setTimeout(() => {
            gameContainer.classList.remove("start")
            let imageSrc = e.target.querySelector("img").src;
            userInput.src = imageSrc
            
            let randomNumber = Math.floor(Math.random() * 3)
    
            let cpuImage = ["rock.png", "paper.png", "scissors.png"]
            cpuInput.src = cpuImage[randomNumber]
    
            let cpuValue = ["R","P","S"][randomNumber]
            let userValue = ["R","P","S"][index]
    
    
            let outComes = {
                RR: "Draw",
                RP: "Computer",
                RS: "You",
                PP: "Draw",
                PS: "Computer",
                PR: "You",
                SS: "Draw",
                SR: "Computer",
                SP: "You",
            }
            let outComeValue = outComes[userValue + cpuValue]
    
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
            console.log(outComeValue)
        }, 2000)
    })
})


