const nodeTree = (item, nodeKey = null) => {
  if (!item) {
    return []
  }
  if (typeof item === 'string') {
    return { label: item }
  }
  if (typeof item !== 'object') {
    return []
  }
  let result = []
  let nkey = nodeKey ? nodeKey + '.' : ''
  const keys = Object.keys(item)
  keys.forEach(element => {
    let itemValue = item[element]
    if (typeof itemValue === 'string') {
      result.push({
        label: element,
        labelValue: itemValue,
        nodeKey: nkey + element
      })
    } else {
      result.push({
        label: element,
        children: nodeTree(itemValue, nkey + element),
        nodeKey: nkey + element
      })
    }
  })
  return result
}

export default nodeTree
