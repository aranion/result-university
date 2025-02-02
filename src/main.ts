import Button from './Button'
import Manager from './Manager'

const listButtons: Array<Button> = [
  new Button('content_button_summer', '../resources/assets/sounds/summer.mp3'),
  new Button('content_button_rainy', '../resources/assets/sounds/rain.mp3'),
  new Button('content_button_winter', '../resources/assets/sounds/winter.mp3'),
]

const contentWrapBtn = document.querySelector('.content_wrap_buttons') as HTMLDivElement | null
const wrapControllerElem = document.querySelector('.content_controller')
const wrapForBackgroundImageElem = document.querySelector('.body_wrapper') as HTMLDivElement

const manager = new Manager(listButtons, wrapForBackgroundImageElem)

wrapControllerElem?.appendChild(manager.getController())

listButtons.forEach((button) => contentWrapBtn?.appendChild(button.getDomElem()))
