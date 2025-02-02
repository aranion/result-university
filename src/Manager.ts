import Button from './Button'

export default class Manager {
  #controllerElem: HTMLInputElement
  #listButtons: Button[]

  constructor(listButtons: Button[], private wrapForBackgroundImageElem: HTMLDivElement) {
    this.#controllerElem = this.createControllerElem()
    this.#listButtons = listButtons

    this.addEventForButtons()
  }

  private createControllerElem(): HTMLInputElement {
    const controllerElem = document.createElement('input')

    controllerElem.type = 'range'
    controllerElem.name = 'volume'
    controllerElem.min = '0'
    controllerElem.max = '100'

    controllerElem.addEventListener('input', (event) => this.changeVolume(event))

    return controllerElem
  }
  private changeVolume(event: Event): void {
    this.#listButtons.forEach((item) => {
      if (event.target instanceof HTMLInputElement) {
        item.setVolumeSound(+event.target.value / 100)
      }
    })
  }
  private addEventForButtons(): void {
    this.#listButtons.forEach((btn: Button) => {
      const btnElem = btn.getDomElem()
      btnElem.addEventListener('click', (event: MouseEvent) => this.togglePlay(event, btn))
    })
  }
  private togglePlay(event: Event, pressedButton: Button): void {
    this.#listButtons.forEach((btn) => {
      this.wrapForBackgroundImageElem.classList.remove(btn.getImageClassName())

      if (pressedButton === btn) {
        btn.togglePlaySound()
        this.wrapForBackgroundImageElem.classList.add(btn.getImageClassName())
      } else {
        btn.pauseSound()
      }
    })
  }

  public getController(): HTMLInputElement {
    return this.#controllerElem
  }
}
