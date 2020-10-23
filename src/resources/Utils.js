
export default class Utils {
    
    static shouldReturnSize = (size, component = "") => {
        switch (component) {
            case "avatar":
                if (isNaN(size)){
                    switch (size) {
                        case "small":
                            return 50;
                        case "medium":
                            return 150;
                        case "large":
                            return 250;
                        default:
                            return 100;
                    }
                } else {
                    console.log(size)
                    return size;
                }
            default:
                return this.defaultSizeLogic(size);
        }
        
    }

    defaultSizeLogic = (size) => {
        if (isNaN(size)){
            switch (size) {
                case "small":
                    return 150;
                case "medium":
                    return 200;
                case "large":
                    return 300
                default:
                    break;
            }
        } else {
            return size;
        }
    }
}
