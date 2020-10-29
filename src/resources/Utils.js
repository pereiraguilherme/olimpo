export default class Utils {
  static shouldReturnSize = (size, component = '') => {
    switch (component) {
      case 'button':
      case 'avatar':
        if (isNaN(size) || !size) {
          switch (size) {
            case 'small':
              return 50
            case 'medium':
              return 150
            case 'large':
              return 250
            default:
              return 100
          }
        } else {
          return size
        }
      case 'checkbox':
        if (isNaN(size)) {
          switch (size) {
            case 'small':
              return {
                width: 20,
                height: 20
              }
            case 'large':
              return {
                width: 30,
                height: 30
              }
            default:
              return {
                width: 25,
                height: 25
              }
          }
        } else {
          return {
            width: size,
            height: size
          }
        }
      default:
        return this.defaultSizeLogic(size)
    }
  }

  static defaultSizeLogic = (size) => {
    if (isNaN(size)) {
      switch (size) {
        case 'small':
          return 150
        case 'medium':
          return 220
        case 'large':
          return 300
        default:
          return 200
      }
    } else {
      return size
    }
  }

  static shouldReturnShape = (shape) => {
    switch (shape) {
      case 'circle':
        return { borderRadius: '50%' }
      case 'round':
        return { borderRadius: 12 }
      default:
        return { borderRadius: 3 }
    }
  }
}
