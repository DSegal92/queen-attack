let queensToPlace = 2;

export const testAction = (x,y) => {
  if (queensToPlace > 0) {
    queensToPlace--;
    return {
      type: 'PLACE_QUEEN',
      x: x,
      y: y
    }
  }
  else {
    return {
      type: 'WARN'
    }
  }
}
