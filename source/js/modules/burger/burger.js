import {ScrollLock} from '../../utils/scroll-lock';
import {FocusLock} from '../../utils/focus-lock';

export class Burger {
  constructor() {
    this._header = document.querySelector('[data-navigation]');
    this._burger = document.querySelector('[data-burger-element]');
    this._burgerButton = document.querySelector('[data-burger-button]');
    this._scrollLock = new ScrollLock();
    this._focusLock = new FocusLock();
    this._isMenuOpen = false;

    this._onBurgerClick = this._onBurgerClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  init() {
    if (!this._burger) {
      return;
    }

    this._burger.addEventListener('click', this._onBurgerClick);
  }

  _openMenu() {
    this._isMenuOpen = true;
    this._header.classList.add('main-navigation--is-open');
    this._burgerButton.classList.add('toggle__button--is-open');
    this._burger.setAttribute('aria-pressed', 'true');
    this._scrollLock.disableScrolling();
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.addEventListener('click', this._onDocumentClick);
    this._focusLock.lock('[data-header]');
    if (window.ls) {
      window.ls.stop();
    }
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._header.classList.remove('main-navigation--is-open');
    this._burgerButton.classList.remove('toggle__button--is-open');
    this._burger.setAttribute('aria-pressed', 'false');
    this._scrollLock.enableScrolling();
    this._focusLock.unlock('[data-header]');
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
    if (window.ls) {
      window.ls.start();
    }
  }

  _onBurgerClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  _onDocumentClick(evt) {
    if (evt.target.hasAttribute('data-close-menu')) {
      this._closeMenu();
    }
  }
}
