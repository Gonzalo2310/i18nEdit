import tableLanguage from '../../resources/languages'

const searchInFileName = (nameFile) => {
  console.log(tableLanguage.es)
  const name = nameFile
  let country = null
  let region = null
  if (name.includes('-')) {
    let tmpArray = name.split('-')
    country = tmpArray[0]
    region = tmpArray[1]
  } else {
    country = name
  }
  return region ? searchInJson(country, region) : searchInJson(country)
}

export default searchInFileName

function searchInJson (country, region = null) {
  const zone = tableLanguage[country]
  if (!zone) {
    return 'Not found'
  }
  return region ? zone.cultures[country + '-' + region].native : zone.native
}
