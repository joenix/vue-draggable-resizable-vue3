import { isFunction } from './fns';

export function matchesSelectorToParentElements($el, selector, baseNode) {
  let node = $el;

  const matchesSelectorFunc = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].find(f => isFunction(node[f]));

  if (!isFunction(node[matchesSelectorFunc])) return false;

  do {
    if (node[matchesSelectorFunc](selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

export function getComputedSize($el) {
  const style = window.getComputedStyle($el);
  return [parseFloat(style.getPropertyValue('width'), 10), parseFloat(style.getPropertyValue('height'), 10)];
}

export function addEvent($el, event, handler) {
  if (!$el) return;

  if ($el.attachEvent) return $el.attachEvent('on' + event, handler);
  if ($el.addEventListener) return $el.addEventListener(event, handler, true);

  $el['on' + event] = handler;
}

export function removeEvent($el, event, handler) {
  if (!$el) return;

  if ($el.detachEvent) return $el.detachEvent('on' + event, handler);
  if ($el.removeEventListener) return $el.removeEventListener(event, handler, true);

  $el['on' + event] = null;
}
