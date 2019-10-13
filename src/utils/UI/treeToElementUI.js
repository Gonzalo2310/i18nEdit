
const toElementUI = (treeNode) => {
  let children = []
  treeNode.forEach(item => {
    let itemChildren = item.children
    children.push({
      label: item.type === 'file' ? item.name.replace('.json', '') + '( ' + item.language + ' )' : item.name.replace('.json', ''),
      children: itemChildren.length > 0 ? toElementUI(itemChildren) : [],
      uuid: item.uuid,
      style: item.type,
      path: item.path
    })
  })
  return children
}

export default toElementUI
