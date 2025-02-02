export default class Button {
  #domElem: HTMLButtonElement
  #audioElement: HTMLAudioElement

  constructor(private imageClassName: string, soundPath: string) {
    this.#domElem = this.createDomElem(imageClassName)
    this.#audioElement = this.createElemAudio(soundPath)
  }

  private createDomElem(imageClassName: string): HTMLButtonElement {
    const domElem = document.createElement('button')

    domElem.classList.add('content_button')
    domElem.classList.add('default_img')
    domElem.classList.add(imageClassName)

    return domElem
  }
  private createElemAudio(soundPath: string): HTMLAudioElement {
    const audioElement = new Audio(soundPath)

    audioElement.preload = 'auto'
    audioElement.volume = 1

    return audioElement
  }

  public getDomElem(): HTMLButtonElement {
    return this.#domElem
  }

  public getAudioElement(): HTMLAudioElement {
    return this.#audioElement
  }
  public getImageClassName(): string {
    return this.imageClassName
  }
  public playSound(): void {
    if (this.#audioElement.paused) {
      this.#audioElement.play()
      this.#domElem.classList.add('content_button_active')
    }
  }
  public pauseSound(): void {
    if (!this.#audioElement.paused) {
      this.#audioElement.pause()
      this.#domElem.classList.remove('content_button_active')
    }
  }
  public togglePlaySound(): void {
    if (this.#audioElement.paused) {
      this.playSound()
    } else {
      this.pauseSound()
    }
  }
  public setVolumeSound(newVolume: number): void {
    if (newVolume >= 0 && newVolume <= 1) this.#audioElement.volume = newVolume
  }
}
