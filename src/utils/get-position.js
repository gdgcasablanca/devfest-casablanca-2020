function getPosition({ t, b, r, l }) {
  return {
    position: 'absolute',
    top: t,
    left: l,
    right: r,
    bottom: b,
  }
}

export default getPosition
