
/**
 *
 */
export class FloatingButton {
  /**
   * Responsible to create a floating action button
   */
  build() {
    const icon = document.createElement('i');
    icon.className = 'fixed-action-btn material-icons';
    icon.innerHTML = 'light_mode';
    icon.addEventListener('click', this.toggle_theme);
    const body = document.getElementsByTagName('body');
    body[0].appendChild(icon);
  }

  // eslint-disable-next-line require-jsdoc
  toggle_theme() {
    const body = document.querySelector('body')!;
    const ele = document.querySelector('.btn-floating .material-icons')!;
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      ele.innerHTML = 'light_mode';
    } else {
      body.classList.add('dark-theme');
      ele.innerHTML = 'dark_mode';
    }
  }
}
