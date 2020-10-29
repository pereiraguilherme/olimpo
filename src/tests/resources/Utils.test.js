import Utils from '../../resources/Utils'

describe('Utils', () => {
  describe('defaultSizeLogic', () => {
    it('should return 200 when no inputs', () => {
      const result = Utils.defaultSizeLogic()
      expect(result).toBe(200)
    })

    it('should return 150 when small string as input', () => {
      const result = Utils.defaultSizeLogic('small')
      expect(result).toBe(150)
    })

    it('should return 220 when medium string as input', () => {
      const result = Utils.defaultSizeLogic('medium')
      expect(result).toBe(220)
    })

    it('should return 300 when large string as input', () => {
      const result = Utils.defaultSizeLogic('large')
      expect(result).toBe(300)
    })
  })

  describe('shouldReturnSize', () => {
    it('should call defaultSizeLogic when no input and return 200', () => {
      Utils.defaultSizeLogic = jest.fn().mockReturnValue(200)
      const result = Utils.shouldReturnSize()
      expect(result).toBe(200)
      expect(Utils.defaultSizeLogic).toBeCalled()
    })

    it('should return 150 when inputs is medium and button', () => {
      const result = Utils.shouldReturnSize('medium', 'button')
      expect(result).toBe(150)
    })

    it('should return 50 when inputs is small and avatar', () => {
      const result = Utils.shouldReturnSize('small', 'avatar')
      expect(result).toBe(50)
    })

    it('should return the given input when not a string', () => {
      const result = Utils.shouldReturnSize(500, 'avatar')
      expect(result).toBe(500)
    })

    it('should return and object when inputs is small and checkbox', () => {
      const result = Utils.shouldReturnSize('small', 'checkbox')
      expect(result).toStrictEqual({ width: 20, height: 20 })
    })

    it('should return and object when inputs is a number and checkbox', () => {
      const result = Utils.shouldReturnSize(200, 'checkbox')
      expect(result).toStrictEqual({ width: 200, height: 200 })
    })
  })

  describe('shouldReturnShape', () => {
    it('should return an object with borderRadius equal to 3 when no inputs', () => {
      const result = Utils.shouldReturnShape()
      expect(result).toStrictEqual({ borderRadius: 3 })
    })

    it('should return an object with borderRadius equal to 12 when input is round', () => {
      const result = Utils.shouldReturnShape('round')
      expect(result).toStrictEqual({ borderRadius: 12 })
    })

    it('should return an object with borderRadius equal to 50% when input is circle', () => {
      const result = Utils.shouldReturnShape('circle')
      expect(result).toStrictEqual({ borderRadius: '50%' })
    })
  })
})
