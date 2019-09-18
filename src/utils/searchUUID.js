const searchUuid = (uuid, VModel) => {
  let result = null
  console.log(typeof VModel)
  if (!Array.isArray(VModel) || VModel.length === 0) {
    console.log('primitive')
    return result
  }
  VModel.forEach(item => {
    console.log(item.Read.uuid())
    if (item.Read.uuid() === uuid) {
      result = item
    }
    if (item.Read.children() && item.Read.children().length > 0) {
      let childrenResult = searchUuid(uuid, item.Read.children())
      if (childrenResult) {
        result = item
      }
    }
  })
  return result
}

export default searchUuid
