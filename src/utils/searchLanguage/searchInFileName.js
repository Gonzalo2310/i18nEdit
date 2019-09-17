import tableLanguage from '../../resources/language'
import tableCountry from '../../resources/country'

const searchInFileName = (nameFile) => {
  const name = nameFile
  let country = null
  let region = null
  if (name.includes('-')) {
    let tmpArray = name.split('-')
    country = tableLanguage[tmpArray[0]]
    tableCountry.forEach(item => {
      if (item[0].Code === tmpArray[1]) {
        region = item[0]
      }
    })
  } else {
    country = tableLanguage[name]
  }
  return region ? searchInJson(country, region) : searchInJson(country)
}

function searchInJson (country, region = null) {
  return region ? country.nativeName + ' ( ' + region.Name + ' )' : country.nativeName
}

export default searchInFileName
