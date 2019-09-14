
const toElementUI = (treeNode) => {
  let children = []
  treeNode.forEach(item => {
    let itemChildren = item.Read.children()
    children.push({
      label: item.Read.name(),
      children: itemChildren.length > 0 ? toElementUI(itemChildren) : [],
      uuid: item.Read.uuid()
    })
  })
  return children
}

export default toElementUI
