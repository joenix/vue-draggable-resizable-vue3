export function isFunction(f) {
  return typeof f === 'function' || Object.prototype.toString.call(f) === '[object Function]';
}

export function snapToGrid(grid, pendingX, pendingY, scale = 1) {
  const [scaleX, scaleY] = typeof scale === 'number' ? [scale, scale] : scale;
  return [Math.round(pendingX / scaleX / grid[0]) * grid[0], Math.round(pendingY / scaleY / grid[1]) * grid[1]];
}

export function getSize(el) {
  const { width, height } = el.getBoundingClientRect();
  return [parseInt(width), parseInt(height)];
}

export function computeWidth(parentWidth, left, right) {
  return parentWidth - left - right;
}

export function computeHeight(parentHeight, top, bottom) {
  return parentHeight - top - bottom;
}

export function restrictToBounds(value, min, max) {
  if (min !== null && value < min) {
    return min;
  }

  if (max !== null && max < value) {
    return max;
  }

  return value;
}
