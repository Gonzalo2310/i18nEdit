
const toElementUI = (treeNode) => {
  let children = []
  treeNode.forEach(item => {
    let itemChildren = item.Read.children()
    children.push({
      label: item.Read.type() === 'file' ? item.Read.name().replace('.json', '') + '( ' + item.Read.country() + ' )' : item.Read.name().replace('.json', ''),
      children: itemChildren.length > 0 ? toElementUI(itemChildren) : [],
      uuid: item.Read.uuid(),
      style: item.Read.type()
    })
  })
  return children
}

export default toElementUI
