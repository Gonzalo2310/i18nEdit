export function searchUuid (uuid, VModel) {
  if (Array.isArray(VModel)) {
    if (VModel.length > 0) {
      VModel.forEach(item => {
        let temporal = searchUuid(uuid, item)
        if (temporal) {
          return temporal.path
        }
      })
    }
    return '0'
  }
  if (VModel.Read) {
    if (VModel.Read.uuid() === uuid) {
      return VModel.path
    }
  }
  if (VModel.Read) {
    let tmpArray = VModel.Read.children()
    if (tmpArray && tmpArray.length > 0) {
      tmpArray.forEach((item, index) => {
        let temporal = searchUuid(uuid, item)
        if (temporal) {
          return temporal.path
        }
      })
    }
  }
  return '0'
}
