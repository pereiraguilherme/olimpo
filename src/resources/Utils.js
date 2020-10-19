
export default class Utils {
    
    static shouldReturnSize = (size) => {
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
