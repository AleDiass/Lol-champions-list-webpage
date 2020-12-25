import ImgDefault from '../Assets/bg-main.jpg'


export function bgControl(img=ImgDefault){
    const rootdiv = document.getElementById("root")
    rootdiv.style.background = `url(${img}) no-repeat`
    rootdiv.style.backgroundSize = "cover"
    rootdiv.style.backgroundAttachment = "fixed"
    
}