import uuid from 'uuid/v4'

class Treei18nNode {
  #name = null
  #type = null // Folder / File / field
  #polities = {
    types: ['folder', 'file', 'object', 'field']
  }
  reference = null // reference or not
  path = null // path element
  #uuid = null
  #content = null
  #children = []
  #country = null
  // Set functions
  Assign = {
    type: (type) => {
      if (!this.#polities.types.includes(type)) {
        this.#type = null
      } else {
        this.#type = type
      }
    },
    content: ({ field, value }) => {
      if (!field) {
        this.#content = null
      } else {
        this.#content = {
          field, value
        }
      }
    },
    children: (children) => {
      if (!children) {
        this.#children.push(null)
      }
      if (Array.isArray(children) && children.length > 0) {
        children.forEach(item => {
          if (item.Read.type() === 'folder') {
            this.#children.unshift(item)
          } else {
            this.#children.push(item)
          }
        })
        return
      }
      if (typeof children === 'object') {
        if (children.Read.type() === 'folder') {
          this.#children.unshift(children)
        } else {
          this.#children.push(children)
        }
        return
      }
      this.#children.push(children)
    },
    name: (name) => { this.#name = name },
    uuid: () => { this.#uuid = uuid() },
    country: (country) => { this.#country = country }
  }
  // Get functions
  Read = {
    type: () => { return this.#type },
    content: () => { return this.#content },
    children: () => { return this.#children },
    name: () => { return this.#name },
    uuid: () => { return this.#uuid },
    country: () => { return this.#country }
  }

  // VisualFormat

  treeElementUI = () => {
    return {
      label: this.#name,
      children: this.#children
    }
  }
}

export default Treei18nNode

// Pendiente
// Path control. file y http posibles
